import Image from "next/legacy/image";
import TechStack from "./TechStack";
import { motion } from "framer-motion";
import SocialSection from "./SocialSection";

export default function Intro() {
  return (
    <div className='p-5 my-12 min-h-full flex flex-col items-center justify-center'>
      <div className='mb-12 flex flex-col xl:flex-row-reverse items-center justify-center'>
        <div className='w-full flex items-center justify-center'>
          <Image
            src='/avatar.svg'
            alt='avatar'
            width={150}
            height={150}
            className='shadow rounded-full'
          />
        </div>
        <motion.div
          className='py-5 gap-3'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}>
          <div className='text-2xl font-bold block leading-normal'>
            Hi, I'm Syakirin Amin
          </div>
          <div className='text-md font-inter font-normal flex flex-col space-y-3'>
            <p>
              I'm a Full-Stack Engineer with a knack for turning ideas into reality through code. 
              My journey spans from crafting intuitive educational platforms to building robust management systems, always with an eye for user experience. 
              When I'm not deep in Laravel or React, you'll find me exploring the frontiers of AI and UI/UX design, constantly pushing the boundaries of what's possible in tech. 
              Got an exciting project in mind? Let's collaborate and bring some innovative ideas to life!
            </p>
          </div>
          <div>
            <SocialSection />
          </div>
        </motion.div>
      </div>
      {/* <TechStack /> */}
    </div>
  );
}
