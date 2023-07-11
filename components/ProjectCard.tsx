import Image from "next/image";

export default function ProjectCard({ name, description, link, image }) {
  return (
    <div className='my-8 p-5 w-full grid grid-cols-7 gap-3 md:gap-6'>
      {/* left */}
      <div className='order-last md:order-first col-span-7 md:col-span-4'>
        <div className='flex flex-col justify-center gap-3'>
          <h1 className='text-2xl font-medium'>{name}</h1>
          <p className='text-sm text-gray-500'>{description}</p>
          <a href={link} className='text-sm text-purple-500 hover:underline'>
            {link}
          </a>
        </div>
      </div>
      {/* right */}
      <div className='px-6 pb-3 col-span-7 md:col-span-3 flex items-center'>
        <Image
          width={400}
          height={200}
          placeholder='blur'
          blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCA'
          src={image[0].url}
          alt={image[0].name}
          className='w-full h-full object-cover rounded-lg rotate-2'
        />
      </div>
    </div>
  );
}
