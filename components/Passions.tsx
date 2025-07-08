import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

const passions = [
  {
    name: "Impression 3d",
    description: "Prototypage & création",
    img: "./images/imprimante-3d.webp",
  },
  {
    name: "Électronique",
    description: "Circuits & composants",
    img: "./images/arduino.webp",
  },
  {
    name: "Robotique",
    description: "Automatisation & IA",
    img: "./images/robot.webp",
  },
  {
    name: "Sim Racing",
    description: "Course virtuelle",
    img: "./images/simracing.webp",
  },
  {
    name: "Automobile",
    description: "Circuit & rassemblements",
    img: "./images/automobile.avif",
  },
];

function Passions() {
  return (
    <section className="py-16 px-4 relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span className="text-lg">🎯</span>
            Centres d&apos;intérêt
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Mes passions
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Au-delà du développement, je cultive des passions qui nourrissent ma
            créativité et mon approche technique.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {passions.map((passion, _index) => (
            <Card
              key={_index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white dark:bg-slate-800 hover:translate-y-[-5px] cursor-pointer"
            >
              <CardContent className="pt-6 pb-6 text-center flex flex-col items-center">
                <div className="w-[80px] h-[80px] mb-3 group-hover:scale-110 transition-transform flex justify-center">
                  <Image
                    src={passion.img}
                    alt={passion.name}
                    height={80}
                    width={80}
                    className="object-contain"
                  />
                </div>
                <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">
                  {passion.name}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  {passion.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Passions;
