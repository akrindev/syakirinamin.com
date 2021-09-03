import { getPosts, Posts } from "@/lib/notion";
import { GetStaticPaths, GetStaticProps } from "next";
import { ExtendedRecordMap } from "notion-types";
import { NotionAPI } from "notion-client";
import Layout from "@/components/Layout";
import ArrowLeft from "@/components/ArrowLeft";
import NotionPage from "@/components/NotionPage";
import Head from "next/head";
import { useRouter } from "next/router";

const badges = {
  laravel: "bg-rose-200 text-rose-500",
  "react.js": "bg-blue-100 text-blue-500",
  "next.js": "bg-gray-100 text-gray-700",
  "vue.js": "bg-green-200 text-green-500",
  javascript: "bg-amber-200 text-amber-800",
  typescript: "bg-blue-400 text-gray-200",
};

const getBadge = (badge: string) => {
  return badges[badge] ?? "bg-amber-200 text-amber-800";
};

export default function BlogPost({
  post,
  property,
}: {
  property: Posts;
  post: ExtendedRecordMap;
}) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading . . .</div>;
  }

  return (
    <Layout>
      <Head>
        <title>{property.title}</title>
      </Head>

      <ArrowLeft />
      <div className='flex flex-col justify-center pb-5'>
        <h1 className='mb-3 font-bold text-2xl'>{property.title}</h1>
        <div className='flex items-center space-x-2'>
          {property.tags &&
            property.tags.map((tag: string) => (
              <span
                key={tag}
                className={`px-4 py-0.5 rounded-3xl text-sm font-light ${getBadge(
                  tag.toLocaleLowerCase()
                )}`}>
                {tag.toLocaleLowerCase()}
              </span>
            ))}
          <div className='font-light text-sm italic flex justify-center py-2'>
            {property.date}
          </div>
        </div>
      </div>
      <div className='relative w-full px-2 mb-20'>
        <NotionPage recordMap={post} />
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts<Posts[]>();
  const paths = posts.filter((p) => p.published).map((p) => `/blog/${p.slug}`);

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = await getPosts<Posts[]>();

  const slug = ctx.params.slug as string;
  const notion = new NotionAPI();
  const postPublished: Posts = posts
    .filter((p) => p.published)
    .find((p) => p.slug === slug);
  const post = await notion.getPage(postPublished.id);

  // const keys = Object.keys(post?.block || {});
  // const block = post?.block?.[keys[0]]?.value;

  return {
    props: {
      post,
      property: postPublished,
    },
    revalidate: 3,
  };
};
