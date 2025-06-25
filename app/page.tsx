import Certifications from "@/components/Certifications";
import Competences from "@/components/Competences";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Formations from "@/components/Formations";
import Passions from "@/components/Passions";
import Projects from "@/components/Projects";
import Recommandations from "@/components/Recommandations";

export default function Home() {
  return (
    <>
      <Competences />
      <Projects />
      <Experience />
      <Formations />
      <Certifications />
      <Recommandations />
      <Passions />
      <Contact />
    </>
  );
}
