import FeaturedPosts from "@/components/FeaturedPosts";
import { useI18n } from "@/components/I18nProvider";
import Layout from "@/components/Layout";
import { GetStaticProps } from "next";
import Head from "next/head";
import { getPosts, Posts } from "../../lib/notion";

export default function index({ featuredPosts: posts }: { featuredPosts: Posts[] }) {
  const { messages } = useI18n();

  return (
    <Layout>
      <Head>
        <title>{messages.meta.blogTitle}</title>
      </Head>
      <div className="mb-20 divide-y-2 divide-gray-100">
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
