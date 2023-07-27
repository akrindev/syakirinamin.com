import Layout from "@/components/Layout";
import Footer from "@/components/Footer";
import { GetStaticProps } from "next";
import Head from "next/head";
import { getPosts, Posts } from "../../lib/notion";
import FeaturedPosts from "@/components/FeaturedPosts";

export default function index({
  featuredPosts: posts,
}: {
  featuredPosts: Posts[];
}) {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>
      <div className='mb-20 divide-y-2 divide-gray-100'>
        {posts && <FeaturedPosts posts={posts} />}
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const getPublishedPosts: Posts[] = await getPosts();
  const featuredPosts = getPublishedPosts.filter((p) => p.published);

  return {
    props: {
      featuredPosts,
    },
    revalidate: 3,
  };
};
