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

const projects = [
  {
    title: "Application E-commerce",
    description:
      "Plateforme de vente en ligne complète avec panier, paiement et gestion des commandes",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/placeholder.svg?height=200&width=300",
    link: "#",
    github: "#",
  },
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
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Voir
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-slate-200 dark:border-slate-700"
                  >
                    <Github className="w-4 h-4" />
                  </Button>
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
