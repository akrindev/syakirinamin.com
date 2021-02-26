import { GetStaticProps } from "next";
import Link from "next/link";
import Layout from "@/components/Layout";
import Intro from "@/components/Intro";

export default function Home({ data }) {
  return (
    <Layout>
      <Intro />
    </Layout>
  );
}
