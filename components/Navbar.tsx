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
        <div className='p-3 bg-gradient-to-r from-rose-600 to-pink-400 text-transparent bg-clip-text text-xl'>
          <Link href='/'>
            <a className='hover:text-rose-800'>Syakirin Amin</a>
          </Link>
        </div>
        <div className='p-2 space-x-1'>
          {listMenu.map((list) => {
            return (
              <Link href={list.link} key={list.name}>
                <a
                  className={
                    router.pathname == list.link
                      ? `py-1 px-4 border-b-2 border-rose-500 text-rose-500 font-normal text-md`
                      : `py-1 px-4 text-gray-400 font-light text-sm border-b-2 border-white hover:text-rose-400`
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
