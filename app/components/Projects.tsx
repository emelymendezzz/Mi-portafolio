import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    number: '01',
    title: 'Cofely',

    description: `Cofely fue un proyecto de diseño en Figma enfocado en una cafetería moderna. El objetivo era crear una identidad visual cálida y atractiva, que reflejara el ambiente acogedor del lugar.`,
    imageUrl: '/images/project-cofely.jpg', 
    bgColor: 'bg-black',
    isReversed: false,
  },
  {
    number: '02',
    title: 'PAYOF',
    description: `Payof es una aplicación de diseño conceptual enfocada en la organización financiera y la gestión inteligente del dinero. Desarrollada en Figma y PowerApps.`,
    imageUrl: '/images/payof.jpeg',
    bgColor: 'bg-black',
    isReversed: true,
  },
  {
    number: '03',
    title: 'JAMBO',
    // --- CORRECCIÓN AQUÍ: Usamos ` (backticks) ---
    description: `JAMBO es una aplicación web diseñada para conectar personas con profesionales del hogar de manera rápida y confiable. La plataforma permite buscar, filtrar y contactar expertos.`,
    imageUrl: '/images/project-jambo.jpg',
    bgColor: 'bg-black',
    isReversed: false,
  },
];

const Projects = () => {
  return (
    <section 
      id="proyectos" 
      className="w-full min-h-screen bg-gray-100 py-16 px-6 md:px-12"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center text-black mb-12">
          Proyectos Recientes
        </h2>
        
        <div className="flex flex-col gap-12 md:gap-16">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.number}
              number={project.number}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              bgColor={project.bgColor}
              isReversed={project.isReversed}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;