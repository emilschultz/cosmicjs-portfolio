import React, { useState, useEffect } from 'react';
import Cosmic from 'cosmicjs';

import SiteNavigation from '../../components/SiteNavigation';


const ContactContainer = () => {
    const [pageData, setPageData] = useState(null);

    useEffect(() => {
        const cosmic = new Cosmic();
        const bucket = cosmic.bucket({
            slug: process.env.BUCKET_SLUG,
            read_key: process.env.READ_KEY
        });

        bucket.getObject({
            slug: 'contact',
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
        <main>
            <SiteNavigation />
            <h1>{pageData.title}</h1>
            <div dangerouslySetInnerHTML={{__html: pageData.content}}/>
        </main>
    )
    }
    return(
        <>
            {(pageData === null) ? renderSkeleton() : renderPage()}
        </>
    )
}

export default ContactContainer;