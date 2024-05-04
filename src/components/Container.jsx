/* eslint-disable react/prop-types */
import { MdArrowForward } from "react-icons/md";

const Container = ({ iconurl, title, description }) => {
  return (
    <div className="rounded-lg shadow-md hover:shadow-lg cursor-pointer border border-gray-200 hover:border-gray-300 p-6 py-8 flex flex-col gap-6">
      <div className="w-full flex justify-center ">
        <img src={iconurl} className="size-12"></img>
      </div>
      <div className="">
        <h4 className="text-center text-lg uppercase font-[600]">{title}</h4>
        <p className="text-center">{description}</p>
      </div>
      <div className="flex items-center justify-center text-blue-900 fw-[600]">
        <span>Learn More</span>
        <MdArrowForward />
      </div>
    </div>
  );
};

export default Container;
