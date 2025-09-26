// src/app/obras/[slug]/page.tsx

import BookDetailClient from '@/components/BookDetailClient';

export default function BookDetailPage() {
  // Esta página ahora solo renderiza el componente de cliente.
  // Toda la lógica y los datos estarán en BookDetailClient.
  return <BookDetailClient />;
}