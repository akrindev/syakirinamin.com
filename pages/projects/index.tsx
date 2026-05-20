import { useI18n } from "@/components/I18nProvider";
import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import { Project, getProjects } from "@/lib/notion";
import Head from "next/head";
import { GetStaticProps } from "next/types";

interface ProjectProps {
  projects: Project[];
}

export default function Index({ projects }: ProjectProps) {
  const { messages } = useI18n();

  return (
    <Layout>
      <Head>
        <title>{messages.meta.projectsTitle}</title>
      </Head>
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            {messages.projects.heading}
          </h1>
          <p className="text-lg text-zinc-500 dark:text-zinc-400">
            {messages.projects.description}
          </p>
          <div className="mt-4 h-1 w-20 bg-primary"></div>
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
