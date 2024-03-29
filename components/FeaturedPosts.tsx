import { Posts } from "@/lib/notion";
import Image from "next/legacy/image";
import Link from "next/link";
import { motion } from "framer-motion";
import format from "date-fns/format";
import id from "date-fns/locale/id";

export type Thumbnail = {
  name: string;
  url: string;
  rawUrl: string;
};

export default function FeaturedPosts({ posts }: { posts: Posts[] }) {
  // posts.map((post) => console.log(post));

  return (
    <div className='my-10'>
      <div className='mx-5 font-nunito'>
        {/* feaatured post or latest post */}
        <h1 className='text-2xl font-semibold'>Latest Posts</h1>
        <p className='text-sm text-gray-500'>
          Write about thoughts and Web technology development
        </p>
      </div>

      {/* posts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}>
        <div className='grid grid-cols-12 gap-3 mt-5'>
          {posts.map((post) => (
            <Link
              className='p-5 col-span-12 md:col-span-6 hover:cursor-pointer hover:scale-95 transition duration-200 hover:bg-purple-200/70 hover:text-gray-900'
              href={`/blog/${post.slug}`}
              key={post.id}>
              <div className='relative flex flex-col'>
                <Image
                  src={
                    typeof post.thumbnail === "undefined"
                      ? "/no_image.jpg"
                      : post.thumbnail[0]?.url
                  }
                  alt='avatar'
                  width={500}
                  height={220}
                  className='rounded-md'
                />
                <div className='absolute top-1 right-1 flex space-x-1 items-center'>
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className='text-gray-900 bg-purple-200/95 px-2 py-0.5 text-xs rounded-md border border-black shadow'>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className='text-lg font-semibold'>{post.title}</div>
                <div className='text-xs'>
                  {format(new Date(post.date), "EEEE, dd MMMM yyyy", {
                    locale: id,
                  })}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
