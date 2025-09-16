import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Code, ExternalLink, Github } from "lucide-react";
import { Badge } from "./ui/badge";
import Link from "next/link";

const projects = [
  {
    title: "Aurel Automobile",
    description:
      "Aurel Automobile est un site vitrine dédié à la présentation d’une entreprise spécialisée en électronique automobile. Le site met en avant ses services ainsi que ses différentes réalisations.",
    technologies: [
      "Next.js",
      "TypeScript",
      "MySQL",
      "SEO",
      "hébergement",
      "Serveurs",
    ],
    image: "./images/aurel-website-thumbnail.webp",
    link: "https://aurel-automobile.vercel.app",
    // github: "#",
  },
  {
    title: "Modoow",
    description:
      "Modoow est une plateforme dédiée à la création et à la vente de cartes personnalisées, façon livre d'or, à partager en ligne. Les cartes sont proposées sous forme numérique ou imprimée.",
    technologies: [
      "Symfony",
      "PHP",
      "JavaScript",
      "Google Tag Manager",
      "MySQL",
      "SEO",
      "Mobile",
      "hébergement",
      "Serveurs",
    ],
    image: "./images/capture-modoow.webp",
    // link: "https://modoow.alwaysdata.net",
    // github: "#",
  },
  {
    title: "Portfolio personnel",
    description:
      "Portfolio personnel réalisé avec Next.js et Typescript, mettant l'accent sur un design moderne et une optimisation avancée du référencement pour une meilleure visibilité en ligne.",
    technologies: [
      "Next.js",
      "Typescript",
      "SEO",
      "Référencement",
      "Mobile",
      "hébergement",
    ],
    image: "./images/portfolio-img.webp",
    link: "https://romainramanzin.fr",
    github: "https://github.com/RomainRamanzin/portfolio",
  },
  // {
  //   title: "Site vitrine | Organisme de formation",
  //   description:
  //     "Création d’un site vitrine moderne et responsive pour présenter l’offre de formation, faciliter la prise de contact et optimiser la visibilité en ligne.",
  //   technologies: [
  //     "WordPress",
  //     "Symfony",
  //     "Google Tag Manager",
  //     "SEO",
  //     "Mobile",
  //   ],
  //   image: "./images/4manet-mockup.webp",
  //   link: "https://4manet.fr",
  // },
];

function Projects() {
  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Code className="w-4 h-4" />
            Mes Projets
          </div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Réalisations récentes
          </h2>
        </div>
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:translate-y-[-5px] flex flex-col h-full"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/40 to-blue-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-slate-900 dark:text-white">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      className="bg-slate-100 text-slate-700"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2 mt-auto">
                  {project.link && (
                    <Button
                      size="sm"
                      asChild
                      className="flex-1 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white"
                    >
                      <Link href={project.link} target="_blank">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Voir
                      </Link>
                    </Button>
                  )}
                  {project.github && (
                    <Button
                      size="sm"
                      asChild
                      variant="outline"
                      className="border-slate-200 dark:border-slate-700"
                    >
                      <Link href={project.github} target="_blank">
                        Voir le code
                        <Github className="w-4 h-4" />
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
