import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import { Project, getProjects } from "@/lib/notion";
import Head from "next/head";
import { GetStaticProps } from "next/types";
// import { NotionAPI } from "notion-client";

interface ProjectProps {
  projects: Project[];
}

export default function index({ projects }: ProjectProps) {
  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>
      <div className='mb-20'>
        <div className='mx-5 font-nunito'>
          <h1 className='text-2xl font-semibold'>Projects</h1>
          <p className='text-sm text-gray-500'>
            Curated list of projects I've worked on. ordered by the latest to
            oldest.
          </p>
        </div>

        {/*  */}
        {projects &&
          projects.map((post) => {
            return (
              <ProjectCard
                key={post.id}
                description={post.description}
                image={post.image}
                link={post.link}
                name={post.Name}
              />
            );
          })}
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getProjects();

  // const keys = Object.keys(post?.block || {});
  // const block = post?.block?.[keys[0]]?.value;

  return {
    props: {
      projects,
    },
    revalidate: 3,
  };
};
