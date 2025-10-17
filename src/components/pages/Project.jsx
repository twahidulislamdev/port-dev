import React from 'react'
import ProjectOne from '/src/assets/projectOne.png'
import ProjectTwo from '/src/assets/projectTwo.png'
import ProjectCard from '../ProjectCard';


const Project = () => {
  const projectsData = [
    {
      id: 1,
      image: ProjectOne,
      title: "Uomo E-Commerce Website",
      date: "January 2024",
      description: "A lightweight, production-ready microservice starterkit for Go applications with built-in middleware, observability, and clean architecture patterns.",
      technologies: ["Figma", "Tailwind", "React"],
      githubLink: "https://github.com/twahidulislamdev/uomo",
      liveLink: "https://uomo-black.vercel.app/",
      className: "w-full lg:w-[49%]",
      imageHeight: "h-[200px] lg:h-[250px]"
    },
    {
      id: 2,
      image: ProjectTwo,
      title: "Creative Agency Website",
      date: "December 2023",
      description: "A modern creative agency website with responsive design and smooth animations, observability, and clean architecture patterns. ",
      technologies: ["Figma", "Tailwind", "React"],
      githubLink: "https://github.com/twahidulislamdev/creative-agency",
      liveLink: "https://twahidulislamdev.github.io/creative-agency/",
      className: "w-full lg:w-[49%]",
      imageHeight: "h-[200px] lg:h-[250px]"
    }
  ];

  return (
    <div className="mt-5 mb-20 lg:mb-0">
      <div className="flex justify-start items-center gap-x-2">
        <div className="w-4.5 h-7.5 bg-amber-400 rounded"></div>
        <h3 className='text-3xl font-semibold'>Portfolio</h3>
      </div>

      <ul className='flex justify-start items-center gap-x-10 mt-8'>
        <li className='text-base font-semibold hover:text-yellow-400'>All</li>
        <li className='text-base font-semibold hover:text-yellow-400'>Application</li>
        <li className='text-base font-semibold hover:text-yellow-400'>Web Development</li>
        <li className='text-base font-semibold hover:text-yellow-400'>Mobile Apps</li>
      </ul>

      {/* Projects part */}
      <div className="w-full mt-8 flex justify-between gap-x-3 gap-y-10 flex-wrap">
        {projectsData.map(project => (
          <ProjectCard
            key={project.id}
            className={project.className}
            projectImage={project.image}
            projectTitle={project.title}
            projectDate={project.date}
            projectDescription={project.description}
            projectTechnologies={project.technologies}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
            imageHeight={project.imageHeight}
          />
        ))}
      </div>
    </div>
  )
}

export default Project