import { Code, Database, Globe, Server, Smartphone } from "lucide-react";
import { Separator } from "./ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const skills = [
  {
    name: "Front-end",
    icon: <Code className="h-6 w-6" />,
    description: "Création d'interfaces utilisateur modernes et réactives",
    techs: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Back-end",
    icon: <Server className="h-6 w-6" />,
    description: "Développement de serveurs et APIs robustes",
    techs: ["Symfony", "Node.js", "Express", "Python"],
  },
  {
    name: "Bases de données",
    icon: <Database className="h-6 w-6" />,
    description: "Conception et optimisation de bases de données",
    techs: ["MySQL", "MongoDB", "PostgreSQL", "Firebase"],
  },
  {
    name: "Mobile",
    icon: <Smartphone className="h-6 w-6" />,
    description: "Création d'applications mobiles performantes",
    techs: ["Flutter", "React Native"],
  },
  {
    name: "Déploiement",
    icon: <Globe className="h-6 w-6" />,
    description: "Mise en production et gestion d'infrastructures",
    techs: ["AWS", "Vercel", "Docker", "CI/CD", "Github Actions"],
  },
  {
    name: "Serveur",
    icon: <Server className="h-6 w-6" />,
    description: "Configuration et administration de serveurs",
    techs: ["Ubuntu", "Nginx", "SSH", "SSL", "Nom de domaine"],
  },
];

function Competences() {
  return (
    <div id="competences" className="py-16">
      <h3 className="text-4xl font-extrabold mb-6">Compétences</h3>
      <Separator className="h-[2px] rounded-lg" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
        {skills.map((skill) => (
          <Card
            key={skill.name}
            className="h-full transition-all hover:shadow-lg hover:border-primary/30"
          >
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                {skill.icon}
              </div>
              <CardTitle>{skill.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-4">
                {skill.description}
              </CardDescription>
              <div className="flex flex-wrap gap-2">
                {skill.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-custom-primary dark:text-black text-white  rounded-md text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Competences;
