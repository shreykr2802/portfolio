
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import BlogContents from '../../components/blogContents/BlogContents';
import { fetchBlogDataStart } from '../../redux/slices/blogSlice';
import { fetchTagDataStart } from '../../redux/slices/tagSlice';

const Blog: NextPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBlogDataStart());
        dispatch(fetchTagDataStart());
    }, [dispatch])

    return (
        <>
            <Head>
                <title>{`Shrey Kumar's Blog`}</title>
                <meta name="description" content="Shrey Kumar | Blog - Blogs From Shrey" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
            </Head>
            <BlogContents />
        </>
    );
}

export default Blog;