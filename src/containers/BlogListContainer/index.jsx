import React, { useState, useEffect } from 'react';
import Cosmic from 'cosmicjs';

import SiteNavigation from '../../components/SiteNavigation';

const BlogListContainer = () => {
    const [pageData, setPageData] = useState(null);

    useEffect(() => {
        const cosmic = new Cosmic();
        const bucket = cosmic.bucket({
            slug: process.env.BUCKET_SLUG,
            read_key: process.env.READ_KEY
        });

        bucket.getObjects({
            type: 'blog-lists',
            limit: 5,
            props: 'title,slug', 
        })
            .then(data => {
                console.log(data)
                setPageData(data);
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
            <h1>My blog posts</h1>
            <ul>
                {pageData.objects.map(item => {
                    return(
                        <li>
                            <a href={`/blog/${item.slug}`}>{item.title}</a>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
    }
    return(
        <>
            {(pageData === null) ? renderSkeleton() : renderPage()}
        </>
    )
}

export default BlogListContainer;