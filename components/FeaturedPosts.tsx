import { Posts } from "@/lib/notion";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function FeaturedPosts({ posts }: { posts: Posts[] }) {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from(".post-card", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom-=100px",
        },
      });
    },
    { scope: container },
  );

  return (
    <div ref={container} className="py-12 px-4">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">Latest Posts</h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          Thoughts on software engineering, web technology, and design.
        </p>
        <div className="mt-4 w-12 h-1 bg-primary"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.id} className="post-card group block">
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900 mb-4">
              <Image
                src={
                  !post.thumbnail || post.thumbnail.length === 0
                    ? "/no_image.jpg"
                    : post.thumbnail[0]?.url
                }
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={posts.indexOf(post) === 0}
                unoptimized={post.thumbnail?.[0]?.url?.includes("amazonaws.com")}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm text-zinc-900 dark:text-zinc-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg shadow-sm border border-zinc-200/50 dark:border-zinc-800/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-bold text-primary uppercase tracking-widest">
                {post.date ? format(new Date(post.date), "MMMM dd, yyyy") : "No Date"}
              </div>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-primary transition-colors leading-tight">
                {post.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
