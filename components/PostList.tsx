import Link from "next/link";

const badges = {
  laravel: "bg-rose-200 text-rose-500",
  "react.js": "bg-blue-100 text-blue-500",
  "next.js": "bg-gray-100 text-gray-700",
  "vue.js": "bg-green-200 text-green-500",
  javascript: "bg-amber-200 text-amber-800",
};

const getBadge = (badge) => {
  return badges[badge] ?? "bg-amber-200 text-amber-800";
};

const Description = (description) => (
  <p className='text-gray-600 text-sm font-inter'>{description}</p>
);

export default function PostList({ post }) {
  return (
    <>
      <Link href={`/blog/${post.slug}`}>
        <a className='block font-bold font-nunito text-xl text-coolGray-900 hover:bg-gray-100 hover:text-warmGay-900 focus:text-rose-400'>
          <div className='flex flex-col p-4' key={post.id}>
            <div className='flex space-x-2'>
              {post.tags &&
                post.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className={`px-3 py-1 rounded-3xl text-xs font-base ${getBadge(
                      tag.toLocaleLowerCase()
                    )}`}>
                    {tag.toLocaleLowerCase()}
                  </span>
                ))}
            </div>

            {post.title}
            <div className='text-gray-400 italic font-mono font-light text-sm'>
              {post.date}
            </div>

            {post.description && <Description />}
          </div>
        </a>
      </Link>
    </>
  );
}
