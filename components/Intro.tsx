import Image from "next/image";

export default function Intro() {
  return (
    <>
      <div className='h-full p-3 md:mt-5 md:px-0 md:flex md:items-center md:justify-center mx-auto'>
        <div className='w-full flex item-center justify-center'>
          <Image
            src='http://placekitten.com/300/300'
            alt='kitten'
            width={150}
            height={150}
            className='rounded-full'
          />
        </div>
        <div className='py-5'>
          <strong>Extroverted Introvert</strong>, So many things I would do
          every moments like learning, disscussion, coding, solving things with
          code, and more. Currently learning Laravel, Reactjs, React Native,
          Nextjs, Tailwindcss but not limited to.
        </div>
      </div>
    </>
  );
}
