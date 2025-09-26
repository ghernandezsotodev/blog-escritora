// src/app/blog/[slug]/page.tsx

'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Movemos los datos aquí y añadimos el contenido completo del post.
const allPosts = [
  {
    slug: 'mi-primer-post',
    title: 'Reflexiones sobre el Proceso Creativo',
    publishDate: '25 de Septiembre, 2025',
    excerpt: 'La escritura es un viaje solitario, pero también un acto de profunda conexión. En esta entrada, exploro las rutinas, los bloqueos y las pequeñas alegrías que conforman el día a día de un escritor...',
    content: `La página en blanco nunca es realmente blanca. Está llena de las voces de los que vinieron antes, de las historias que anhelamos contar y del peso de nuestras propias expectativas. Escribir es, en esencia, un acto de valentía: la valentía de plasmar una idea frágil en algo concreto, de darle forma a un sentimiento y de compartirlo, esperando que resuene en alguien más.\nCada día, el ritual es el mismo. El café, el silencio de la mañana, la silla que conoce el contorno de mis dudas. A veces las palabras fluyen como un río, y otras veces hay que arrancarlas de la tierra seca, una por una. Pero en ambos casos, el acto de escribir es un acto de fe. Fe en que la historia merece ser contada y en que nosotros somos los indicados para hacerlo.`
  },
  {
    slug: 'un-viaje-al-sur',
    title: 'Un Viaje al Sur: Inspiración en la Patagonia',
    publishDate: '15 de Septiembre, 2025',
    excerpt: 'Volver a los paisajes de mi niñez en Puerto Natales siempre recarga mi alma y mi pluma. El viento, el frío y la inmensidad de la Patagonia son personajes silenciosos en muchas de mis obras...',
    content: `No se puede nacer en la Patagonia sin que el paisaje te marque el alma. El viento no es solo aire en movimiento; es una presencia constante, un narrador que susurra historias de navegantes y pioneros. Las montañas no son solo rocas; son gigantes dormidos que guardan secretos milenarios.\nCuando escribo sobre el sur, no necesito inventar la melancolía o la resiliencia; están impregnadas en el aire, en el color del cielo antes de una tormenta. Es un lugar donde la soledad no es vacía, sino llena de significado. Volver allí es volver a la fuente, recordar por qué empecé a escribir: para intentar capturar una fracción de esa belleza indomable en palabras.`
  },
];


export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug;
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Entrada no encontrada</h1>
        <Link href="/blog" className="text-gray-800 hover:underline">
          Volver al blog
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-6 py-12 md:py-16"
    >
      <article className="max-w-3xl mx-auto">
        {/* Encabezado del Artículo */}
        <header className="mb-8 border-b pb-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-base text-gray-500">
            Publicado el {post.publishDate}
          </p>
        </header>

        {/* Contenido del Artículo */}
        <div className="space-y-6">
          {post.content.split('\\n').map((paragraph, index) => (
            <p key={index} className="text-lg text-gray-800 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Pie del Artículo */}
        <footer className="mt-12 pt-8 border-t">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-gray-700 hover:text-black group transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:-translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Volver al blog
            </Link>
        </footer>
      </article>
    </motion.div>
  );
}