import Image from "next/legacy/image";

export default function TechStack() {
  const techStack: Array<{
    name: string;
    logo: string;
  }> = [
    {
      name: "Vue",
      logo: "/assets/svg/vue-logo.svg",
    },
    {
      name: "React",
      logo: "/assets/svg/react-logo.svg",
    },
    {
      name: "Laravel",
      logo: "/assets/svg/laravel-logo.svg",
    },
  ];

  return (
    <div className='mx-5 w-full max-w-4xl'>
      <div className='flex flex-col space-y-4'>
        <div className='flex flex-col space-y-2'>
          <p className='text-gray-600 font-inter'>
            technologies I've worked with
          </p>
          <div className='flex items-center space-x-4'>
            {techStack.map((tech) => (
              <div key={tech.name}>
                <Image
                  src={tech.logo}
                  width={40}
                  height={40}
                  className='grayscale hover:grayscale-0 hover:scale-95 duration-300'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
