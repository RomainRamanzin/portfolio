import Certifications from "@/components/Certifications";
import Competences from "@/components/Competences";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Competences />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
    </>
  );
}
