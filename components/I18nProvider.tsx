import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  defaultLocale,
  detectBrowserLocale,
  localeStorageKey,
  messages,
  normalizeLocale,
  type Locale,
  type Messages,
} from "@/lib/i18n";

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  messages: Messages;
}

const I18nContext = createContext<I18nContextValue | null>(null);

function readStoredLocale(): Locale | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    return normalizeLocale(window.localStorage.getItem(localeStorageKey));
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn("Unable to read stored locale", error);
    }
    return null;
  }
}

function persistLocale(locale: Locale) {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.setItem(localeStorageKey, locale);
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn("Unable to persist locale", error);
    }
  }
}

function applyDocumentLocale(locale: Locale) {
  if (typeof document !== "undefined") {
    document.documentElement.lang = locale;
  }
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const initialLocale = readStoredLocale() ?? detectBrowserLocale();
    setLocaleState(initialLocale);
    applyDocumentLocale(initialLocale);
  }, []);

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale);
    persistLocale(nextLocale);
    applyDocumentLocale(nextLocale);
  }, []);

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
      messages: messages[locale],
    }),
    [locale, setLocale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }

  return context;
}
