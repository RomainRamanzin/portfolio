import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Formations from "@/components/Formations";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Passions from "@/components/Passions";
import Recommandations from "@/components/Recommandations";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
        <Header />
        <Hero />
        {/* No project to show for the moment */}
        {/* <Projects /> */}
        <Experience />
        <Formations />
        <Certifications />
        <Recommandations />
        <Passions />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
