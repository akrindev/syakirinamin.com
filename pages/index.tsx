import Head from "next/head";
import Layout from "@/components/Layout";
import Intro from "@/components/Intro";
import FeaturedPosts from "@/components/FeaturedPosts";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Syakirin Amin</title>
      </Head>
      <Intro />
      <FeaturedPosts />
    </Layout>
  );
}
