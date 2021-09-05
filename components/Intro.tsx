import Image from "next/image";

export default function Intro() {
  return (
    <>
      <div className="p-3 flex flex-col md:flex-row-reverse items-center justify-center mt-5">
        <div className="w-full flex items-center justify-center">
          <Image
            src="/avatar.svg"
            alt="avatar"
            width={150}
            height={150}
            className="shadow rounded-full"
          />
        </div>
        <div className="py-5">
          <div className="text-2xl font-bold block leading-normal">
            Hi, I'm Syakirin Amin
          </div>
          <div className="font-inter">
            A student and a software engineer focused on web technology. I
            mostly use
            <code className="font-mono text-red-500 rounded p-0.5">
              `laravel`
            </code>
            ,
            <code className="font-mono text-sky-500 rounded p-0.5">
              `reactjs`
            </code>
            , and still exploring good stuff web technology. currently admiring
            <code className="font-mono text-green-500 rounded p-0.5">
              `vuejs`
            </code>
            and its community.
          </div>
        </div>
      </div>
    </>
  );
}
