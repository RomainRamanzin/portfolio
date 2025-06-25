import { Award } from "lucide-react";
import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

const certifications = [
  {
    name: "TOEIC - 910/990pts",
    issuer: "ETS Global",
    date: "2025 - 2027",
    badge: "./logo/global-exam.png",
  },
];

function Certifications() {
  return (
    <section
      id="certifications"
      className="py-20 px-4 bg-white dark:bg-slate-900 relative"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Award className="w-4 h-4" />
            Certifications
          </div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Compétences certifiées
          </h2>
        </div>
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"> */}
        <div className="flex flew-wrap justify-center gap-8">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="text-center border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-xl transition-shadow max-w-xs w-full"
            >
              <CardContent className="pt-8">
                <div className="relative mb-4 mx-auto w-20 h-20 flex flex-col justify-center">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl"></div>
                  <Image
                    src={cert.badge || "/placeholder.svg"}
                    alt={cert.name}
                    width={80}
                    height={80}
                    className="relative z-10 mx-auto"
                  />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {cert.name}
                </h3>
                <p className="text-purple-600 dark:text-purple-400 mb-2">
                  {cert.issuer}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {cert.date}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
