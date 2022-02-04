
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import BlogContents from '../../components/blogContents/BlogContents';
import { fetchBlogDataStart } from '../../redux/slices/blogSlice';

const Blog: NextPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        // fetch('/api/hello').then(res => res.json()).then(res => console.log(res))
        //     .catch(err => console.log(err));
        dispatch(fetchBlogDataStart());
    }, [dispatch])

    return (
        <>
            <Head>
                <title>Shrey Kumar's Blog</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
            </Head>
            <BlogContents />
        </>
    );
}

export default Blog;