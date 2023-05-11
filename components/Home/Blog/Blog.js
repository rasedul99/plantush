import Button from "@components/Shared/Button";
import React from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div className="w-full  h-[881px] bg-[url('/assets/images/blog/bgblog.png')] bg-no-repeat bg-center bg-cover">
      <div className="max-w-7xl mx-2 md:mx-auto pt-10 pb-10  md:pt-[130px]  md:pb-[130px] flex justify-center items-end gap-x-[30px]">
        <div className="md:px-[21px] py-[103px]  rounded-tl-[80px] rounded-br-[80px] bg-primary">
          <div className="flex  items-center">
            <img src="/assets/images/aboutuslogo.png" />
            <p className="text-secondary font-poppins font-semibold text-xl">
              From Our Blog
            </p>
          </div>
          <h3 className="text-white font-oswald font-bold text-[40px]">
            Latest News & Updates
          </h3>
          <p className="font-poppins font-normal px-1 my-10 text-justify text-black6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
          <button className="bg-white text-primary py-4 px-9 rounded-tl-[20px] rounded-br-[20px]  font-poppins font-medium text-lg">
            View All
          </button>
        </div>

        <BlogCard
          image="/assets/images/blog/blog.png"
          date="24 jan 2023"
          title="Home Garden Plan "
          desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"
        />
        <BlogCard
          image="/assets/images/blog/blog.png"
          date="24 jan 2023"
          title="Gardening Tips "
          desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"
        />
      </div>
    </div>
  );
};

export default Blog;
