// src/app/contacto/page.tsx

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactoPage() {
  // Estado para manejar el resultado del envío del formulario
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Enviando....");
    const formData = new FormData(event.currentTarget);

    // DEBES REEMPLAZAR ESTA CLAVE CON LA TUYA DE WEB3FORMS
    formData.append("access_key", "TU_ACCESS_KEY_DE_WEB3FORMS_AQUI");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("¡Mensaje enviado con éxito!");
      (event.target as HTMLFormElement).reset(); // Resetea el formulario
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-6 py-12 md:py-16"
    >
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-center text-gray-800 mb-4">
        Hablemos
      </h1>
      <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        Si tienes alguna pregunta, propuesta o simplemente quieres saludar, no dudes en rellenar el formulario.
      </p>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 rounded-lg shadow-lg">
        {/* Columna del Formulario */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
            <input type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
            <input type="email" name="email" id="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
            <textarea name="message" id="message" rows={5} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"></textarea>
          </div>
          <div>
            <button type="submit" className="w-full inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors">
              Enviar Mensaje
            </button>
          </div>
          {result && <p className="text-center text-gray-600 mt-4">{result}</p>}
        </form>

        {/* Columna de Información Adicional */}
        <div className="flex flex-col justify-center">
            <h3 className="font-serif text-2xl font-bold text-gray-800 mb-4">Otras formas de conectar</h3>
            <p className="text-gray-600 mb-6">
                También puedes encontrarme en mis redes sociales o contactar a mi agente para asuntos profesionales.
            </p>
            <div className="space-y-4">
                <p>
                    <strong className="block text-gray-800">Email (Prensa/Profesional):</strong>
                    <a href="mailto:agente@ejemplo.com" className="text-gray-600 hover:underline">agente@ejemplo.com</a>
                </p>
                {/* Reemplaza '#' con los enlaces reales */}
                <p>
                    <strong className="block text-gray-800">Redes Sociales:</strong>
                    <a href="#" className="text-gray-600 hover:underline">Instagram</a>, <a href="#" className="text-gray-600 hover:underline">Twitter/X</a>
                </p>
            </div>
        </div>
      </div>
    </motion.div>
  );
}