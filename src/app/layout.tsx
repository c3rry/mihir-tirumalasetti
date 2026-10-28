import type { Metadata } from "next";
import { Playfair_Display, Lora, JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-headline",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mihir Tirumalasetti | The Chronicle & Portfolio",
  description:
    "Data Science & ML Engineering portfolio in a New York Times broadsheet aesthetic. Features enterprise credit decisioning at Ally Financial, 3D neuroanatomy at Ganglia Guardian Lab, and autonomous LLM pipelines.",
  keywords: [
    "Mihir Tirumalasetti",
    "Data Science",
    "Machine Learning",
    "Computer Vision",
    "Ally Financial",
    "Ganglia Guardian Lab",
    "UT Dallas",
    "Neuroscience Connectomics",
    "Portfolio",
  ],
  authors: [{ name: "Mihir Tirumalasetti", url: "https://www.linkedin.com/in/mihir-tirumalasetti/" }],
  openGraph: {
    title: "Mihir Tirumalasetti | The Chronicle & Portfolio",
    description: "Enterprise Machine Learning, 3D Neuroanatomy, and Multimodal Systems.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${lora.variable} ${jetbrainsMono.variable} ${inter.variable} font-sans antialiased bg-nyt-paper dark:bg-nyt-darkPaper text-nyt-ink dark:text-nyt-darkInk min-h-screen selection:bg-amber-300 dark:selection:bg-indigo-600`}
      >
        {children}
      </body>
    </html>
  );
}
