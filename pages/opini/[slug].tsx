import Layout from "@/components/Layout";
import { GetStaticPaths, GetStaticProps } from "next";

export default function Opini({ post }) {
  const { userId, id, title, body } = post;
  return (
    <Layout>
      {title} <br />
      {body}
    </Layout>
  );
}

interface Posts {
  userId: number;
  id: number | string;
  title: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const getPosts: Posts[] = await fetch(
    `https://jsonplaceholder.typicode.com/posts`
  ).then((res) => res.json());

  const paths = getPosts.map((r) => `/opini/${r.id}`);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const getPosts: Posts[] = await fetch(
    `https://jsonplaceholder.typicode.com/posts`
  ).then((res) => res.json());

  const post = getPosts.find((p) => p.id == params.slug);
  return {
    props: { post },
  };
};
