import Layout from "@/components/Layout";
import NotionPage from "@/components/NotionPage";
import { gsap, useGSAP } from "@/lib/gsap";
import { getPosts, Posts } from "@/lib/notion";
import { format } from "date-fns";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { NotionAPI } from "notion-client";
import { useRef } from "react";

export default function BlogPost({ post, property }: { property: Posts; post }) {
  const router = useRouter();
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from(".blog-header", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".blog-content", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });
    },
    { scope: container },
  );

  if (router.isFallback) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const date = property.date ? format(new Date(property.date), "MMMM dd, yyyy") : "";

  return (
    <Layout>
      <Head>
        <title>{`${property.title} | Syakirin Amin`}</title>
      </Head>

      <div ref={container} className="py-12 px-4 max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center text-sm font-bold text-zinc-500 hover:text-primary transition-colors mb-12 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 transition-transform group-hover:-translate-x-1"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back to Blog
        </Link>

        <header className="blog-header mb-12">
          <div className="flex flex-wrap gap-2 mb-6">
            {property.tags &&
              property.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="bg-primary/10 text-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg"
                >
                  {tag}
                </span>
              ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-6">
            {property.title}
          </h1>
          <div className="text-zinc-500 dark:text-zinc-400 font-medium">{date}</div>
          <div className="mt-8 w-20 h-1 bg-primary"></div>
        </header>

        <div className="blog-content relative mb-20">
          <NotionPage recordMap={post} />
        </div>
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts();
  const paths = posts.filter((p) => p.published).map((p) => `/blog/${p.slug}`);

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = await getPosts();

  const slug = ctx.params.slug as string;
  const notion = new NotionAPI();
  const postPublished: Posts = posts.filter((p) => p.published).find((p) => p.slug === slug);

  if (!postPublished) {
    return {
      notFound: true,
    };
  }

  const post = await notion.getPage(postPublished.id);

  return {
    props: {
      post,
      property: postPublished,
    },
    revalidate: 60,
  };
};
