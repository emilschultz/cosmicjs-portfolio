import React, { useState, useEffect } from 'react';
import Cosmic from 'cosmicjs';

import SiteNavigation from '../../components/SiteNavigation';
// STYLES
import Container from '../../components/Container';
import PageTitle from '../../components/PageTitle';


const HomeContainer = () => {
    const [pageData, setPageData] = useState(null);

    useEffect(() => {
        const cosmic = new Cosmic();
        const bucket = cosmic.bucket({
            slug: process.env.BUCKET_SLUG,
            read_key: process.env.READ_KEY
        });

        bucket.getObject({
            slug: 'home',
            props: 'title,content'
        })
            .then(data => {
                setPageData(data.object);
            })
            .catch(error => {
                console.error(error)
            });
    }, []);
    
    const renderSkeleton = () => {
        return (
            <p>Loading...</p>
        )
    }
    
    const renderPage = () => {
      return( 
        <>
            <SiteNavigation />
            <Container as="main">
                <PageTitle>{pageData.title}</PageTitle>
                <div dangerouslySetInnerHTML={{__html: pageData.content}}/>
            </Container>
        </>
        
    )
    }
    return(
        <>
            {(pageData === null) ? renderSkeleton() : renderPage()}
        </>
    )
}

export default HomeContainer;