import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Wrench, Droplets, Thermometer, Zap, CheckCircle, Star, Users, Award, Calendar, ArrowRight } from 'lucide-react';
import { AnimatedCounter } from './components/AnimatedCounter';
import { ContactForm } from './components/ContactForm';

function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Wrench className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">RB Plomberie</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-gray-600">
                <Phone className="h-4 w-4" />
                <span>06 25 73 57 47</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Urgence 24h/24
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: imageY, scale: imageScale }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/60 z-10"></div>
          <motion.img
            src="https://images.pexels.com/photos/8486944/pexels-photo-8486944.jpeg"
            alt="Plombier professionnel"
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Plomberie d'Excellence
              <span className="block text-orange-400">24h/24</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed"
            >
              Intervention rapide, travail de qualité. Vos experts en plomberie depuis plus de 6 ans.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Appeler Maintenant</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300"
              >
                Devis Gratuit
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">
                <AnimatedCounter end={15} duration={2} />+
              </div>
              <p className="text-gray-600">Années d'expérience</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">
                <AnimatedCounter end={2500} duration={2} />+
              </div>
              <p className="text-gray-600">Clients satisfaits</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">
                <AnimatedCounter end={24} duration={2} />/7
              </div>
              <p className="text-gray-600">Service d'urgence</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">
                <AnimatedCounter end={98} duration={2} />%
              </div>
              <p className="text-gray-600">Taux de satisfaction</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nos Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une gamme complète de services de plomberie pour tous vos besoins
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Droplets,
                title: "Réparation de Fuites",
                description: "Détection et réparation rapide de toutes fuites d'eau",
                price: "À partir de 80€"
              },
              {
                icon: Thermometer,
                title: "Chauffage & Chaudière",
                description: "Installation, maintenance et réparation de systèmes de chauffage",
                price: "À partir de 120€"
              },
              {
                icon: Zap,
                title: "Débouchage Urgent",
                description: "Débouchage professionnel de canalisations 24h/24",
                price: "À partir de 90€"
              },
              {
                icon: Wrench,
                title: "Installation Sanitaire",
                description: "Pose et remplacement d'équipements sanitaires",
                price: "À partir de 150€"
              },
              {
                icon: CheckCircle,
                title: "Diagnostic Complet",
                description: "Inspection et diagnostic de vos installations",
                price: "À partir de 60€"
              },
              {
                icon: Phone,
                title: "Urgence 24h/24",
                description: "Intervention d'urgence à toute heure",
                price: "Tarif majoré"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-blue-200 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  {service.description}
                </p>
                <div className="text-center">
                  <span className="text-orange-500 font-semibold">{service.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Comment Ça Marche
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un processus simple et efficace pour résoudre vos problèmes de plomberie
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Appelez-nous",
                description: "Contactez-nous par téléphone ou via notre formulaire en ligne"
              },
              {
                step: "2",
                title: "Diagnostic",
                description: "Notre expert se déplace pour évaluer la situation"
              },
              {
                step: "3",
                title: "Devis",
                description: "Nous vous proposons un devis transparent et détaillé"
              },
              {
                step: "4",
                title: "Intervention",
                description: "Réparation rapide et efficace avec garantie"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center relative"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full text-2xl font-bold mb-6 mx-auto">
                  {item.step}
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-blue-200 transform translate-x-8"></div>
                )}
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Pourquoi Nous Choisir ?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Avec plus de 15 ans d'expérience, nous sommes votre partenaire de confiance pour tous vos besoins en plomberie.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Award,
                    title: "Certifiés & Assurés",
                    description: "Tous nos plombiers sont certifiés et notre travail est garanti"
                  },
                  {
                    icon: Clock,
                    title: "Intervention Rapide",
                    description: "Délai d'intervention moyen de 30 minutes en urgence"
                  },
                  {
                    icon: Users,
                    title: "Équipe Experte",
                    description: "Une équipe de professionnels formés aux dernières techniques"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg"
                alt="Équipe de plombiers professionnels"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">Années d'expérience</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Témoignages Clients
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez ce que nos clients disent de nos services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Marie Dubois",
                location: "Nice Centre",
                rating: 5,
                comment: "Service exceptionnel ! Intervention rapide pour une fuite d'urgence. Je recommande vivement."
              },
              {
                name: "Pierre Martin",
                location: "Cannes",
                rating: 5,
                comment: "Travail de qualité pour l'installation de ma nouvelle salle de bain. Équipe très professionnelle."
              },
              {
                name: "Sophie Leroy",
                location: "Antibes",
                rating: 5,
                comment: "Dépannage chaudière un dimanche soir. Merci pour votre disponibilité et votre efficacité !"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.comment}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contactez-Nous
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Besoin d'un plombier ? Contactez-nous dès maintenant pour un devis gratuit
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Téléphone</h3>
                    <p className="text-gray-600">06 25 73 57 47</p>
                    <p className="text-sm text-gray-500">Disponible 24h/24, 7j/7</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600">rb.plomberie98@gmail.com</p>
                    <p className="text-sm text-gray-500">Réponse sous 2h en moyenne</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Zone d'intervention</h3>
                    <p className="text-gray-600">Nice et ses alentours</p>
                    <p className="text-sm text-gray-500">Déplacement gratuit</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Wrench className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">RB Plomberie</span>
              </div>
              <p className="text-gray-400">
                Votre expert en plomberie depuis plus de 15 ans. Service de qualité garanti.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Réparation de fuites</li>
                <li>Installation sanitaire</li>
                <li>Débouchage</li>
                <li>Chauffage</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>01 23 45 67 89</li>
                <li>contact@proflow-plomberie.fr</li>
                <li>Paris & Île-de-France</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Horaires</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Lun-Ven: 8h-18h</li>
                <li>Sam: 9h-17h</li>
                <li>Dim: Urgences uniquement</li>
                <li>Urgences: 24h/24</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 RB Plomberie. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;