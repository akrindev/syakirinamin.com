import Layout from "@/components/Layout";
import { GetStaticProps } from "next";
import Link from "next/link";

interface Posts {
  userId: number;
  id: number | string;
  title: string;
}

export default function index({ posts }) {
  return (
    <Layout>
      {posts.map((post) => {
        return (
          <Link key={post.id} href={`/opini/${post.id}`}>
            <a className='block p-2'>{post.title}</a>
          </Link>
        );
      })}
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = await fetch(
    `https://jsonplaceholder.typicode.com/posts`
  ).then((res) => res.json());

  // const post = getPosts.find((p) => p.id === params.slug);
  return {
    props: { posts },
  };
};
