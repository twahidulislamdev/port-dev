import React from "react";
import ProjectOne from "/src/assets/projectOne.png";
import ProjectTwo from "/src/assets/projectTwo.png";
import ProjectThree from "../../assets/projectThree.png";
import ProjectCard from "../ProjectCard";

const Project = () => {
  const projectsData = [
    {
      id: 1,
      image: ProjectOne,
      title: "Uomo Clothing E-Commerce Website",
      date: "July 2025",
      description:
        "A lightweight, production-ready microservice starterkit for Go applications with built-in middleware, observability, and clean architecture patterns.",
      technologies: ["Figma", "Tailwind", "React", "Redux"],
      githubLink: "https://github.com/twahidulislamdev/uomo",
      liveLink: "https://uomo-black.vercel.app/",
      className: "w-full lg:w-[49%]",
      imageHeight: "h-[200px] lg:h-[250px]",
    },
    {
      id: 2,
      image: ProjectTwo,
      title: "Car Rental Website",
      date: "September 2025",
      description:
        "A comprehensive car rental platform with real-time vehicle availability, booking management, and seamless payment integration for a modern car rental experience.",
      technologies: ["Figma", "Tailwind", "React", "Redux"],
      githubLink: "https://github.com/twahidulislamdev/go-ride",
      liveLink: "https://go-ride-xi.vercel.app/",
      className: "w-full lg:w-[49%]",
      imageHeight: "h-[200px] lg:h-[250px]",
    },
    {
      id: 3,
      image: ProjectThree,
      title: "Prime Store E-commarce Website",
      date: "December 2023",
      description:
        "A modern e-commerce platform with advanced product filtering, secure payment integration, and responsive design for optimal shopping experience across all devices.",
      technologies: ["Figma", "Tailwind", "React", "Redux"],
      githubLink: "https://github.com/twahidulislamdev/prime-store",
      liveLink: "https://prime-store-one.vercel.app/",
      className: "w-full lg:w-[49%]",
      imageHeight: "h-[200px] lg:h-[250px]",
    },
  ];
  // Function to handle image click and open live project
  const handleImageClick = (liveLink) => {
    window.open(liveLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="mt-5 mb-20 lg:mb-0">
      <div className="flex justify-start items-center gap-x-2">
        <div className="w-4.5 h-7.5 bg-amber-400 rounded"></div>
        <h3 className="text-3xl font-semibold">Projects</h3>
      </div>

      <ul className="flex justify-between lg:justify-start items-center gap-5 lg:gap-x-10 mt-8 flex-wrap">
        <li className="text-base font-semibold hover:text-yellow-400">All</li>
        <li className="text-base font-semibold hover:text-yellow-400">
          Frontend{" "}
        </li>
        <li className="text-base font-semibold hover:text-yellow-400">
          Web Development
        </li>
        <li className="text-base font-semibold hover:text-yellow-400">
          Mobile Apps
        </li>
      </ul>

      {/* Projects part start */}
      <div className="w-full mt-8 flex justify-between gap-x-3 gap-y-10 flex-wrap">
        {projectsData.map((project) => (
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
            onImageClick={() => handleImageClick(project.liveLink)}
          />
        ))}
      </div>
      {/* Projects part End  */}
    </div>
  );
};

export default Project;
