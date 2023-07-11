import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const listMenu: Array<{ name: string; link: string }> = [
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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const { theme, setTheme } = useTheme();

  // toggle dark theme
  function handleDarkMode() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <header>
      <div className='w-full bg-gradient-to-r from-rose-500 via-purple-600 to-fuchsia-700 h-1'></div>
      <nav className='w-full max-w-4xl mx-auto flex flex-col'>
        <div className='flex items-center justify-between'>
          <div className='p-3 bg-gradient-to-r from-rose-600 to-pink-400 text-transparent bg-clip-text text-xl'>
            <Link href='/' className='hover:text-rose-800'>
              Hello.
            </Link>
          </div>
          <button
            className='py-1 px-4 text-gray-400 font-light text-sm  hover:text-rose-400'
            onClick={handleDarkMode}>
            {isClient && theme === "dark" ? <Sun /> : <Moon />}
          </button>
        </div>
        <div className='p-2 space-x-1 flex justify-end'>
          <Link
            className={
              router.pathname === "/"
                ? `py-1 px-4 border-b-2 border-rose-500 text-rose-500 font-normal text-md`
                : `py-1 px-4 text-gray-400 font-light text-sm border-b-2 border-warmGray-100 dark:border-gray-700 hover:border-rose-400 hover:text-rose-400 `
            }
            href={"/"}>
            Home
          </Link>
          {listMenu.map((list) => {
            return (
              <Link
                className={
                  router.pathname.startsWith(list.link)
                    ? `py-1 px-4 border-b-2 border-rose-500 text-rose-500 font-normal text-md`
                    : `py-1 px-4 text-gray-400 font-light text-sm border-b-2 border-warmGray-100 dark:border-gray-700 hover:border-rose-400 hover:text-rose-400`
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
