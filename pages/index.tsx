import Head from "next/head";
import Layout from "@/components/Layout";
import Intro from "@/components/Intro";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Syakirin Amin | Software Engineer</title>
      </Head>
      <Intro />
    </Layout>
  );
}
