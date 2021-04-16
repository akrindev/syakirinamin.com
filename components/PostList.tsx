import Link from "next/link";

const badges = {
  laravel: "bg-rose-200 text-rose-500",
  "react.js": "bg-blue-100 text-blue-500",
  "next.js": "bg-gray-100 text-gray-700",
  "vue.js": "bg-green-200 text-green-500",
  javascript: "bg-amber-200 text-amber-800"
};

const Description = (description) => (
  <p className="text-gray-600 text-sm font-inter">{description}</p>
);

export default function PostList({ post }) {
  return (
    <div>
      <div className="flex flex-col p-4" key={post.id}>
        <div className="flex space-x-2">
          {post.tags &&
            post.tags.map((tag: string) => (
              <span
                key={tag}
                className={`px-4 py-0.5 rounded-3xl text-sm font-bold ${
                  badges[tag.toLocaleLowerCase()] ??
                  "bg-amber-200 text-amber-800"
                }`}
              >
                {tag.toLocaleLowerCase()}
              </span>
            ))}
        </div>

        <div className="text-gray-400 italic font-mono font-light text-sm">
          {post.date}
        </div>

        <Link href={`/blog/${post.slug}`}>
          <a className="font-bold font-nunito text-2xl flex-1 hover:border-b-2 hover:border-rose-500 focus:text-rose-400">
            {post.title}
          </a>
        </Link>

        {post.description && <Description />}
      </div>
    </div>
  );
}
