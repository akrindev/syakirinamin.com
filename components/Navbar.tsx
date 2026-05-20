import { BookOpen, FolderKanban, Home, Moon, Sun, UserRound } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useI18n } from "@/components/I18nProvider";

const listMenu: Array<{ key: "about" | "blog" | "projects"; link: string; icon: typeof Home }> = [
  {
    key: "about",
    link: "/about",
    icon: UserRound,
  },
  {
    key: "blog",
    link: "/blog",
    icon: BookOpen,
  },
  {
    key: "projects",
    link: "/projects",
    icon: FolderKanban,
  },
];

export default function Navbar() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const { locale, setLocale, messages } = useI18n();
  const nextLocale = locale === "en" ? "id" : "en";

  useEffect(() => {
    setIsClient(true);
  }, []);

  const { theme, setTheme } = useTheme();

  // toggle dark theme
  function handleDarkMode() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  function handleLocaleChange() {
    setLocale(nextLocale);
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
                  ? `py-2 px-3 md:px-4 text-primary font-bold text-sm transition-all duration-300 relative after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-primary after:rounded-full`
                  : `py-2 px-3 md:px-4 text-zinc-600 dark:text-zinc-400 hover:text-primary font-semibold text-sm transition-all duration-300 hover:scale-105`
              }
              href="/"
              aria-label={messages.nav.home}
            >
              <Home size={18} className="md:hidden" />
              <span className="hidden md:inline">{messages.nav.home}</span>
            </Link>
            {listMenu.map((list) => {
              const Icon = list.icon;
              const label = messages.nav[list.key];

              return (
                <Link
                  className={
                    router.pathname.startsWith(list.link)
                      ? `py-2 px-3 md:px-4 text-primary font-bold text-sm transition-all duration-300 relative after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-primary after:rounded-full`
                      : `py-2 px-3 md:px-4 text-zinc-600 dark:text-zinc-400 hover:text-primary font-semibold text-sm transition-all duration-300 hover:scale-105`
                  }
                  href={list.link}
                  key={list.key}
                  aria-label={label}
                >
                  <Icon size={18} className="md:hidden" />
                  <span className="hidden md:inline">{label}</span>
                </Link>
              );
            })}
          </div>

          <div className="w-px h-6 bg-zinc-200/50 dark:bg-zinc-800/50 mx-2 hidden md:block"></div>

          <button
            className="p-2.5 text-zinc-500 hover:text-primary hover:bg-white/50 dark:hover:bg-zinc-900/50 rounded-full transition-all duration-300 hover:scale-110 active:scale-90 shadow-sm"
            onClick={handleDarkMode}
            aria-label={messages.nav.toggleTheme}
          >
            {isClient && theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="px-2.5 py-2 text-[11px] font-black tracking-widest text-zinc-500 hover:text-primary hover:bg-white/50 dark:hover:bg-zinc-900/50 rounded-full transition-all duration-300 hover:scale-110 active:scale-90 shadow-sm"
            onClick={handleLocaleChange}
            aria-label={messages.nav.switchLanguage}
            type="button"
          >
            {messages.nav.localeLabel}
          </button>
        </div>
      </nav>
    </header>
  );
}
