import { link, lstat } from "fs";
import Link from "next/link";
import { list } from "postcss";
import { useRouter } from "next/router";

const listMenu: Array<{ name: string; link: string }> = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Opini",
    link: "/opini",
  },
  {
    name: "Projects",
    link: "/projects",
  },
];

export default function Navbar() {
  const router = useRouter();

  return (
    <div className='bg-white'>
      <div className='w-full max-w-3xl mx-auto flex flex-col'>
        <div className='p-3 font-extrabold'>Syakirin Amin</div>
        <div className='p-2 space-x-1'>
          {listMenu.map((list) => {
            return (
              <Link href={list.link} key={list.name}>
                <a
                  className={
                    router.pathname == list.link
                      ? `py-1 px-4 bg-green-200 text-green-600 rounded-md font-normal text-sm`
                      : `py-1 px-4 text-gray-400 font-light text-sm`
                  }>
                  {list.name}
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
