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
      title: "Top 3 Reasons to Buy a Used BMW in Portland",
      date: "January 2024",
      description:
        "Have you been thinking about buying a BMW? You could run out and buy a brand new one right now. But that would likely cost you a fortune and make it difficult for you to actually enjoy your new ride. ",
      liveLink: "https://luxuryautoz.com/top-3-advantages-buying-used-bmw/",
    },
    {
      id: 2,
      image: BlogTwo,
      title: "Used Range Rover Maintenance Costs Explained ",
      date: "December 2023",
      description:
        "The time has never been better for shoppers looking to get a great deal on cars at least three years old. Edmunds, the popular automotive website, conducted research revealing that  ",
      liveLink:
        "https://luxuryautoz.com/average-range-rover-maintenance-cost-annually/",
    },
    {
      id: 3,
      image: BlogThree,
      title: "Why an Audi in Portland is the Right Move: 5 Key Reasons",
      date: "December 2023",
      description:
        "Audis are well-known for their luxury status, gorgeous designs, and dependability. It’s no wonder Audis are one of the most popular car brands in the United States with their sales growing 4% in just one year and over 1.9 million cars delivered in 2017 alone.",
      liveLink:
        "https://luxuryautoz.com/5-reasons-why-you-should-buy-used-audi-portland/",
    },
    {
      id: 4,
      image: BlogFour,
      title: "Which Used Mercedes-Benz Model Should You Buy?",
      date: "December 2023",
      description:
        "If you’re looking to become one of the two-plus million people worldwide to buy a Mercedes-Benz this year, you’re about to be in an elite class of car owners. Mercedes-Benz is synonymous with ultimate luxury.",
      liveLink: "https://luxuryautoz.com/what-best-used-mercedes-buy/",
    },
  ];
  const handleImageClick = (liveLink) => {
    window.open(liveLink, "_blank");
  };
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
              liveLink={blog.liveLink}
              onImageClick={() => handleImageClick(blog.liveLink)}
            />
          ))}
        </div>
        {/* Projects part End  */}
      </div>
    </>
  );
};

export default Blog;
