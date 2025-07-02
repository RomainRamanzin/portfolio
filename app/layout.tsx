import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Space_Grotesk } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Définition de la police
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  // Vous pouvez ajouter d'autres options comme :
  // weight: ['400', '700'],
  // display: 'swap',
});

export const metadata: Metadata = {
  title: "Romain Ramanzin – Développeur Web Fullstack",
  description:
    "Portfolio de Romain Ramanzin, développeur web fullstack passionné par la création d'applications performantes et modernes. Découvrez mes compétences, expériences et réalisations.",
  keywords: [
    "Développeur",
    "Web",
    "Fullstack",
    "Portfolio",
    "React",
    "Next.js",
    "TypeScript",
    "Romain Ramanzin",
  ],
  authors: [{ name: "Romain Ramanzin" }],
  creator: "Romain Ramanzin",
  openGraph: {
    title: "Romain Ramanzin – Développeur Web Fullstack",
    description:
      "Portfolio de Romain Ramanzin, développeur web fullstack passionné par la création d'applications performantes et modernes.",
    url: "https://romainramanzin.github.io/portfolio/",
    siteName: "Portfolio Romain Ramanzin",
    images: [
      {
        url: "https://romainramanzin.github.io/portfolio/image.png",
        width: 1200,
        height: 630,
        alt: "Aperçu du portfolio de Romain Ramanzin",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Romain Ramanzin – Développeur Web Fullstack",
    description:
      "Portfolio de Romain Ramanzin, développeur web fullstack passionné par la création d'applications performantes et modernes.",
    images: ["https://romainramanzin.github.io/portfolio/image.png"],
  },
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased scroll-smooth`}
    >
      <head>
        <meta
          name="google-site-verification"
          content="7UBQCIjFtZRmkjfQ0CRI5L1nAY2jDw5KT4ljbzTo_v4"
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
