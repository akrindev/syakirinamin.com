import Head from "next/head";
import Layout from "@/components/Layout";
import Intro from "@/components/Intro";
import { useI18n } from "@/components/I18nProvider";

export default function Home() {
  const { messages } = useI18n();

  return (
    <Layout>
      <Head>
        <title>{messages.meta.homeTitle}</title>
      </Head>
      <Intro />
    </Layout>
  );
}
