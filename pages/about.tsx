import Layout from "@/components/Layout";
import { gsap, useGSAP } from "@/lib/gsap";
import Head from "next/head";
import Image from "next/image";
import { useRef } from "react";

const experiences = [
  {
    company: "SMK Diponegoro Karanganyar",
    role: "IT Developer",
    period: "July 2021 – Present",
    points: [
      "Built PPDB (Student Admission) app, school management system (Smeduverse), attendance apps for employees, student attendance app (Smeduverse Orbit), and CBT app for online exams (Smeduverse CBT).",
      "Successfully integrated multiple applications with the Smeduverse platform, ensuring seamless functionality and data synchronization.",
      "Collaborated closely with teachers and administrators to gather requirements and deliver user-centric solutions.",
    ],
  },
  {
    company: "CV Interloka Custom Made",
    role: "Software Developer",
    period: "August 2024 – June 2025",
    points: [
      "Developing a crowdfunding app and Design Marketplace app.",
      "Implemented funding management and deposito management.",
      "Built interactive dashboards for users to monitor funding progress and account balances.",
      "Optimized app performance and ensured secure handling of financial data.",
    ],
  },
  {
    company: "PT Creasi Tekno Solusi",
    role: "Software Engineer",
    period: "May 2022 – May 2024",
    points: [
      "Collaborated as a Full-Stack Developer using Laravel to build an Asset Management System (AMS) and Vendor Management System (VMS).",
      "Actively participated in Agile methodologies, including sprint planning and code reviews.",
      "Contributed to the development of front-end components, and database design.",
    ],
  },
  {
    company: "CV Cipta Inovasi Digital",
    role: "Back End Developer",
    period: "Oct 2023 – Dec 2023",
    points: [
      "Collaborated with a team to develop a Distributor Management System (DMS).",
      "Implemented complex back-end logic, designed and developed RESTful API endpoints.",
      "Participated in code reviews and maintained adherence to best coding practices.",
      "Optimized database performance and implemented caching mechanisms for improved application responsiveness.",
    ],
  },
];

const techSkills = [
  "Laravel",
  "React",
  "Next.js",
  "Tailwindcss",
  "Firebase",
  "Node.js",
  "Bun",
  "PostgreSQL",
  "MySQL",
  "MariaDB",
  "SQLite",
];

const tools = [
  "Git",
  "AWS",
  "idcloudhost",
  "Google Cloud",
  "Figma",
  "Firebase",
  "Supabase",
];

export default function About() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from(".about-header", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
      });
      gsap.from(".about-section", {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.3,
      });
    },
    { scope: container }
  );

  return (
    <Layout>
      <Head>
        <title>About | Syakirin Amin</title>
        <meta
          name="description"
          content="Learn more about Syakirin Amin — Full-Stack Engineer passionate about building robust web applications."
        />
      </Head>

      <div ref={container} className="py-12 px-4 max-w-3xl mx-auto">
        {/* Header */}
        <div className="about-header flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12">
          <div className="relative flex-shrink-0">
            <div className="absolute -inset-1 bg-primary/20 rounded-full blur-xl" />
            <Image
              src="/avatar.svg"
              alt="Syakirin Amin"
              width={100}
              height={100}
              priority
              className="relative rounded-full border-2 border-primary/10 shadow-sm"
            />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-1">
              M Syafinda{" "}
              <span className="text-primary font-handwritten">
                Syakirin Amin
              </span>
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 font-medium mb-3">
              Full-Stack Engineer
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <a
                href="mailto:akrinmin@gmail.com"
                className="flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400 hover:text-primary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                akrinmin@gmail.com
              </a>
              <a
                href="https://github.com/akrindev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400 hover:text-primary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                akrindev
              </a>
              <a
                href="https://linkedin.com/in/syakirin-amin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400 hover:text-primary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                syakirin-amin
              </a>
            </div>
          </div>
        </div>

        {/* Summary */}
        <section className="about-section mb-10">
          <SectionHeading>Summary</SectionHeading>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Highly motivated Full-Stack Engineer with a proven track record of
            building robust and scalable web applications using{" "}
            <span className="text-primary font-handwritten">Laravel</span> and{" "}
            <span className="text-primary font-handwritten">React.js</span>.
            Passionate about solving complex challenges and delivering
            user-centric solutions. Eager to expand expertise in project
            management, AI, and UI/UX design, with a strong commitment to
            collaborative teamwork and ethical practices.
          </p>
        </section>

        {/* Experience */}
        <section className="about-section mb-10">
          <SectionHeading>Experience</SectionHeading>
          <div className="relative">
            <div className="absolute left-0 top-2 bottom-2 w-px bg-zinc-200 dark:bg-zinc-800" />
            <div className="flex flex-col gap-8">
              {experiences.map((exp) => (
                <div key={exp.company} className="pl-6 relative">
                  <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-primary" />
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <div>
                      <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                        {exp.company}
                      </h3>
                      <span className="text-sm text-primary font-medium">
                        {exp.role}
                      </span>
                    </div>
                    <span className="text-xs text-zinc-400 dark:text-zinc-500 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-1">
                    {exp.points.map((point, i) => (
                      <li
                        key={i}
                        className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="about-section mb-10">
          <SectionHeading>Education</SectionHeading>
          <div className="relative pl-6">
            <div className="absolute left-0 top-2 bottom-2 w-px bg-zinc-200 dark:bg-zinc-800" />
            <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-primary" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                  Institute of Technology and Science Nahdlatul Ulama Pekalongan
                </h3>
                <span className="text-sm text-primary font-medium">
                  Bachelor of Computer Science
                </span>
              </div>
              <span className="text-xs text-zinc-400 dark:text-zinc-500 whitespace-nowrap">
                2022 – Expected 2026
              </span>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="about-section mb-10">
          <SectionHeading>Technical Skills</SectionHeading>
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2 font-medium">
                Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {techSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2 font-medium">
                Tools & Platforms
              </p>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 text-sm rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Languages */}
        <section className="about-section mb-10">
          <SectionHeading>Languages</SectionHeading>
          <div className="flex flex-wrap gap-4">
            {[
              { lang: "Bahasa Indonesia", level: "Fluent" },
              { lang: "English", level: "Conversational" },
            ].map(({ lang, level }) => (
              <div
                key={lang}
                className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400"
              >
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="font-medium text-zinc-900 dark:text-zinc-100">
                  {lang}
                </span>
                <span className="text-sm text-zinc-400">— {level}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CV Download */}
        <section className="about-section">
          <a
            href="https://drive.google.com/file/d/1sOcidABtUHTZacv8aGSxb2zmCd9B0Snr/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-all hover:scale-105 active:scale-95 shadow-sm"
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
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download CV
          </a>
        </section>
      </div>
    </Layout>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
        {children}
      </h2>
      <div className="mt-1.5 w-12 h-0.5 bg-primary" />
    </div>
  );
}
