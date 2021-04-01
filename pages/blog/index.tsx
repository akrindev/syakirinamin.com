import Layout from "@/components/Layout";
import PostList from "@/components/PostList";
import { GetStaticProps } from "next";
import Head from "next/head";
import { getPosts, Posts } from "../../lib/notion";

export default function index({ posts }) {
    return (
        <Layout>
            <Head>
                <title>Blog</title>
            </Head>
            <div className='flex flex-col my-5 p-5'>
                <h1 className='font-extrabold text-2xl'>Blog</h1>
                <div className='text-gray-500 leading-tight'>Sharing is caring</div>
            </div>
            <div className='mb-20 divide-y-2 divide-gray-100'>
                {posts && posts.map((post) => <PostList key={post.id} post={post} />)}
            </div>
            <div className='flex justify-center py-10 text-gray-300'>
                {new Date().getFullYear()}
            </div>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const getPublishedposts: Posts[] = await getPosts();
    const posts = getPublishedposts.filter((p) => p.published);

    return {
        props: {
            posts,
        },
        revalidate: 1
    };
};
