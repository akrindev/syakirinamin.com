import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import { Project, getProjects } from "@/lib/notion";
import Head from "next/head";
import { GetStaticProps } from "next/types";

interface ProjectProps {
  projects: Project[];
}

export default function Index({ projects }: ProjectProps) {
  return (
    <Layout>
      <Head>
        <title>Projects | Syakirin Amin</title>
      </Head>
      <section className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <div className="mb-10 max-w-2xl space-y-4">
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            Selected work
          </span>
          <div className="space-y-3">
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-4xl">
              Projects timeline
            </h1>
            <p className="max-w-xl text-sm leading-6 text-zinc-500 dark:text-zinc-400 md:text-base">
              A compact timeline of products, experiments, and client work with the details kept
              intentionally tight and scannable.
            </p>
          </div>
        </div>

        <div className="space-y-0">
          {projects?.map((project) => (
            <ProjectCard
              key={project.id}
              description={project.description}
              image={project.image}
              link={project.link}
              name={project.Name}
            />
          ))}
        </div>
      </section>
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
