import Layout from "@/components/Layout";
import { getPosts, Posts } from "@/lib/notion";
import { mapImageUrl } from "@/lib/notion-image";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { NotionAPI } from "notion-client";
import { getPageProperty } from "notion-utils";
import {
  Code,
  Collection,
  CollectionRow,
  NotionRenderer,
} from "react-notion-x";

const badges = {
  laravel: "bg-rose-200 text-rose-500",
  "react.js": "bg-blue-100 text-blue-500",
  "next.js": "bg-gray-100 text-gray-700",
  "vue.js": "bg-green-200 text-green-500",
  javascript: "bg-amber-200 text-amber-800",
};

export default function BlogPost({ post, tags, title }) {
  return (
    <Layout>
      <div className='flex flex-col text-center py-5'>
        <h1 className='font-bold text-2xl'>{title}</h1>
        <div className='flex space-x-2'>
          {tags &&
            tags.split(",").map((tag: string) => (
              <span
                key={tag}
                className={`px-4 py-0.5 rounded-3xl text-sm font-bold ${
                  badges[tag.toLocaleLowerCase()]
                }`}>
                {tag.toLocaleLowerCase()}
              </span>
            ))}
        </div>
      </div>
      <NotionRenderer
        components={{
          pageLink: ({
            href,
            as,
            passHref,
            prefetch,
            replace,
            scroll,
            shallow,
            locale,
            ...props
          }) => (
            <Link
              href={href}
              as={as}
              passHref={passHref}
              prefetch={prefetch}
              replace={replace}
              scroll={scroll}
              shallow={shallow}
              locale={locale}>
              <a {...props} />
            </Link>
          ),
          code: Code,
          collection: Collection,
          collectionRow: CollectionRow,
        }}
        fullPage={false}
        recordMap={post}
        mapImageUrl={mapImageUrl}
      />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts<Posts[]>();
  const paths = posts.map((p) => `/blog/${p.slug}`);
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = await getPosts<Posts[]>();

  const slug = ctx.params.slug as string;
  const notion = new NotionAPI();
  const postPublished = posts
    .filter((p) => p.published)
    .find((p) => p.slug == slug);
  const post = await notion.getPage(postPublished.id);

  const keys = Object.keys(post?.block || {});
  const block = post?.block?.[keys[0]].value;

  const tags = getPageProperty("tags", block, post);
  const title = getPageProperty("title", block, post);
  // console.log(tags);
  return {
    props: {
      post,
      tags,
      title,
    },
  };
};
