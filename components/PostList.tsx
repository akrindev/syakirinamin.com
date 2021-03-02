import Link from "next/link";

const badges = {
  laravel: "bg-rose-200 text-rose-500",
  "react.js": "bg-blue-100 text-blue-500",
  "next.js": "bg-gray-100 text-gray-700",
  "vue.js": "bg-green-200 text-green-500",
  javascript: "bg-amber-200 text-amber-800",
};

const Description = (description) => (
  <p className='text-gray-600 text-sm font-inter'>{description}</p>
);

export default function PostList({ post }) {
  return (
    <div>
      <div
        className='flex flex-col p-4 hover:bg-gray-200 cursor-pointer'
        key={post.id}>
        <div className='flex space-x-2'>
          {post.tags &&
            post.tags.map((tag: string) => (
              <span
                key={tag}
                className={`px-4 py-0.5 rounded-3xl text-sm font-bold ${
                  badges[tag.toLocaleLowerCase()]
                }`}>
                {tag.toLocaleLowerCase()}
              </span>
            ))}
        </div>
        <Link href={`/blog/${post.slug}`}>
          <h1>
            <a className='font-bold text-2xl'>{post.title}</a>
          </h1>
        </Link>

        {post.description && <Description />}

        <div className='text-gray-400 italic font-light text-sm'>
          {post.date}
        </div>
      </div>
    </div>
  );
}
