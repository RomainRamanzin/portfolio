import { Calendar, GraduationCap, MapPin } from "lucide-react";
import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";

const education = [
  {
    degree: "Expert en informatique et système d'information",
    school: "Ensitech",
    period: "2023 - 2025",
    location: "Cergy, France",
    logo: "/logo/logo-ensitech.png",
    description:
      "Approfondissement des architectures logicielles, des méthodologies DevOps et du développement full-stack web & mobile pour piloter la transformation numérique des organisations.",
    techno: [
      "Symfony",
      "React",
      "Node.js",
      "MySQL",
      "MongoDB",
      "Docker",
      "CI/CD",
      "API REST",
    ],
  },
  {
    degree: "Concepteur développeur d'applications",
    school: "Ensitech",
    period: "2022 - 2023",
    location: "Cergy, France",
    logo: "/logo/logo-ensitech.png",
    description:
      "Maîtrise du cycle de vie logiciel : analyse des besoins, modélisation, développement (JavaScript/TypeScript, PHP) et déploiement sur des SGBD relationnels et NoSQL.",
    techno: ["Symfony", "React", "Flutter", "Java", "MySQL"],
  },
  {
    degree:
      "BTS SIO - option SLAM (Solutions logicielles et Application Métiers",
    school: "Saint Adjutor",
    period: "2020 - 2022",
    location: "Vernon, France",
    logo: "/logo/logo-stadjutor.png",
    description:
      "Acquisition des fondamentaux du génie logiciel et des bases de données, réalisation d’applications métiers en équipe selon une démarche projet agile.",
    techno: [
      "Symfony",
      "React",
      "C#",
      "MySQL",
      "Bootstrap",
      "Angular",
      "Ionic",
    ],
  },
];

function Formations() {
  return (
    <section
      id="education"
      className="py-20 px-4 bg-white dark:bg-slate-900 relative"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <GraduationCap className="w-4 h-4" />
            Formation
          </div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Parcours académique
          </h2>
        </div>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-l-4 border-l-blue-500 dark:border-l-blue-600"
            >
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <Image
                    src={edu.logo || "/placeholder.svg"}
                    alt={`Logo ${edu.school}`}
                    width={80}
                    height={80}
                    className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white  p-2"
                  />
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row  md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          {edu.degree}
                        </h3>
                        <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                          {edu.school}
                        </p>
                      </div>
                      <div className="text-right mt-2 md:mt-0">
                        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 mb-1">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </div>
                        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-nowrap">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      {edu.description}
                    </p>
                    <div className="flex gap-3 flex-wrap">
                      {edu.techno.map((techno, _index) => (
                        <Badge key={_index}>{techno}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Formations;
