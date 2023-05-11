import React from "react";

const BlogCard = ({ image, date, title, desc }) => {
  return (
    <div className="p-5   rounded-tl-[80px] rounded-br-[80px] bg-white">
      <img src={image} alt={title} />
      <p className="font-poppins font-normal text-black3 my-1 md:mt-[18px] md:mb-[10px]">
        {date}
      </p>
      <h3 className="font-poppins font-semibold text-[25px] ">{title}</h3>
      <p className="font-poppins font-normal text-justify  text-black3 mt-[5px]  md:mb-[38px]">
        {desc}
      </p>
    </div>
  );
};

export default BlogCard;
