import React from 'react';
import Image from 'next/image';

// Definimos los props que recibirá la tarjeta
type ReviewProps = {
  quote: string;
  name: string;
  title: string;
  imageUrl: string;
};

const ReviewCard: React.FC<ReviewProps> = ({ quote, name, title, imageUrl }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full flex flex-col items-center text-center">
      {/* 1. Imagen de Perfil */}
      <Image
        src={imageUrl}
        alt={`Foto de perfil de ${name}`}
        width={100}
        height={100}
        className="rounded-full object-cover w-24 h-24 -mt-16 mb-4 border-4 border-white shadow-md"
        // '-mt-16' saca la imagen de la tarjeta, un efecto "pop-out"
      />

      {/* 2. Cita (Reseña) */}
      <blockquote className="font-sans text-base text-gray-700 italic mb-6">
        "{quote}"
      </blockquote>

      {/* 3. Nombre y Título */}
      <p className="font-serif text-lg font-bold text-black">{name}</p>
      <p className="font-sans text-sm text-gray-500">{title}</p>
    </div>
  );
};

export default ReviewCard;