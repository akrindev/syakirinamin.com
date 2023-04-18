import Link from "next/link";
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
    name: "Projects",
    link: "/projects",
  },
];

export default function Navbar() {
  const router = useRouter();

  return (
    <header>
      <div className='w-full bg-gradient-to-r from-rose-500 via-purple-600 to-fuchsia-700 h-1'></div>
      <nav className='w-full max-w-4xl mx-auto flex flex-col'>
        <div className='p-3 bg-gradient-to-r from-rose-600 to-pink-400 text-transparent bg-clip-text text-xl'>
          <Link href='/' className='hover:text-rose-800'>
            Hello.
          </Link>
        </div>
        <div className='p-2 space-x-1 flex justify-end'>
          {listMenu.map((list) => {
            return (
              <Link
                className={
                  router.pathname == list.link
                    ? `py-1 px-4 border-b-2 border-rose-500 text-rose-500 font-normal text-md`
                    : `py-1 px-4 text-gray-400 font-light text-sm border-b-2 border-warmGray-100 hover:border-rose-400 hover:text-rose-400`
                }
                href={list.link}
                key={list.name}>
                {list.name}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
