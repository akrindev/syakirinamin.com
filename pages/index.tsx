import { GetStaticProps } from "next/types";
import { getPosts, Posts } from "@/lib/notion";
import Head from "next/head";
import Layout from "@/components/Layout";
import Intro from "@/components/Intro";
import FeaturedPosts from "@/components/FeaturedPosts";
import Footer from "@/components/Footer";
import TechStack from "@/components/TechStack";

export default function Home({ featuredPosts }: { featuredPosts: Posts[] }) {
  return (
    <Layout>
      <Head>
        <title>Syakirin Amin | Software Engineer</title>
      </Head>
      <Intro />
    </Layout>
  );
}
