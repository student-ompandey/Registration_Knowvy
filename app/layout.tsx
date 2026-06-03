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
  title: "Microsoft Build //localhost: Bhopal",
  description: "Moving Beyond the Prompt: Engineering Real-World AI Agents",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodoniModa.variable} ${spaceGrotesk.variable} ${manrope.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans overflow-x-hidden selection:bg-primary/30">
        {children}
      </body>
    </html>
  );
}
