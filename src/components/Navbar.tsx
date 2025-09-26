// src/components/Navbar.tsx

'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const getLinkClass = (path: string) => {
    const baseClasses = "text-gray-700 hover:text-black transition-colors";
    const activeClasses = "font-semibold text-black";
    return pathname === path ? `${baseClasses} ${activeClasses}` : baseClasses;
  };

  return (
    <>
      <nav className={`
        sticky top-0 z-40 transition-all duration-300 ease-in-out
        ${hasScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}
      `}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <Image
              src="/images/logo-nombre.png"
              alt="Logo de Maria Esperanza Gallegos"
              // ===== INICIO DEL CAMBIO =====
              width={200}  // Ancho escalado
              height={38}   // Alto escalado para mantener la proporción exacta
              // ===== FIN DEL CAMBIO =====
              priority
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8 text-lg">
            <Link href="/obras" className={getLinkClass('/obras')}>Obras</Link>
            <Link href="/biografia" className={getLinkClass('/biografia')}>Biografía</Link>
            <Link href="/blog" className={getLinkClass('/blog')}>Blog</Link>
            <Link href="/contacto" className={getLinkClass('/contacto')}>Contacto</Link>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              aria-label="Abrir menú"
              className={`transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
            >
              <svg className="h-8 w-8 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-gray-900/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-lg p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6" aria-label="Cerrar menú">
                <svg className="h-8 w-8 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <nav className="mt-16 flex flex-col space-y-8">
                <Link href="/obras" onClick={() => setIsMenuOpen(false)} className="text-3xl font-semibold text-gray-800 hover:text-black">Obras</Link>
                <Link href="/biografia" onClick={() => setIsMenuOpen(false)} className="text-3xl font-semibold text-gray-800 hover:text-black">Biografía</Link>
                <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="text-3xl font-semibold text-gray-800 hover:text-black">Blog</Link>
                <Link href="/contacto" onClick={() => setIsMenuOpen(false)} className="text-3xl font-semibold text-gray-800 hover:text-black">Contacto</Link>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}