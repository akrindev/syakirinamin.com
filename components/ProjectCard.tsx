import Image from "next/image";
import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

export default function ProjectCard({ name, description, link, image }) {
  const cardRef = useRef(null);
  console.log(`Rendering ProjectCard: ${name}, link: ${link}`);

  useGSAP(() => {
    gsap.from(cardRef.current, {
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top bottom-=100px",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });
  }, { scope: cardRef });

  return (
    <div 
      ref={cardRef}
      className='group relative flex flex-col md:flex-row gap-8 p-6 my-4 bg-transparent transition-all duration-500 rounded-3xl hover:bg-zinc-50 dark:hover:bg-zinc-900/40'
    >
      {/* image container */}
      <div className='w-full md:w-64 h-40 flex-shrink-0 relative overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/20 group-hover:-translate-y-2'>
        {image && image[0] ? (
          <Image
            src={image[0].url}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, 256px"
            unoptimized={image[0].url.includes("amazonaws.com")}
            className='object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1'
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-zinc-400">
            No Image
          </div>
        )}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500"></div>
      </div>

      {/* content */}
      <div className='flex flex-col justify-center flex-grow py-2'>
        <div className='mb-1'>
          <h3 className='text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-primary transition-colors duration-300'>
            {name}
          </h3>
        </div>

        <div className="mb-4 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
          </svg>
          {link ? (
            <a
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              className='text-sm font-semibold text-zinc-500 hover:text-primary transition-colors duration-300 break-all underline decoration-zinc-200 dark:decoration-zinc-800 hover:decoration-primary/50'
            >
              {link.replace(/^https?:\/\//, '')}
            </a>
          ) : (
            <span className="text-sm text-zinc-400 italic">No link provided</span>
          )}
        </div>

        <p className='text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 font-medium'>
          {description}
        </p>
        
        <div className="mt-auto">
          <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className='group/btn inline-flex items-center text-xs font-black tracking-[0.2em] uppercase text-primary transition-all duration-300 hover:tracking-[0.3em]'
          >
            Explore Project
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-2">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
