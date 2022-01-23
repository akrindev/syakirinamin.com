import Image from "next/image";

type FeaturedPosts = {
  id: number;
  title: string;
  thumbnails: string;
  published_at: string;
  tags: string[];
};

export default function FeaturedPosts() {
  const featuredPosts: Array<FeaturedPosts> = [
    {
      id: 2988,
      title: "Starting from zero to super hero",
      thumbnails: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVF6o5UFDffWtu1XufPaUhvsKubtMf14PVyA&usqp=CAU`,
      published_at: "2022-02-02 22:22",
      tags: ["thought", "laravel"],
    },
    {
      id: 872187,
      title: "My journey to the moon",
      thumbnails: `https://images7.alphacoders.com/114/thumb-1920-1143784.png`,
      published_at: "2022-02-02 22:22",
      tags: ["love", "film"],
    },
  ];

  return (
    <div className='my-10'>
      <div className='mx-5'>
        <h1 className='text-2xl font-semibold'>Featured Posts</h1>
        <p className='text-sm text-gray-500'>
          Thoughts about Web technology development
        </p>
      </div>

      {/* posts */}
      <div className='grid grid-cols-12 gap-3 mt-5'>
        {featuredPosts.map((post) => (
          <div
            className='p-5 col-span-12 md:col-span-6 hover:cursor-pointer hover:scale-95 transition duration-200 hover:bg-rose-200/70'
            key={post.id}>
            <div className='relative flex flex-col'>
              <Image
                src={post.thumbnails}
                alt='avatar'
                objectFit={`cover`}
                width={`100%`}
                height={220}
                className='rounded-md'
              />
              <div className='absolute top-1 right-1 flex space-x-1 items-center'>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className='bg-rose-200/95 px-2 py-0.5 text-xs rounded-md border border-black shadow'>
                    {tag}
                  </span>
                ))}
              </div>
              <div className='text-lg font-semibold'>{post.title}</div>
              <div className='text-xs'>{post.published_at}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
