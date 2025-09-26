// src/components/Footer.tsx

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-16">
      <div className="container mx-auto px-6 py-12">
        
        {/* Contenedor principal del footer con 3 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Columna 1: Nombre y descripción */}
          <div className="md:col-span-1">
            <Link href="/" className="font-serif text-2xl font-bold text-white">
              María Esperanza Gallegos
            </Link>
            <p className="mt-4 text-sm">
              Escritora de historias que exploran el alma humana.
            </p>
          </div>

          {/* Columna 2: Enlaces de Navegación */}
          <div>
            <h4 className="font-semibold text-white tracking-wider uppercase">Navegación</h4>
            <ul className="mt-4 space-y-2">
              <li><Link href="/obras" className="hover:text-white transition-colors">Obras</Link></li>
              <li><Link href="/biografia" className="hover:text-white transition-colors">Biografía</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Columna 3: Redes Sociales */}
          <div>
            <h4 className="font-semibold text-white tracking-wider uppercase">Sígueme</h4>
            <div className="mt-4 flex space-x-4">
              
              <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c-4.04.002-4.55.018-6.148.09-1.597.072-2.684.34-3.638.744a4.926 4.926 0 00-1.8 1.8c-.404.953-.672 2.04-.744 3.638-.072 1.598-.088 2.108-.09 6.148s.018 4.55.09 6.148c.072 1.597.34 2.684.744 3.638.48.974 1.12 1.624 1.8 1.8.953.404 2.04.672 3.638.744 1.598.072 2.108.088 6.148.09s4.55-.018 6.148-.09c1.597-.072 2.684-.34 3.638-.744.974-.48 1.624-1.12 1.8-1.8.404-.953.672-2.04.744-3.638.072-1.598.088-2.108.09-6.148s-.018-4.55-.09-6.148c-.072-1.597-.34-2.684-.744-3.638a4.926 4.926 0 00-1.8-1.8c-.953-.404-2.04-.672-3.638-.744C16.865 2.018 16.355 2 12.315 2zM8 12a4 4 0 118 0 4 4 0 01-8 0zm11-4a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria y copyright */}
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm">
          <p>
            © {new Date().getFullYear()} María Esperanza Gallegos. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}