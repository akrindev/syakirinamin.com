import Layout from "@/components/Layout";
import Intro from "@/components/Intro";
import Head from "next/head";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Syakirin Amin</title>
      </Head>
      <Intro />
    </Layout>
  );
}
