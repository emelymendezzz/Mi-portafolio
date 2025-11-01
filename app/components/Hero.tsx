import React from 'react';
import Image from 'next/image'; // --- 1. Importa el componente Image ---

const Hero = () => {
  return (
    <section 
      id="sobre-mi" 
      className="w-full min-h-screen flex items-center pt-32 pb-16 px-6 md:px-12 bg-pink" 
    >
      <div className="container mx-auto max-w-6xl">
        {/* Mantenemos el grid de 2 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* --- Columna Izquierda: TODO el Texto --- */}
          {/* Agrupamos todo el contenido de texto en la primera columna */}
          <div className="flex flex-col justify-center text-left">
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4">
              EMELY MENDEZ.
            </h1>
            <h2 className="font-sans text-xl md:text-2xl text-gray-100 mb-8">
              Design. Marketing. Creativity
            </h2>
            
            <blockquote className="font-serif text-2xl md:text-3xl font-medium text-white italic border-l-4 border-white pl-4 mb-6">
              "Creative marketer & visual storyteller"
            </blockquote>
            <p className="font-sans text-base md:text-lg text-gray-50 leading-relaxed mb-8">
              Apasionada por el diseño y el marketing. Disfruto creando ideas visuales que conectan y comunican de manera auténtica.
            </p>

            <a 
              href="#proyectos"
              className="px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-200 transition-colors self-start"
            >
              Más sobre mi
            </a>
          </div>

          {/* --- Columna Derecha: Imagen --- */}
          {/* 2. Añadimos el bloque de la imagen */}
          <div className="flex items-center justify-center order-first md:order-last">
            {/* 'order-first' la pone arriba en móvil, 'md:order-last' la pone a la derecha en desktop */}
            <Image
              src="/images/emely-perfil.jpg" // 3. Esta es la ruta a tu foto
              alt="Foto de perfil de Emely Mendez"
              width={400} // Define el tamaño base
              height={400} // Define el tamaño base
              className="rounded-full object-cover w-80 h-80 md:w-96 md:h-96 shadow-lg"
              priority // Carga la imagen más rápido, al ser importante (LCP)
            />
            {/*
              - 'rounded-full': Hace la imagen circular.
              - 'object-cover': Evita que la imagen se distorsione.
              - 'w-80 h-80 md:w-96 md:h-96': Controla el tamaño responsivo.
              - 'shadow-lg': Le da una sombra sutil.
            */}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;