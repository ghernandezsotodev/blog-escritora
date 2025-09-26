// src/components/BookCard.tsx
import Image from 'next/image';
import Link from 'next/link';

// Definimos los "props" que este componente aceptará
interface BookCardProps {
  title: string;
  imageUrl: string;
  slug: string; // La URL amigable del libro, ej: "el-eco-del-silencio"
}

export default function BookCard({ title, imageUrl, slug }: BookCardProps) {
  return (
    <Link href={`/obras/${slug}`} className="block group text-center">
      <div className="overflow-hidden rounded-lg shadow-lg group-hover:shadow-2xl transition-shadow duration-300 ease-in-out">
        <Image
          src={imageUrl}
          alt={`Portada del libro ${title}`}
          width={500} // Proporción de portada estándar
          height={750}
          className="w-full h-auto object-cover aspect-[2/3] group-hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </div>
      <h3 className="font-serif text-xl mt-4 text-gray-800 group-hover:text-black transition-colors">
        {title}
      </h3>
    </Link>
  );
}