import Layout from "@/components/Layout";
import { getPosts, Posts } from "@/lib/notion";
import { GetStaticPaths, GetStaticProps } from "next";
import { NotionAPI } from "notion-client";
import { getPageProperty } from "notion-utils";
import NotionPage from "@/components/NotionPage";
import Head from "next/head";

const badges = {
    laravel: "bg-rose-200 text-rose-500",
    "react.js": "bg-blue-100 text-blue-500",
    "next.js": "bg-gray-100 text-gray-700",
    "vue.js": "bg-green-200 text-green-500",
    javascript: "bg-amber-200 text-amber-800",
    typescript: "bg-blue-400 text-gray-200",
};

export default function BlogPost({ post, tags, title, date }) {
    return (
        <Layout>
            <Head>
                <title>{title}</title>
            </Head>
            <div className='flex flex-col justify-center text-center py-5'>
                <h1 className='mb-3 font-bold text-2xl'>{title}</h1>
                <div className='flex items-center justify-center space-x-2'>
                    {tags &&
                        tags.split(",").map((tag: string) => (
                            <span
                                key={tag}
                                className={`px-4 py-0.5 rounded-3xl text-sm font-light ${
                  badges[tag.toLocaleLowerCase()]
                }`}>
                                {tag.toLocaleLowerCase()}
                            </span>
                        ))}
                </div>
                <div className='font-light text-sm italic flex justify-center py-2'>
                    {date}
                </div>
            </div>
            <div className='overflow-hidden px-2'>
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
    const postPublished = posts
        .filter((p) => p.published)
        .find((p) => p.slug == slug);
    const post = await notion.getPage(postPublished.id);

    const keys = Object.keys(post?.block || {});
    const block = post?.block?.[keys[0]].value;

    const tags = getPageProperty("tags", block, post);
    const title = getPageProperty("title", block, post);
    const date = getPageProperty("date", block, post);

    return {
        props: {
            post,
            tags,
            title,
            date,
        },
        revalidate: 30,
    };
};
