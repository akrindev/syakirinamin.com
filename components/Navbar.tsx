import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const listMenu: Array<{ name: string; link: string }> = [
  {
    name: "About",
    link: "/about",
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
    <header className="sticky top-4 z-50 px-4">
      <nav className="w-full max-w-4xl mx-auto flex items-center justify-between p-2 px-6 rounded-full bg-white/40 dark:bg-zinc-950/40 backdrop-blur-xl border border-white/20 dark:border-zinc-800/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="text-3xl font-handwritten tracking-tighter text-primary hover:text-primary-dark transition-all duration-300 hover:scale-105 active:scale-95"
          >
            SA.
          </Link>
        </div>

        <div className="flex items-center gap-1 md:gap-4">
          <div className="flex items-center gap-1">
            <Link
              className={
                router.pathname === "/"
                  ? `py-2 px-4 text-primary font-bold text-sm transition-all duration-300 relative after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-primary after:rounded-full`
                  : `py-2 px-4 text-zinc-600 dark:text-zinc-400 hover:text-primary font-semibold text-sm transition-all duration-300 hover:scale-105`
              }
              href={"/"}
            >
              Home
            </Link>
            {listMenu.map((list) => {
              return (
                <Link
                  className={
                    router.pathname.startsWith(list.link)
                      ? `py-2 px-4 text-primary font-bold text-sm transition-all duration-300 relative after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-primary after:rounded-full`
                      : `py-2 px-4 text-zinc-600 dark:text-zinc-400 hover:text-primary font-semibold text-sm transition-all duration-300 hover:scale-105`
                  }
                  href={list.link}
                  key={list.name}
                >
                  {list.name}
                </Link>
              );
            })}
          </div>

          <div className="w-px h-6 bg-zinc-200/50 dark:bg-zinc-800/50 mx-2 hidden md:block"></div>

          <button
            className="p-2.5 text-zinc-500 hover:text-primary hover:bg-white/50 dark:hover:bg-zinc-900/50 rounded-full transition-all duration-300 hover:scale-110 active:scale-90 shadow-sm"
            onClick={handleDarkMode}
            aria-label="Toggle Dark Mode"
          >
            {isClient && theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
