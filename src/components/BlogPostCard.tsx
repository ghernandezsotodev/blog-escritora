// src/components/BlogPostCard.tsx

import Link from "next/link";

interface BlogPostCardProps {
  title: string;
  publishDate: string;
  excerpt: string;
  slug: string;
}

export default function BlogPostCard({ title, publishDate, excerpt, slug }: BlogPostCardProps) {
  return (
    <article className="border-b border-gray-200 pb-8">
      <header>
        <h2 className="text-2xl md:text-3xl font-serif font-bold leading-tight mb-2">
          <Link href={`/blog/${slug}`} className="hover:text-gray-600 transition-colors duration-200">
            {title}
          </Link>
        </h2>
        <p className="text-sm text-gray-500 mb-4">{publishDate}</p>
      </header>
      <div className="text-gray-700 leading-relaxed">
        {excerpt}
      </div>
      <footer className="mt-4">
        <Link href={`/blog/${slug}`} className="font-semibold text-gray-800 hover:text-black transition-colors duration-200">
          Leer más &rarr;
        </Link>
      </footer>
    </article>
  );
}