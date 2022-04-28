import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import BlogDetail from '../../components/blogDetail/BlogDetail';
import Header from '../../components/header/Header';
import { fetchContentDataStart } from '../../redux/slices/contentSlice';

import classes from "../../styles/Home.module.scss";
import useSelector from '../../utils/useSelector';

const Post = () => {

    const router = useRouter()
    const dispatch = useDispatch();

    const blog = useSelector(state => state.content.content);

    useEffect(() => {
        const { id } = router.query;
        dispatch(fetchContentDataStart(id));
    }, [])

    return (
        <>
            <Head>
                <title>{blog.title}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
            </Head>
            <Header />
            <main className={classes['main-section']}>
                <BlogDetail blog={blog} />
            </main>
        </>
    )
}

export async function getServerSideProps(context: any) {
    return {
        props: {}, // will be passed to the page component as props
    }
}

export default Post;