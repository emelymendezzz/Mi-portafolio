import React from 'react';
// Importamos los mismos íconos que usamos en el Navbar
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import Link from 'next/link'; // Usaremos Link para los enlaces externos

const Contact = () => {
  return (
    <footer 
      id="contacto" 
      // Un fondo oscuro es común para los footers y hace buen contraste
      className="w-full bg-gray-900 text-white py-16 px-6 md:px-12"
    >
      <div className="container mx-auto max-w-4xl flex flex-col items-center text-center">
        
        {/* 1. Título */}
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
          ¡CONTÁCTAME Y TRABAJEMOS JUNTOS!
        </h2>

        {/* 2. Email */}
        <a 
          href="mailto:emxlx13@gmail.com" // Esto abre el cliente de email
          className="font-sans text-lg md:text-xl text-gray-300 hover:text-white hover:underline transition-all mb-8"
        >
          emxlx13@gmail.com
        </a>

        {/* 3. Iconos de Redes Sociales */}
        <div className="flex items-center space-x-6">
          {/* LinkedIn */}
          <Link
            href="https://linkedin.com/in/emely-mendez-/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="LinkedIn de Emely Mendez"
          >
            <FaLinkedinIn size={28} />
          </Link>

          {/* GitHub */}
          <Link
            href="https://github.com/emelymendezzz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="GitHub de Emely Mendez"
          >
            <FaGithub size={28} />
          </Link>

          {/* Instagram */}
          <Link
            href="https://instagram.com/ii_elyy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Instagram de Emely Mendez"
          >
            <FaInstagram size={28} />
          </Link>
        </div>

      </div>
    </footer>
  );
};

export default Contact;