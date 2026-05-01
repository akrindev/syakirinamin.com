import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import { Project, getProjects } from "@/lib/notion";
import Head from "next/head";
import { GetStaticProps } from "next/types";

interface ProjectProps {
  projects: Project[];
}

export default function index({ projects }: ProjectProps) {
  return (
    <Layout>
      <Head>
        <title>Projects | Syakirin Amin</title>
      </Head>
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="mb-12 max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
            Projects
          </h1>
          <p className="text-lg text-zinc-500 dark:text-zinc-400">
            A collection of projects I've built, ranging from web applications to experiments in
            tech.
          </p>
          <div className="mt-6 w-20 h-1 bg-primary"></div>
        </div>

        <div className="flex max-w-4xl flex-col gap-2">
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
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getProjects();

  return {
    props: {
      projects,
    },
    revalidate: 60,
  };
};
