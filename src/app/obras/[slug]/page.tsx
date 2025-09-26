// src/app/obras/[slug]/page.tsx

import type { Metadata } from 'next';
import BookDetailClient from '@/components/BookDetailClient';

// El array de datos ahora vive permanentemente en este archivo de servidor
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
];

// La función de metadata puede vivir aquí sin problemas
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const book = allBooks.find(b => b.slug === params.slug);
  if (!book) {
    return { title: "Libro no encontrado" };
  }
  return {
    title: `${book.title} | María Esperanza Gallegos`,
    description: book.description.substring(0, 160),
  };
}

// Este es ahora un Componente de Servidor. No tiene 'use client'.
export default function BookDetailPage({ params }: { params: { slug: string } }) {
  // Busca los datos del libro en el servidor
  const book = allBooks.find(b => b.slug === params.slug);

  // Pasa los datos al componente de cliente para que los renderice
  return <BookDetailClient book={book} />;
}