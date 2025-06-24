import { Github, Linkedin, Mail, Phone } from "lucide-react";
import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

function Contact() {
  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Mail className="w-4 h-4" />
            Contact
          </div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Travaillons ensemble
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            N&apos;hésitez pas à me contacter pour discuter de vos projets ou
            opportunités de collaboration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Email */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white dark:bg-slate-800 hover:translate-y-[-5px]">
            <CardContent className="pt-8 pb-8 text-center flex flex-col justify-between h-full">
              <div>
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Email
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                  Contactez-moi directement
                </p>
              </div>
              <Link href="mailto:romain.ramanzin@gmail.com" target="_blank">
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white">
                  Envoyer un email
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* LinkedIn */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white dark:bg-slate-800 hover:translate-y-[-5px]">
            <CardContent className="pt-8 pb-8 text-center flex flex-col justify-between h-full">
              <div>
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  LinkedIn
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                  Connectons-nous professionnellement
                </p>
              </div>
              <Link
                href="https://www.linkedin.com/in/romainrr/"
                target="_blank"
              >
                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white">
                  Voir le profil
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* GitHub */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white dark:bg-slate-800 hover:translate-y-[-5px]">
            <CardContent className="pt-8 pb-8 text-center flex flex-col justify-between h-full">
              <div>
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-slate-700 to-slate-900 flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Github className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  GitHub
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                  Découvrez mes projets
                </p>
              </div>
              <Link href="https://github.com/RomainRamanzin" target="_blank">
                <Button className="w-full bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-800 hover:to-slate-950 text-white">
                  Voir les projets
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Téléphone */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white dark:bg-slate-800 hover:translate-y-[-5px]">
            <CardContent className="pt-8 pb-8 text-center flex flex-col justify-between h-full">
              <div>
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-600 to-green-700 flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Téléphone
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                  Appelez-moi directement
                </p>
              </div>
              <Link href="tel:+33608076882">
                <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white">
                  Appeler
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Section informations supplémentaires */}
        <div className="mt-16 text-center">
          <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm max-w-2xl mx-auto">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Disponibilité
              </h3>
              <div className="flex justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 dark:text-blue-400 text-xl">
                      💼
                    </span>
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                    Opportunités CDI
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    Ouvert aux propositions d&apos;emploi
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  📍 Basé à Mantes la Jolie, France • Télétravail possible •
                  Déplacements acceptés
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Contact;
