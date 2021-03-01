import { GetStaticProps } from "next";
import Link from "next/link";
import Layout from "@/components/Layout";
import Intro from "@/components/Intro";
import Head from "next/head";

export default function Home({ data }) {
  return (
    <Layout>
      <Head>
        <title>Syakirin Amin</title>
      </Head>
      <Intro />
    </Layout>
  );
}
