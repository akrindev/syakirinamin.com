import { getPosts, Posts } from "@/lib/notion";
import { GetStaticPaths, GetStaticProps } from "next";
import { NotionAPI } from "notion-client";
import Layout from "@/components/Layout";
import ArrowLeft from "@/components/ArrowLeft";
import NotionPage from "@/components/NotionPage";
import Head from "next/head";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { format } from "date-fns";
import id from "date-fns/locale/id";

export default function BlogPost({
  post,
  property,
}: {
  property: Posts;
  post;
}) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading . . .</div>;
  }

  // format property.date to readable date
  // with name of day
  // example : Rabu, 12 January 2021
  const date = format(new Date(property.date), "EEEE, dd MMMM yyyy", {
    locale: id,
  });

  return (
    <Layout>
      <Head>
        <title>{property.title}</title>
      </Head>

      <ArrowLeft />
      <div
        className='mt-5 px-5 md:px-0 flex flex-col justify-center border-b-2 border-dashed
       border-purple-200/70'>
        <h1 className='mb-3 font-bold text-2xl'>{property.title}</h1>
        <div className='flex flex-col items-start space-x-2'>
          {property.tags &&
            property.tags.map((tag: string) => (
              <span
                key={tag}
                className={`px-3 py-0.5 rounded-md text-sm font-light bg-amber-200 text-amber-800`}>
                {tag.toLocaleLowerCase()}
              </span>
            ))}
          <div className='font-light text-sm italic flex justify-center py-2'>
            {date}
          </div>
        </div>
      </div>
      <div className='relative max-w-3xl px-2 xl:px-0 mb-20'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}>
          <NotionPage recordMap={post} />
        </motion.div>
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
