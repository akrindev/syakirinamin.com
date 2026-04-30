import { gsap, useGSAP } from "@/lib/gsap";
import Image from "next/image";
import { useRef } from "react";
import SocialSection from "./SocialSection";

export default function Intro() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".intro-image", {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      ease: "power3.out",
    })
    .from(".intro-title", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.5")
    .from(".intro-desc", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.6")
    .from(".intro-social", {
      opacity: 0,
      y: 10,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.6")
    .to(".highlight-underline", {
      "--underline-width": "100%",
      duration: 1,
      stagger: 0.3,
      ease: "power3.out",
    }, "-=0.4");
  }, { scope: container });

  return (
    <div ref={container} className='px-5 py-20 flex flex-col items-start text-left max-w-2xl mx-auto'>
      <div className='intro-image mb-8 relative'>
        <div className="absolute -inset-1 bg-primary/20 rounded-full blur-xl"></div>
        <Image
          src='/avatar.svg'
          alt='avatar'
          width={120}
          height={120}
          priority
          className='relative rounded-full border-2 border-primary/10 shadow-sm'
        />
      </div>

      <div className='intro-title text-2xl md:text-4xl font-bold tracking-tight mb-8'>
        Hi, I'm <span className="text-primary font-handwritten highlight-underline">Syakirin Amin</span>
      </div>

      <div className='intro-desc text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed mb-12'>
        <p>
          I'm a <span className="text-zinc-900 dark:text-zinc-100 font-bold highlight-underline">Full-Stack Engineer</span> with a knack for turning ideas into reality through code. 
          Specializing in crafting intuitive platforms and robust management systems with <span className="text-primary font-handwritten">Laravel</span> and <span className="text-primary font-handwritten">React</span>. 
          Constantly pushing the boundaries of <span className="text-zinc-900 dark:text-zinc-100 font-bold highlight-underline">AI and UI/UX design</span>.
        </p>
      </div>
      
      <div className='intro-social'>
        <SocialSection />
      </div>
    </div>
  );
}
