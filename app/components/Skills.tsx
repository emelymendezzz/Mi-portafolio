import React from 'react';
const skillsList = [
  "Liderazgo",
  "Uso de herramientas office",
  "Disciplina",
  "Habilidades de marketing",
  "Trabajo en equipo",
  "Emprendedurismo"
];

const Skills = () => {
  return (
    <section 
      id="habilidades" 
      className="w-full bg-gray-100 py-24 px-6 md:px-12"
    >
      <div className="container mx-auto max-w-4xl text-center">
        
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center text-black mb-12">
          Mis Habilidades
        </h2>
    
        <div className="flex flex-wrap justify-center gap-4">
          {skillsList.map((skill) => (
            <div 
              key={skill}
              className="bg-pink text-black font-medium font-sans px-5 py-2 rounded-full shadow-sm text-lg"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;