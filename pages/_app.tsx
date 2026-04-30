import ProgressBar from "@badrap/bar-of-progress";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import { Caveat, Inter, Nunito } from "next/font/google";
import Router from "next/router";

// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css";

// used for code syntax highlighting (optional)
import "prismjs/themes/prism-tomorrow.css";
import "../styles/globals.css";

import { ThemeProvider } from "next-themes";
import "react-tooltip/dist/react-tooltip.css";

const progress = new ProgressBar({
  size: 2,
  color: "#ef4444",
  className: "bar-of-progress",
  delay: 200,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" enableSystem={true} defaultTheme="light">
      <div
        className={`${inter.variable} ${nunito.variable} ${caveat.variable} font-inter min-h-screen`}
      >
        <Component {...pageProps} />
      </div>
      <Analytics />
    </ThemeProvider>
  );
}

export default MyApp;
