import React from 'react';
import Image from 'next/image';

// 1. Definimos la 'forma' de los datos que espera el componente
type ProjectProps = {
  number: string;
  title: string;
  description: string;
  imageUrl: string;
  bgColor: string; // El color de fondo que definimos en tailwind.config.ts
  isReversed?: boolean; // ¿La imagen va a la derecha?
};

const ProjectCard: React.FC<ProjectProps> = ({
  number,
  title,
  description,
  imageUrl,
  bgColor,
  isReversed = false, // Por defecto, la imagen va a la izquierda
}) => {
  // 2. Clases base para el layout
  const textOrder = isReversed ? 'md:order-last' : '';
  const imageOrder = isReversed ? 'md:order-first' : '';

  return (
    <div className={`w-full grid grid-cols-1 md:grid-cols-2 shadow-xl rounded-lg overflow-hidden ${bgColor}`}>
      {/* --- COLUMNA DE IMAGEN --- */}
      <div className={`relative w-full min-h-[300px] md:min-h-[450px] ${imageOrder}`}>
        <Image
          src={imageUrl}
          alt={`Mockup del proyecto ${title}`}
          layout="fill"
          objectFit="cover" // Esto hace que la imagen cubra el div
        />
      </div>

      {/* --- COLUMNA DE TEXTO --- */}
      <div className={`p-8 md:p-12 flex flex-col justify-center text-white ${textOrder}`}>
        <span className="font-sans text-lg font-light opacity-80 mb-2">{number}</span>
        <h3 className="font-serif text-4xl md:text-5xl font-bold mb-4">{title}</h3>
        <p className="font-sans text-base leading-relaxed opacity-90">
          {description}
        </p>
        {/* Aquí podrías añadir botones de "Ver más" o "Ver demo" en el futuro */}
      </div>
    </div>
  );
};

export default ProjectCard;