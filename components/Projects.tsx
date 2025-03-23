import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-commerce moderne",
    description:
      "Une plateforme e-commerce complète avec panier, paiement et gestion des commandes.",
    image: "/app.webp",
    tags: ["Next.js", "Stripe", "Tailwind CSS", "Prisma"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Application de gestion de fenêtres",
    description:
      "Une application de gestion de fenetre pour Macos permettant de gérer de manière personnalisé la répartition des fenêtres sur l'écran.",
    image: "/macapp.jpg",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Dashboard analytique",
    description:
      "Un tableau de bord interactif pour visualiser et analyser des données complexes.",
    image: "/app.png",
    tags: ["React", "D3.js", "Firebase", "Material UI"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "E-commerce moderne",
    description:
      "Une plateforme e-commerce complète avec panier, paiement et gestion des commandes.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Stripe", "Tailwind CSS", "Prisma"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

function Projects() {
  return (
    <div id="projects" className="py-16">
      <h3 className="text-4xl font-extrabold mb-6">Projets récents</h3>
      <Separator className="h-[2px] rounded-lg" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="overflow-hidden h-full flex flex-col"
          >
            <div className="relative h-72 w-full overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform hover:scale-105 duration-500"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-custom-primary dark:text-black text-white rounded-md text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" asChild>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </a>
              </Button>
              <Button
                size="sm"
                variant={"outline"}
                className="border-custom-primary text-custom-primary"
                asChild
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Projects;
