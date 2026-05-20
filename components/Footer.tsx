import { useI18n } from "@/components/I18nProvider";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { messages } = useI18n();

  return (
    <footer className="py-12 border-t border-zinc-100 dark:border-zinc-900 mt-20">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-zinc-500 dark:text-zinc-400 text-sm font-medium">
          © {currentYear} Syakirin Amin. {messages.footer.builtWith}{" "}
          <span className="text-primary mx-0.5">❤</span>
        </div>
        <div className="flex gap-1 items-center text-zinc-400 dark:text-zinc-500 text-xs font-mono uppercase tracking-widest">
          <span>{messages.footer.handcraftedIn}</span>
          <span className="font-bold text-zinc-900 dark:text-zinc-100">
            {messages.footer.location}
          </span>
        </div>
      </div>
    </footer>
  );
}
