import { GetStaticProps } from "next/types";
import { getPosts, Posts } from "@/lib/notion";
import Head from "next/head";
import Layout from "@/components/Layout";
import Intro from "@/components/Intro";
import FeaturedPosts from "@/components/FeaturedPosts";
import Footer from "@/components/Footer";

export default function Home({ featuredPosts }: { featuredPosts: Posts[] }) {
  return (
    <Layout>
      <Head>
        <title>Syakirin Amin</title>
      </Head>
      <Intro />
      <FeaturedPosts posts={featuredPosts} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const getPublishedPosts: Posts[] = await getPosts();
  const posts = getPublishedPosts.filter((p) => p.published);

  // get 6 latest posts
  const featuredPosts = posts.slice(0, 6);

  return {
    props: {
      featuredPosts,
    },
    revalidate: 10,
  };
};
