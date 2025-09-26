// src/components/HomePageClient.tsx

'use client';

import Image from 'next/image';
import Link from 'next/link';
import BookCard from '@/components/BookCard';
import { motion } from 'framer-motion';

const featuredBooks = [
  {
    title: "Cuatro Perros",
    imageUrl: "/images/cover-1.jpg",
    slug: "cuatro-perros",
  },
  {
    title: "La Vida Mínima",
    imageUrl: "/images/cover-2.jpg",
    slug: "la-vida-minima",
  },
  {
    title: "El Niño de Dacca",
    imageUrl: "/images/cover-3.jpg",
    slug: "el-nino-de-dacca",
  },
];

const sectionVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

export default function HomePageClient() {
  return (
    <>
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center gap-12">
            
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="h-[300px] w-[300px] md:h-[350px] md:w-[350px] rounded-full overflow-hidden shadow-2xl">
                <Image
                  src="/images/author-portrait.jpg"
                  alt="Retrato de la Escritora"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
            
            <div className="w-full md:w-2/3 text-center md:text-left">
              <div className="mb-8">
                <Image
                  src="/images/logo-nombre.png"
                  alt="Logo de Maria Esperanza Gallegos"
                  width={400}
                  height={200}
                  className="mx-auto md:mx-0"
                  priority
                />
              </div>

              {/* ===== INICIO DE CAMBIOS EN EL BOTÓN PRINCIPAL ===== */}
              <Link
                href="/obras"
                className="inline-block bg-gray-800 text-white font-bold py-3 px-8 rounded-md text-lg shadow-md hover:bg-gray-700 hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300 ease-in-out"
              >
                Explorar mis obras
              </Link>
              {/* ===== FIN DE CAMBIOS EN EL BOTÓN PRINCIPAL ===== */}

            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-gray-800 mb-12">
              Obras Destacadas
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {featuredBooks.map((book) => (
                <BookCard
                  key={book.slug}
                  title={book.title}
                  imageUrl={book.imageUrl}
                  slug={book.slug}
                />
              ))}
            </div>
          </div>
        </section>
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2 md:pr-10 text-center md:text-left">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Un Vistazo a la Autora
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
                  Nací en el extremo sur de Chile, en las ciudades de Puerto Natales...
                </p>

                {/* ===== INICIO DE CAMBIOS EN EL BOTÓN SECUNDARIO ===== */}
                <Link
                  href="/biografia"
                  className="inline-block border-2 border-gray-800 text-gray-800 font-bold py-3 px-8 rounded-md hover:bg-gray-800 hover:text-white hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300 ease-in-out"
                >
                  Leer mi historia
                </Link>
                {/* ===== FIN DE CAMBIOS EN EL BOTÓN SECUNDARIO ===== */}

              </div>
              <div className="w-full md:w-1/2 mt-8 md:mt-0">
                <Image
                  src="/images/author-bio.jpg"
                  alt="La autora en su espacio de trabajo"
                  width={600}
                  height={450}
                  className="rounded-lg shadow-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
}