import Image from "next/image";
import { Separator } from "./ui/separator";
import ReactMarkdown from "react-markdown";
import { ArrowRight } from "lucide-react";

const experiences = [
  {
    date: "Avril 2023 - Févier 2025",
    title: "Pilow (Madenco) | Développeur Web / Responsable technique",
    logo: {
      src: "/logo/pilow-logo.png",
      alt: "Logo de l'entreprise Pilow",
      size: { width: 50, height: 50 },
    },
    description: `En tant que responsable technique, j’ai pris en charge l’ensemble des aspects techniques du site web et de son API, garantissant la stabilité, la scalabilité et l’évolution de la plateforme.
  
  ## Développement & Maintenance
  - Conception et développement d’une API en **Symfony** avec une base de données **MySQL**.
  - Gestion des assets avec **Webpack**, utilisation de **jQuery** pour certaines interactions front-end.
  - Implémentation de nouvelles fonctionnalités et optimisation des performances.
  
  ## Architecture & Infrastructure
  - Déploiement et administration des serveurs (configuration, sécurité, monitoring).
  - Mise en place et gestion des pipelines **CI/CD** pour des déploiements automatisés et sécurisés.
  - Gestion des bases de données et des environnements de production/préproduction.
  
  ## Gestion de Projet & Coordination
  - Planification et priorisation des développements en collaboration avec les équipes métiers.
  - Encadrement et accompagnement de deux développeurs sur les bonnes pratiques et méthodologies.
  - Suivi des tâches et gestion des demandes clients pour améliorer l’expérience utilisateur.
  
  ## Évolution du Produit & Business
  - Analyse des besoins et conception des fonctionnalités en tenant compte des enjeux techniques et business.
  - Collaboration avec les différentes parties prenantes pour optimiser l’expérience utilisateur.`,
    tags: ["Symfony", "MySQL", "Webpack", "jQuery", "CI/CD", "API", "Ubuntu"],
    link: "https://www.linkedin.com/in/romainrr/",
  },
  {
    date: "Septembre 2022 - Mars 2023",
    title: "CreaKnow | Développeur Web",
    logo: {
      src: "/logo/creaknow.png",
      alt: "Logo de l'entreprise Creaknow",
      size: { width: 32, height: 36 },
    },
    description: `Au sein de Creaknow, j’ai participé à la conception et au développement de projets sous **Symfony**, en intervenant sur différentes phases du cycle de développement.
  
  ## Analyse & Conception
  - Recueil des besoins et rédaction des **spécifications techniques**.
  - Mise en place de l’**architecture** des projets en fonction des exigences métier.
  
  ## Développement
  - Implémentation de **nouvelles fonctionnalités** et optimisation du code.
  - Correction de bugs pour améliorer la **stabilité et les performances** des applications.
  
  ## Tests & Mise en Production
  - Débogage et mise en place de **tests** pour garantir la qualité du code.
  - Suivi des **déploiements** pour assurer une livraison fiable et efficace.`,
    tags: ["Symfony", "MySQL", "Webpack", "Flutter"],
    link: "https://www.linkedin.com/in/romainrr/",
  },
  {
    date: "Janvier 2022",
    title: "Les Restos du Cœur | Stage en développement",
    logo: {
      src: "/logo/restos_du_coeur.png",
      alt: "Logo de l'association Les Restos du Cœur",
      size: { width: 36, height: 36 },
    },
    description: `Dans le cadre de ce stage, j’ai participé au développement d’une application web en **Symfony** visant à optimiser la gestion du stockage et de la redistribution des denrées alimentaires pour l’association **Les Restos du Cœur**. Ce projet avait pour objectif d’améliorer la **gestion des stocks** en entrepôt et la distribution vers divers centres de collecte.
  
  ## Refonte du Projet
  - Reprise complète du développement **from scratch**, en collaboration avec une équipe de **3 personnes**.
  
  ## Gestion des Stocks
  - Développement des fonctionnalités permettant la gestion des **racks de stockage**, le suivi des **bons de transport** et le **contrôle des dates de péremption**.
  
  ## Développement & Intégration
  - Conception et mise en place des **modules principaux** de l’application en **Symfony**.
  
  ## Mise en Production
  - Déploiement de l’application, configuration du **serveur** et des **bases de données**.
  
  ## Formation des Utilisateurs
  - Accompagnement des membres de l’association à la prise en main de l’outil.
  - Création d’une **documentation utilisateur** pour faciliter l’usage de l’application.
  
  ## Travail en Équipe
  - Répartition des tâches et collaboration sur le développement.
  - Validation des fonctionnalités pour assurer un produit **fonctionnel et efficace**.
  `,
    tags: ["Symfony", "PHP", "Javascript", "Bootstrap", "MySQL"],
    link: "https://www.linkedin.com/in/romainrr/",
  },
];

function Experience() {
  return (
    <div id="experience" className="py-16">
      <h3 className="text-4xl font-extrabold mb-6">Mes expériences</h3>
      <Separator className="h-[2px] rounded-lg" />
      <div className="w-4/6 mx-auto">
        {experiences.map((experience, index) => (
          <>
            <div key={index} className="grid grid-cols-4 py-12">
              <span className="text-gray-500 dark:text-gray-400">
                {experience.date}
              </span>
              <div className="col-span-3">
                <div className="flex items-center gap-6">
                  <div className="size-[50px] bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Image
                      src={experience.logo.src}
                      width={experience.logo.size.width}
                      height={experience.logo.size.height}
                      alt={experience.logo.alt}
                    />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-3">
                      {experience.title}
                    </h4>
                    <div className="flex space-x-3">
                      {experience.tags.map((tag, index) => (
                        <span key={index} className="text-custom-primary text">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-gray-500 dark:text-gray-400 prose prose-gray dark:prose-invert max-w-none dark:prose-headings:text-gray-300 prose-h2:text-lg">
                  <ReactMarkdown>{experience.description}</ReactMarkdown>
                </div>
                <a
                  target="_blank"
                  href={experience.link}
                  className="text-custom-primary hover:text-custom-primary-hover flex items-center gap-1 hover:gap-2 ease-in-out transition-all mt-4"
                >
                  En savoir plus <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
            {index !== experiences.length - 1 && (
              <Separator className="h-[1px]" />
            )}
          </>
        ))}
      </div>
    </div>
  );
}

export default Experience;
