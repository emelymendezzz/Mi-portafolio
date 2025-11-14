import React from "react";
import Link from "next/link";
// --- 1. Importa los nuevos íconos ---
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-50 p-6 flex justify-between items-center bg-white shadow-sm">
      {/* --- LADO IZQUIERDO: Links de Navegación --- */}
      <nav>
        <ul className="flex space-x-6 md:space-x-8">
          <li>
            <a
              href="#sobre-mi"
              className="text-gray-700 hover:text-black font-medium transition-colors"
            >
              Sobre mi
            </a>
          </li>
          <li>
            <a
              href="#habilidades"
              className="text-gray-700 hover:text-black font-medium transition-colors"
            >
              Habilidades
            </a>
          </li>
          <li>
            <a
              href="#proyectos"
              className="text-gray-700 hover:text-black font-medium transition-colors"
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              href="#reseñas"
              className="text-gray-700 hover:text-black font-medium transition-colors"
            >
              Reseñas
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              className="text-gray-700 hover:text-black font-medium transition-colors"
            >
              Contacto
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex items-center space-x-4">
        {/* Ícono de LinkedIn */}
        <Link
          href="https://linkedin.com/in/emely-mendez-/" // [cite: 85]
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-600 transition-colors"
          aria-label="LinkedIn de Emely Mendez"
        >
          <FaLinkedinIn size={24} />
        </Link>

        <Link
          href="https://github.com/emelymendezzz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-black transition-colors"
          aria-label="GitHub de Emely Mendez"
        >
          <FaGithub size={24} />
        </Link>

        <Link
          href="https://instagram.com/ii_elyy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-pink-600 transition-colors"
          aria-label="Instagram de Emely Mendez"
        >
          <FaInstagram size={24} />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
