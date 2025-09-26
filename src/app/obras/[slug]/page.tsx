// src/app/obras/[slug]/page.tsx

'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

// Datos de prueba para los libros
const allBooks = [
    {
      title: "Cuatro Perros",
      imageUrl: "/images/cover-1.jpg",
      slug: "cuatro-perros",
      description: "Esta es la descripción del libro 'Cuatro Perros'. Es una historia fascinante sobre lealtad, aventura y el vínculo inquebrantable entre un hombre y sus cuatro compañeros caninos en las vastas llanuras de la Patagonia. Un viaje emocional que explora la naturaleza de la amistad y la supervivencia."
    },
    {
      title: "La Vida Mínima",
      imageUrl: "/images/cover-2.jpg",
      slug: "la-vida-minima",
      description: "Aquí va la sinopsis de 'La Vida Mínima'. La novela sigue a una joven urbanista que, cansada del caos de la ciudad, decide mudarse a una cabaña remota. Allí, descubre que una vida simple no significa una vida fácil, y que los mayores desafíos provienen de su propio interior. Una reflexión sobre el minimalismo y la búsqueda de la felicidad."
    },
    {
      title: "El Niño de Dacca",
      imageUrl: "/images/cover-3.jpg",
      slug: "el-nino-de-dacca",
      description: "Descripción detallada de 'El Niño de Dacca'. En las bulliciosas y coloridas calles de Dacca, un niño huérfano con un talento extraordinario para el arte lucha por hacerse un nombre. Esta es una historia de superación, de la belleza encontrada en los lugares más inesperados y del poder del arte para transformar vidas."
    },
    // Añade el resto de tus libros aquí con sus descripciones
];


export default function BookDetailPage() {
  const params = useParams();
  const slug = params.slug;
  const book = allBooks.find(b => b.slug === slug);

  if (!book) {
    return (
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Libro no encontrado</h1>
        <p className="mb-8">No pudimos encontrar el libro que estás buscando.</p>
        <Link href="/obras" className="text-gray-800 hover:underline">
          Volver a todas las obras
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        <div className="flex justify-center md:justify-end">
          <Image
            src={book.imageUrl}
            alt={`Portada de ${book.title}`}
            width={500}
            height={750}
            className="rounded-lg shadow-2xl w-full max-w-sm"
          />
        </div>

        <div className="md:pr-10">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {book.title}
          </h1>
          <p className="text-gray-600 leading-relaxed whitespace-pre-line">
            {book.description}
          </p>
          
          <div className="mt-8">
            <h3 className="font-bold text-lg mb-2">Comprar ahora:</h3>
            <p className="text-gray-500">(Próximamente en librerías)</p>
          </div>

          {/* ===== INICIO DEL CAMBIO ===== */}
          <div className="mt-12">
            <Link 
              href="/obras" 
              className="inline-flex items-center gap-2 text-gray-700 hover:text-black group transition-colors"
            >
              {/* Esta es la flecha SVG */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 group-hover:-translate-x-1 transition-transform" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
              Volver a todas las obras
            </Link>
          </div>
          {/* ===== FIN DEL CAMBIO ===== */}

        </div>
      </div>
    </div>
  );
}