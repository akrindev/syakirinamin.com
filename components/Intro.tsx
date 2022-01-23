import Image from "next/image";

export default function Intro() {
  return (
    <div className='flex flex-col xl:flex-row-reverse items-center justify-center mx-5 mt-16'>
      <div className='w-full flex items-center justify-center'>
        <Image
          src='/avatar.svg'
          alt='avatar'
          width={150}
          height={150}
          className='shadow rounded-full'
        />
      </div>
      <div className='py-5'>
        <div className='text-2xl font-bold block leading-normal'>
          Hi, I'm Syakirin Amin
        </div>
        <div className='text-lg font-inter font-medium'>
          A Student and a Software Engineer focused on web technology. I've been
          in laravel for 4 years and Love their Ecosystem. I'm currently working
          on a project called <strong>Smeducative</strong>.
        </div>
      </div>
    </div>
  );
}
