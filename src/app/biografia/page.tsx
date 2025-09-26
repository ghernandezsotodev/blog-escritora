// src/app/biografia/page.tsx

'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function BiografiaPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 py-12 md:py-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-center text-gray-800 mb-12">
          Sobre Mí
        </h1>

        <div className="mb-12">
          <Image
            src="/images/author-bio-header.jpg"
            alt="Retrato de la autora"
            width={1200}
            height={600}
            className="rounded-lg shadow-xl object-cover w-full h-auto max-h-[400px]"
          />
        </div>

        {/* INICIO DE LOS CAMBIOS */}
        <div className="max-w-3xl mx-auto">
          {/* Ya no usamos la clase 'prose' aquí */}
          <article>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Mi Viaje con las Palabras
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nací en el extremo sur de Chile, en las ciudades de Puerto Natales y Punta Arenas, lugares donde la geografía y el clima marcaron profundamente mi sensibilidad. Actualmente resido en Talca, donde he continuado mi desarrollo personal y creativo, siempre con la escritura como un espacio de reflexión y encuentro.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Mi vínculo con la literatura se consolidó en la Sociedad de Escritores de Constitución, espacio en el que compartí experiencias y aprendí del oficio de narrar y escuchar. Desde entonces, la escritura ha sido un camino constante para expresar mi visión del mundo y las historias que me rodean.
            </p>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-800 mt-10 mb-4">
              Inicios y Primeras Obras
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A lo largo de mi trayectoria he trabajado distintos géneros, explorando tanto la narrativa como la poesía. Mis primeros textos circularon en revistas y encuentros locales, lo que me permitió conectar con lectores y escritores de diversas generaciones. Hoy mi interés sigue siendo el de aportar, a través de las palabras, a la memoria y a la identidad de las comunidades en las que he vivido.
            </p>
          </article>
        </div>
        {/* FIN DE LOS CAMBIOS */}

        <div className="mt-16">
          <h3 className="text-2xl font-serif font-bold text-center text-gray-800 mb-8">
            Momentos
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Image src="/images/gallery-1.jpg" alt="Foto de galería 1" width={400} height={400} className="rounded-lg shadow-md object-cover aspect-square" />
            <Image src="/images/gallery-2.jpg" alt="Foto de galería 2" width={400} height={400} className="rounded-lg shadow-md object-cover aspect-square" />
            <Image src="/images/gallery-3.jpg" alt="Foto de galería 3" width={400} height={400} className="rounded-lg shadow-md object-cover aspect-square" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}