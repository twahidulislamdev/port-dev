import React from "react";
import BlogOne from "../../assets/blogOne.png";
import BlogTwo from "../../assets/blogTwo.png";
import BlogThree from "../../assets/blogThree.png";
import BlogFour from "../../assets/blogFour.png";
import BlogCard from "../BlogCard";

const Blog = () => {
  const blogData = [
    {
      id: 1,
      image: BlogOne,
      title: "Uomo E-Commerce Website",
      date: "January 2024",
      description:
        "A lightweight, production-ready microservice starterkit for Go applications with built-in middleware, observability, and clean architecture patterns.",
      technologies: ["Figma", "Tailwind", "React"],
      githubLink: "https://github.com/twahidulislamdev/uomo",
      liveLink: "https://uomo-black.vercel.app/",
      className: "w-full lg:w-[49%]",
      imageHeight: "h-[200px] lg:h-[250px]",
    },
    {
      id: 2,
      image: BlogTwo,
      title: "Creative Agency Website",
      date: "December 2023",
      description:
        "A modern creative agency website with responsive design and smooth animations, observability, and clean architecture patterns. ",
      technologies: ["Figma", "Tailwind", "React"],
      githubLink: "https://github.com/twahidulislamdev/creative-agency",
      liveLink: "https://twahidulislamdev.github.io/creative-agency/",
      className: "w-full lg:w-[49%]",
      imageHeight: "h-[200px] lg:h-[250px]",
    },
    {
      id: 3,
      image: BlogThree,
      title: "Creative Agency Website",
      date: "December 2023",
      description:
        "A modern creative agency website with responsive design and smooth animations, observability, and clean architecture patterns. ",
      technologies: ["Figma", "Tailwind", "React"],
      githubLink: "https://github.com/twahidulislamdev/creative-agency",
      liveLink: "https://twahidulislamdev.github.io/creative-agency/",
      className: "w-full lg:w-[49%]",
      imageHeight: "h-[200px] lg:h-[250px]",
    },
    {
      id: 4,
      image: BlogFour,
      title: "Creative Agency Website",
      date: "December 2023",
      description:
        "A modern creative agency website with responsive design and smooth animations, observability, and clean architecture patterns. ",
      technologies: ["Figma", "Tailwind", "React"],
      githubLink: "https://github.com/twahidulislamdev/creative-agency",
      liveLink: "https://twahidulislamdev.github.io/creative-agency/",
      className: "w-full lg:w-[49%]",
      imageHeight: "h-[200px] lg:h-[250px]",
    },
  ];
  return (
    <>
      <div className="mt-5 mb-20 lg:mb-0">
        <div className="flex justify-start items-center gap-x-2">
          <div className="w-4.5 h-7.5 bg-amber-400 rounded"></div>
          <h3 className="text-3xl font-semibold">Blog</h3>
        </div>

        {/* Projects part start */}
        <div className="w-full mt-8 flex justify-between gap-x-3 gap-y-10 flex-wrap">
          {blogData.map((blog) => (
            <BlogCard
              key={blog.id}
              className={blog.className}
              blogImage={blog.image}
              blogTitle={blog.title}
              blogDate={blog.date}
              blogDescription={blog.description}
            />
          ))}
        </div>
        {/* Projects part End  */}
      </div>
    </>
  );
};

export default Blog;
