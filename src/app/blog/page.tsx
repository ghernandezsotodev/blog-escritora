// src/app/blog/page.tsx

'use client';

import BlogPostCard from "@/components/BlogPostCard";
import { motion } from "framer-motion";

// Datos de prueba para las entradas del blog
const allPosts = [
  {
    slug: 'mi-primer-post',
    title: 'Reflexiones sobre el Proceso Creativo',
    publishDate: '25 de Septiembre, 2025',
    excerpt: 'La escritura es un viaje solitario, pero también un acto de profunda conexión. En esta entrada, exploro las rutinas, los bloqueos y las pequeñas alegrías que conforman el día a día de un escritor...',
    content: 'Contenido completo del primer post...' // Lo usaremos después
  },
  {
    slug: 'un-viaje-al-sur',
    title: 'Un Viaje al Sur: Inspiración en la Patagonia',
    publishDate: '15 de Septiembre, 2025',
    excerpt: 'Volver a los paisajes de mi niñez en Puerto Natales siempre recarga mi alma y mi pluma. El viento, el frío y la inmensidad de la Patagonia son personajes silenciosos en muchas de mis obras...',
    content: 'Contenido completo del segundo post...' // Lo usaremos después
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export default function BlogPage() {
  return (
    <div className="container mx-auto px-6 py-12 md:py-16">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-center text-gray-800 mb-12">
        Blog
      </h1>
      
      <motion.div
        className="max-w-3xl mx-auto space-y-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {allPosts.map((post) => (
          <motion.div key={post.slug} variants={itemVariants}>
            <BlogPostCard
              title={post.title}
              publishDate={post.publishDate}
              excerpt={post.excerpt}
              slug={post.slug}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}