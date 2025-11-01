import React from 'react';
import ReviewCard from './ReviewCard'; // 1. Importa el componente

// 2. Datos de las reseñas tomados de tu PDF
const reviewsData = [
  {
    quote: "Ha visto el trabajo de Massery en varios proyectos y siempre quedo impresionado por su creatividad y atención al detalle. Su estilo es profesional y transmite confianza en cada diseño.",
    name: "Jimmy Mendez",
    title: "Sr. Web Developer",
    imageUrl: "/images/review-jimmy.jpg",
  },
  {
    quote: "Emely combina la creatividad y técnica de manera impecable. Cada proyecto que comparte muestra originalidad y un enfoque profesional que inspira confianza en quienes lo ven.",
    name: "Erick Urquilla",
    title: "Physicist and Astronomer, Knoxville Co-founder InspiraSTEM",
    imageUrl: "/images/review-erick.jpg",
  },
];

const Reviews = () => {
  return (
    <section 
      id="reseñas" 
      // 3. Usamos el nuevo color de fondo
      className="w-full min-h-screen bg-review-pink py-24 px-6 md:px-12"
      // 'py-24' da espacio (padding) arriba y abajo
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center text-black mb-24">
          Reseñas
        </h2>
        
        {/* 4. Contenedor de las tarjetas */}
        <div className="flex flex-col md:flex-row gap-24 md:gap-12 justify-center items-center">
          {/* 'gap-24' en móvil (para que haya espacio por el -mt-16)
            'md:gap-12' en desktop
          */}
          {reviewsData.map((review) => (
            <ReviewCard
              key={review.name}
              quote={review.quote}
              name={review.name}
              title={review.title}
              imageUrl={review.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;