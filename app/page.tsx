import Competences from "@/components/Competences";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <section className="container mx-auto">
        <Competences />
        <Projects />
        <Experience />
      </section>
    </>
  );
}
