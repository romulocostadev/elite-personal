"use client";
import { AnimatePresence, motion } from "framer-motion";
// pages/index.js
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Controla o efeito de navbar ao scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    setEmail("");
  };

  // Dados dos depoimentos
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Programa Intermediário",
      image: "/placeholder-1.jpg",
      content:
        "Em apenas 3 meses consegui perder 10kg e ganhar massa muscular. Os treinos são desafiadores mas muito bem explicados.",
    },
    {
      name: "Ana Ferreira",
      role: "Programa Iniciante",
      image: "/placeholder-2.jpg",
      content:
        "Nunca tinha treinado antes e tinha medo de não conseguir acompanhar, mas o programa é muito bem estruturado e me motivou desde o primeiro dia.",
    },
    {
      name: "Roberto Almeida",
      role: "Programa Avançado",
      image: "/placeholder-3.jpg",
      content:
        "Já treino há anos e estava estagnado. Com o programa avançado consegui quebrar barreiras e atingir um novo patamar de condicionamento.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#111111]">
      <Head>
        <title>RN Personal Trainer | Programas de Treino Personalizados</title>
        <meta
          name="description"
          content="Transforme seu corpo e sua vida com os programas de treino personalizados do RN Personal Trainer"
        />
        <link rel="icon" href="/rn-icon.png" />
      </Head>

      {/* Barra de navegação */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#111111]/80 backdrop-blur-lg shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center"
            >
              <div className="h-10">
                <Image
                  src="/rn-logo.png"
                  alt="RN Logo"
                  width={120}
                  height={35}
                  className="object-contain -mt-3"
                />
              </div>
            </motion.div>

            {/* Menu de navegação desktop */}
            <div className="hidden md:flex items-center space-x-8">
              {["Programas", "Sobre", "Depoimentos", "Contato"].map(
                (item, index) => (
                  <motion.a
                    key={index}
                    href={`#${item.toLowerCase()}`}
                    className={`text-white hover:text-orange-500 relative px-2 py-1`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                    <motion.span
                      className="absolute bottom-0 left-0 h-0.5 bg-orange-500"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.a>
                )
              )}
              <motion.button
                className="bg-gradient-to-r from-orange-500 to-orange-700 text-white px-6 py-2 rounded-full hover:shadow-lg transition duration-300 ease-in-out"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 15px -3px rgba(249, 115, 22, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Entrar
              </motion.button>
            </div>

            {/* Menu de navegação mobile */}
            <div className="md:hidden">
              <button
                className="text-white focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      mobileMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Menu mobile */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-gray-800 border-t border-gray-700"
            >
              <div className="container mx-auto px-6 py-4">
                <div className="flex flex-col space-y-4">
                  {["Programas", "Sobre", "Depoimentos", "Contato"].map(
                    (item, index) => (
                      <a
                        key={index}
                        href={`#${item.toLowerCase()}`}
                        className="text-white hover:text-orange-500 py-2"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item}
                      </a>
                    )
                  )}
                  <button className="bg-gradient-to-r from-orange-500 to-orange-700 text-white px-6 py-2 rounded-full">
                    Entrar
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section com gradiente moderno e formas fluidas */}
      <section className="pt-32 pb-20 overflow-hidden relative">
        {/* Formas SVG decorativas */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-40 pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#FF4B00"
              d="M49.2,-59.2C63.7,-49.1,75.5,-33.9,78.7,-16.8C81.9,0.3,76.5,19.3,66.7,34.1C56.9,48.9,42.7,59.5,27.2,64.4C11.7,69.4,-5.2,68.6,-20.9,63.2C-36.6,57.8,-51.1,47.8,-60.6,33.5C-70.1,19.2,-74.7,0.7,-72.3,-17.5C-69.9,-35.8,-60.5,-53.9,-46.2,-64C-31.9,-74.1,-12.5,-76.3,3.2,-80.1C19,-83.9,34.7,-69.3,49.2,-59.2Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full opacity-40 pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#FF4B00"
              d="M49.9,-67.9C65.3,-62.3,78.9,-47.6,83.1,-30.7C87.3,-13.7,82.1,5.5,74.3,22.1C66.6,38.7,56.2,52.7,42.6,63.3C28.9,73.9,11.9,81.1,-3.7,80.1C-19.4,79.1,-33.7,69.9,-47.2,58.4C-60.6,46.9,-73.2,33.1,-78,16.6C-82.9,0.1,-80.1,-19.2,-70.6,-33.3C-61.1,-47.4,-45,-56.4,-30.5,-62.3C-16,-68.2,-3.2,-71.1,8.9,-70.4C21,-69.8,34.5,-73.5,49.9,-67.9Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        {/* Conteúdo da seção hero */}
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
                <span className="block">Transforme seu</span>
                <span className="text-[#FF4B00]">corpo e sua vida</span>
              </h1>
              <p className="text-lg text-white mb-8 max-w-lg">
                Programas de treino personalizados que se adaptam ao seu tempo,
                objetivos e necessidades, com acompanhamento profissional em
                tempo real.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="#programas"
                  className="bg-[#FF4B00] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#FF5E00] transition flex items-center justify-center"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 25px -5px rgba(255, 75, 0, 0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ver Programas
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.a>
                <motion.a
                  href="#sobre"
                  className="text-white border border-[#333333] px-8 py-3 rounded-lg font-semibold hover:border-[#FF4B00] hover:text-[#FF4B00] transition flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Saiba Mais
                </motion.a>
              </div>

              <div className="mt-12 flex items-center">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-[#333333] overflow-hidden bg-[#1A1A1A]"
                    />
                  ))}
                </div>
                <div className="ml-4">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-[#FF4B00]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-white">
                    Mais de 1000 clientes satisfeitos
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Imagem/placeholder do lado direito */}
          <div className="md:w-1/2 md:pl-12">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="bg-[#1A1A1A] p-4 rounded-2xl shadow-2xl relative z-10 overflow-hidden">
                <div className="bg-[#FF4B00] rounded-xl flex items-center justify-center relative overflow-hidden">
                  <Image
                    src="/roge.jpeg"
                    alt="Imagem de um personal trainer com um cliente"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Estatísticas com contador animado */}
      <section className="py-12 bg-[#1A1A1A] border-t border-[#333333]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                label: "Alunos",
                value: "5K+",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-[#FF4B00]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                ),
              },
              {
                label: "Avaliações",
                value: "1200+",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-[#FF4B00]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                ),
              },
              {
                label: "Programas",
                value: "24",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-[#FF4B00]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                ),
              },
              {
                label: "Cidades",
                value: "32",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-[#FF4B00]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-[#111111] rounded-2xl p-6 border border-[#333333]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, borderColor: "#FF4B00" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-[#FF4B00]/10 rounded-xl">
                    {stat.icon}
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="h-2 w-2 rounded-full bg-[#FF4B00]"></div>
                    <div className="h-2 w-2 rounded-full bg-[#333333]"></div>
                    <div className="h-2 w-2 rounded-full bg-[#333333]"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-[#999999] text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de benefícios com cards modernos */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Por que escolher nossos programas
            </h2>
            <p className="text-lg text-white">
              Nossa metodologia exclusiva combina ciência e experiência prática
              para oferecer os melhores resultados possíveis.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Programas Personalizados",
                description:
                  "Cada programa é elaborado considerando seus objetivos, disponibilidade e condição física.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
              {
                title: "Acompanhamento Contínuo",
                description:
                  "Suporte constante via aplicativo e ajustes nos treinos conforme sua evolução.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                ),
              },
              {
                title: "Resultados Garantidos",
                description:
                  "Metodologia comprovada com mais de 1000 alunos que alcançaram seus objetivos.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                whileTap={{ scale: 0.95 }}
                drag="y"
                dragConstraints={{ top: 0, bottom: 0 }}
                dragElastic={0.1}
              >
                <div className="bg-[#1A1A1A] rounded-2xl overflow-hidden shadow-lg h-full hover:shadow-2xl transition-all duration-300 group-hover:border-orange-500 border border-[#333333]">
                  <div className="p-8">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-700 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transform transition-transform group-hover:rotate-6 group-hover:scale-110">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-orange-500 transition">
                      {benefit.title}
                    </h3>
                    <p className="text-white">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de programas com cards com efeito hover */}
      <section id="programas" className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nossos Programas
            </h2>
            <p className="text-lg text-white">
              Escolha o programa que melhor se adapta ao seu nível de
              experiência e objetivos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Programa Iniciante",
                description:
                  "Ideal para quem está começando agora. Foco em aprender a técnica correta e criar o hábito de treinar.",
                price: "R$97",
                popular: false,
                features: [
                  "Acesso ao app",
                  "3 treinos semanais",
                  "Suporte básico",
                  "Plano alimentar simples",
                ],
              },
              {
                title: "Programa Intermediário",
                description:
                  "Para quem já treina e quer levar seus resultados para o próximo nível com treinos mais desafiadores.",
                price: "R$147",
                popular: true,
                features: [
                  "Acesso ao app Premium",
                  "5 treinos semanais",
                  "Suporte prioritário",
                  "Plano alimentar completo",
                  "Acesso a lives semanais",
                ],
              },
              {
                title: "Programa Avançado",
                description:
                  "Treinos de alta intensidade com técnicas avançadas para quem busca o máximo desempenho.",
                price: "R$197",
                popular: false,
                features: [
                  "Acesso ao app Elite",
                  "6 treinos semanais",
                  "Suporte 24/7",
                  "Plano alimentar personalizado",
                  "Acesso a todas as lives",
                  "Consultoria individual",
                ],
              },
            ].map((program, index) => (
              <motion.div
                key={index}
                className={`relative ${program.popular ? "mt-0 md:-mt-6" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <div
                  className={`bg-[#1A1A1A] rounded-2xl shadow-xl overflow-hidden h-full border ${
                    program.popular ? "border-orange-500" : "border-[#333333]"
                  }`}
                >
                  {program.popular && (
                    <div className="bg-gradient-to-r from-orange-500 to-orange-700 text-white text-center py-2 font-semibold">
                      MAIS POPULAR
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                    <p className="text-white mb-6">{program.description}</p>

                    <div className="mb-6">
                      <span className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
                        {program.price}
                      </span>
                      <span className="text-white">/mês</span>
                    </div>

                    <ul className="mb-8 space-y-3">
                      {program.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-green-500 mr-3"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-white">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <motion.button
                      className={`w-full py-3 rounded-xl font-semibold transition ${
                        program.popular
                          ? "bg-gradient-to-r from-orange-500 to-orange-700 text-white hover:shadow-lg hover:shadow-orange-500/30"
                          : "bg-[#333333] text-white hover:bg-gray-600"
                      }`}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Comprar Agora
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de depoimentos */}
      <section id="depoimentos" className="py-16 bg-[#111111]">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center mb-12">
            O que nossos alunos dizem
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-[#1A1A1A] p-6 rounded-lg shadow-md border border-[#333333]"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: 0.8,
                    delay: index * 0.2,
                  },
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-white text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-white">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção sobre o personal */}
      <section id="sobre" className="py-16 bg-[#1A1A1A]">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/3 mb-8 md:mb-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {
                type: "spring",
                duration: 0.8,
              },
            }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-700 h-80 w-full rounded-lg flex items-center justify-center">
              <p className="text-white text-center">Foto do Personal Trainer</p>
            </div>
          </motion.div>
          <motion.div
            className="md:w-2/3 md:pl-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                type: "spring",
                duration: 0.8,
                delay: 0.2,
              },
            }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Sobre o Personal Trainer
            </h2>
            <p className="text-white mb-4">
              Com mais de 10 anos de experiência na área de educação física e
              treinamento personalizado, ajudei centenas de pessoas a
              transformarem seus corpos e vidas através de programas de treino
              eficientes e personalizados.
            </p>
            <p className="text-white mb-4">
              Sou formado em Educação Física pela Universidade Federal e possuo
              especializações em treinamento funcional, hipertrofia e
              emagrecimento. Minha metodologia é baseada em evidências
              científicas, combinando técnicas modernas com estratégias
              comprovadas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-orange-500 hover:text-orange-400">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-orange-500 hover:text-orange-400">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
              <a href="#" className="text-orange-500 hover:text-orange-400">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seção de chamada para ação (newsletter) */}
      <section id="contato" className="py-16 bg-[#111111] to-black text-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Receba dicas gratuitas de treino
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Inscreva-se em nossa newsletter e receba semanalmente dicas
            exclusivas de treino, nutrição e bem-estar para potencializar seus
            resultados.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  duration: 0.6,
                },
              }}
              viewport={{ once: true }}
            >
              <motion.input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                className="bg-[#1A1A1A] border border-[#333333] text-white rounded-lg px-4 py-2 focus:border-[#FF4B00] transition-all"
                whileFocus={{ scale: 1.02 }}
                required
              />
              <motion.button
                type="submit"
                className="bg-[#FF4B00] hover:bg-[#FF5E00] text-white px-6 py-3 rounded-md font-semibold transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Inscrever
              </motion.button>
            </motion.div>
          </form>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="h-12 mb-10">
                <Image
                  src="/rn-logo.png"
                  alt="RN Logo"
                  width={140}
                  height={48}
                  className="object-contain"
                />
              </div>
              <p className="text-white">
                Transformando vidas através do treinamento personalizado de
                qualidade.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Programas</h4>
              <ul className="space-y-2 text-white">
                <li>
                  <a href="#" className="hover:text-white">
                    Programa Iniciante
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Programa Intermediário
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Programa Avançado
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Consultoria Online
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Links Úteis</h4>
              <ul className="space-y-2 text-white">
                <li>
                  <a href="#" className="hover:text-white">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-white">
                <li>contato@elitefitness.com</li>
                <li>(11) 98765-4321</li>
                <li>São Paulo, SP</li>
              </ul>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-white hover:text-white">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-white">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-white">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-white">
            <p>
              &copy; {new Date().getFullYear()} RN Personal Trainer. Todos os
              direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Modal de confirmação */}
      {showModal && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full"
            initial={{ scale: 0.5, y: 100 }}
            animate={{
              scale: 1,
              y: 0,
              transition: {
                type: "spring",
                duration: 0.5,
              },
            }}
            exit={{ scale: 0.5, y: 100 }}
          >
            <h3 className="text-xl font-bold mb-4 text-white">
              Inscrição Confirmada!
            </h3>
            <p className="text-white mb-6">
              Obrigado por se inscrever! Em breve você receberá nossas dicas de
              treino no seu e-mail.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition"
            >
              Fechar
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
