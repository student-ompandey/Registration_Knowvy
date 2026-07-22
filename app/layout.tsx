import type { Metadata } from "next";
import { Bodoni_Moda, Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";

const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Knowvy Technologies | Perks with Purpose, Events with Impact",
  description: "Build one of India's strongest student developer communities by connecting students, developers, startups, companies, mentors, and creators through technology, learning, networking, and real-world opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodoniModa.variable} ${spaceGrotesk.variable} ${manrope.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Anti-FOUC script for system/localStorage theme selection */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var storedTheme = localStorage.getItem('theme');
                  var supportDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (storedTheme === 'dark' || (!storedTheme && supportDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans overflow-x-hidden selection:bg-primary/30">
        {children}
      </body>
    </html>
  );
}
