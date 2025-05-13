import "./globals.css";
import "@/styles/prosemirror.css";
import "katex/dist/katex.min.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";
import Providers from "./providers";

const title = "DeepSeek - Advanced AI Solutions";
const description =
  "Explore infinite AI possibilities with DeepSeek V3/R1, delivering powerful AI solutions for natural language processing, code generation, and complex problem solving.";

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-adsense-account" content="ca-pub-9570640990964396" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9570640990964396"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
