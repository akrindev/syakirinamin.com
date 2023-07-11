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
              I work as a Full-stack Engineer on a daily basis, using Laravel as
              the backend and either Next.js or Vue.js for the frontend. I have
              been involved with web technology since my vocational high school
              days, and I feel comfortable and passionate about diving deeper
              into the world of web development.
            </p>
            <p>
              Currently, I am working on an education-related project as an
              engineer. Additionally, I have a strong interest in Product
              Management and UI/UX design, and I am actively exploring those
              fields.
            </p>
            <p>
              As of 2023, I am an undergraduate student pursuing a degree in
              Information Technology. In addition to my professional work, I
              also dedicate time to my personal projects, <b> Smeducative</b>{" "}
              and{" "}
              <a href='//creasi.co' className='italic underline'>
                Creasico
              </a>
              .
            </p>
          </div>
          <div>
            <SocialSection />
          </div>
        </motion.div>
      </div>
      <TechStack />
    </div>
  );
}
