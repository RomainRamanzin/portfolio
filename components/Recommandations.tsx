import { MessageSquare, Star } from "lucide-react";
import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

const recommendations = [
  {
    name: "Sandra Bédé",
    position: "Fondatrice",
    company: "Pilow (MadenCo)",
    content:
      "Romain est un homme polyvalent, fiable et très ingénieux. Il a su porter seul le plus gros projet de développement de la société que j’ai fondée il y a 2 ans. Il est très rigoureux et sait faire preuve d’initiatives. J’espère avoir un jour la chance de retravailler à ses côtés !",
    avatar: "./images/sandra-bede.jpeg",
  },
  {
    name: "Ingrid Darboux",
    position: "Responsable Entrepot Régional",
    company: "Les Restos du Cœur",
    content:
      "Romain a intégré le projet en cours de route. Il a su s'adapter, vite comprendre ce nous avions besoin et être rapidement opérationnel. Il est investit dans ce qu'il fait. Son potentiel ne demande qu'à s'exprimer.",
    avatar: "./images/ingrid-darboux.jpeg",
  },
];

function Recommandations() {
  return (
    <section
      id="recommendations"
      className="py-20 px-4 bg-white dark:bg-slate-900 relative"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MessageSquare className="w-4 h-4" />
            Recommandations
          </div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Ce qu&apos;ils disent de moi
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Témoignages de collègues et clients avec qui j&apos;ai eu le plaisir
            de collaborer.
          </p>
        </div>
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
        <div className="flex flex-wrap justify-center gap-8">
          {recommendations.map((rec, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-xl transition-all w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)]"
            >
              <CardContent className="pt-6 flex flex-col gap-4 justify-between h-full">
                <div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-4 h-4 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 italic">
                    &quot;{rec.content}&quot;
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Image
                    src={rec.avatar || "/placeholder.svg"}
                    alt={rec.name}
                    width={60}
                    height={60}
                    className="rounded-full border-2 border-purple-100 dark:border-purple-900"
                  />
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">
                      {rec.name}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {rec.position}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-500">
                      {rec.company}
                    </p>
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

export default Recommandations;
