import Image from "next/image";
import { Briefcase, Calendar, ChevronDown, MapPin } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const experiences = [
  {
    title: "Développeur Full Stack / Responsable technique - alternance",
    company: "Pilow (MadenCo) - StartUp",
    period: "2023 - 2025",
    location: "Cergy, France",
    logo: "./logo/pilow-logo.png",
    description:
      "En tant que responsable technique, j’ai pris en charge l’ensemble des aspects techniques du site web et de son API, garantissant la stabilité, la scalabilité et l’évolution de la plateforme.",
    tasks: [
      "Conception et développement d’une API Symfony avec une base de données MySQL.",
      "Implémentation de nouvelles fonctionnalités et optimisation des performances.",
      "Déploiement et administration des serveurs (configuration, sécurité, monitoring).",
      "Mise en place et gestion des pipelines CI/CD",
      "Gestion des bases de données et des environnements de production/préproduction.",
      "Analyse des besoins et conception des fonctionnalités en tenant compte des enjeux techniques et business.",
    ],
    techno: [
      "Symfony",
      "JavaScript",
      "MySQL",
      "API REST",
      "Git",
      "CI/CD",
      "Ubuntu",
      "Figma",
      "Trello",
    ],
  },
  {
    title: "Développeur Full Stack - alternance",
    company: "Creaknow - StartUp",
    period: "2022 - 2023",
    location: "Cergy, France",
    logo: "./logo/creaknow.png",
    description:
      "Au sein de Creaknow, j’ai participé à la conception et au développement de projets web et mobile, en intervenant sur différentes phases du cycle de développement",
    tasks: [
      "Analyse des besoins et rédaction des spécifications fonctionnelles.",
      "Mise en place de l’architecture des projets en fonction des exigences métier.",
      "Conception et développement d’une application web avec Symfony.",
      "Développement mobile avec Flutter : création d’interfaces dynamiques, gestion de la navigation et des états.",
      "Capacité à proposer des choix techniques adaptés à un projet à taille réduite.",
    ],
    techno: ["Symfony", "JavaScript", "MySQL", "Flutter", "Figma"],
  },
  {
    title: "Développeur Web - stage",
    company: "Les Restos du Cœur",
    period: "2022",
    location: "Rouen, France",
    logo: "./logo/restos_du_coeur.png",
    description:
      "Participation au développement d’une application web visant à optimiser la gestion du stockage et de la redistribution des denrées alimentaires pour l’association Les Restos du Cœur. Ce projet avait pour objectif d’améliorer la gestion des stocks en entrepôt et la distribution vers divers centres de collecte.",
    tasks: [
      "Reprise complète du développement from scratch, en collaboration avec une équipe de 3 personnes.",
      "Développement de fonctionnalités permettant la gestion des racks de stockage, le suivi des bons de transport et le contrôle des dates de péremption.",
      "Déploiement de l’application, configuration serveur et bases de données.",
      "Accompagnement des membres de l’association à la prise en main de l’outil.",
      "Création documentation utilisateur pour faciliter la prise en main de l’application par les bénévoles.",
      "Validation des fonctionnalités pour assurer un produit fonctionnel et efficace.",
    ],
    techno: ["Symfony", "JavaScript", "MySQL", "Figma", "Trello"],
  },
];

function Experience() {
  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Briefcase className="w-4 h-4" />
            Expérience Professionnelle
          </div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Mon parcours
          </h2>
        </div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-l-4 border-l-purple-500 dark:border-l-purple-600"
            >
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <Image
                    src={exp.logo || "/placeholder.svg"}
                    alt={`Logo ${exp.company}`}
                    width={60}
                    height={60}
                    className="rounded-full border aspect-square object-contain border-slate-200 dark:border-slate-700 bg-white p-2"
                  />
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-purple-600 dark:text-purple-400 font-medium">
                          {exp.company}
                        </p>
                        <div className="flex gap-3 mt-2 flex-wrap">
                          {exp.techno?.map((techno, _index) => (
                            <Badge key={_index}>{techno}</Badge>
                          ))}
                        </div>
                      </div>
                      <div className="text-right mt-2 md:mt-0">
                        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 mb-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-nowrap">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 mb-2">
                      {exp.description}
                    </p>
                    {exp.tasks && (
                      <div className="mt-4">
                        <details className="group">
                          <summary className="cursor-pointer text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium text-sm flex items-center gap-2">
                            Voir les tâches détaillées
                            <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
                          </summary>
                          <div className="mt-3 space-y-2">
                            <h4 className="font-semibold text-slate-900 dark:text-white text-sm">
                              Principales réalisations :
                            </h4>
                            <ul className="space-y-1 flex flex-col gap-1">
                              {exp.tasks.map((task, taskIndex) => (
                                <li
                                  key={taskIndex}
                                  className="text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2"
                                >
                                  <span className="text-purple-500">•</span>
                                  <span>{task}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </details>
                      </div>
                    )}
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

export default Experience;
