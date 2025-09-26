// src/app/obras/page.tsx

'use client'; // Necesitamos esto para usar Framer Motion

import BookCard from "@/components/BookCard";
import { motion } from "framer-motion";

// Usaremos datos de prueba más extensos. En el futuro, esto vendrá del CMS.
const allBooks = [
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
  {
    title: "Helmut",
    imageUrl: "/images/cover-4.jpg",
    slug: "helmut",
  },
  {
    title: "Las Últimas Abejas",
    imageUrl: "/images/cover-5.jpg",
    slug: "las-ultimas-abejas",
  },
  {
    title: "Hermano Perro Hermano Gato",
    imageUrl: "/images/cover-6.jpg",
    slug: "hermano-perro-hermano-gato",
  },

];

// Reutilizamos las mismas variantes de animación que en la home
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Un retraso más corto para la galería
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function ObrasPage() {
  return (
    <div className="container mx-auto px-6 py-12 md:py-16">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-center text-gray-800 mb-12">
        Mis Obras
      </h1>
      
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {allBooks.map((book) => (
          <motion.div key={book.slug} variants={itemVariants}>
            <BookCard
              title={book.title}
              imageUrl={book.imageUrl}
              slug={book.slug}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}