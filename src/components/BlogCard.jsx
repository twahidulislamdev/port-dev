import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({
  className,
  blogImage,
  blogTitle,
  blogDate,
  blogDescription,
  onImageClick,
  liveLink,
}) => {
  return (
    <>
      <div
        className={`w-full lg:w-[49%] h-[400px] lg:h-[410px] bg-[#19151b] rounded-lg border border-gray-800 shadow shadow-gray-800  relative ${className}`}
      >
        {/* Project Image */}
        <div className="w-full hover:cursor-pointer" onClick={onImageClick}>
          <img
            className="w-full h-[130px] lg:h-[170px] rounded-lg object-cover "
            src={blogImage}
            alt={blogTitle}
          />
        </div>

        {/* Project Content */}
        <div className="mt-3 px-3">
          {/* Project Title */}
          <Link to={liveLink}>
            <h6 className="text-xl font-medium hover:text-amber-400">
              {blogTitle}
            </h6>
          </Link>

          {/* Project Date */}
          <div className="flex justify-start items-center gap-x-3 mt-3">
            <h6 className="text-neutral-400">Blog</h6>
            <p className="text-neutral-400">{blogDate}</p>
          </div>

          {/* Project Description */}
          <p className="text-sm pt-3 text-neutral-400">{blogDescription}</p>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
