/* eslint-disable react/prop-types */

import { MdArrowForward } from "react-icons/md";

const Button = ({ buttonText, type }) => {
  return (
    <button
      className={`px-8 py-2 flex items-center justify-center font-[500] border  border-[#ff0000] ${
        type === "primary"
          ? "text-white  bg-[#ff0000]" //primary
          : type === "outline"
          ? "text-[#ff0000]  bg-white " //outline
          : "text-white  bg-[#ff0000]" // default i.e. primary
      }  rounded-lg  `}
    >
      <span>{buttonText}</span> <MdArrowForward />
    </button>
  );
};

export default Button;
