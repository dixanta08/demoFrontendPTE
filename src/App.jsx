/* eslint-disable react/prop-types */
import { useRef } from "react";
import { MdPhone, MdEmail, MdLocationPin, MdArrowDropUp } from "react-icons/md";

import Button from "./components/Button";
import Container from "./components/Button";

const IMAGES = [
  "https://i.pinimg.com/originals/c3/18/3c/c3183cc89a9bf6ed1e66fc4400af2433.jpg",
  "https://images-platform.99static.com/ZggBKLEvKgWg7erKCJqxgWKK07w=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/123/123137/attachment_123137788",
  "https://i.pinimg.com/originals/c3/18/3c/c3183cc89a9bf6ed1e66fc4400af2433.jpg",
  "https://i.ytimg.com/vi/c_vqAIOT-9U/maxresdefault.jpg",
  "https://images8.alphacoders.com/488/488169.jpg",
];

function App() {
  const topRef = useRef(null);
  const sectionsRef = useRef({});

  const handleScrollToSection = (sectionName) => {
    if (sectionsRef.current[sectionName]) {
      sectionsRef.current[sectionName].scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <div className="w-full h-screen max-h-screen flex flex-col " ref={topRef}>
        <div className="bg-blue-800 px-16 py-1">
          <ul className="flex items-center justify-between w-full ">
            <li className="text-white fw-500 flex items-center justify-center gap-2">
              <MdPhone />
              <span> 977-9812345678</span>
            </li>
            <li className="text-white fw-400 flex items-center justify-center gap-2">
              <MdEmail />
              <span> demo@mail.com</span>
            </li>
            <li className="text-white fw-500 flex items-center justify-center gap-2">
              <MdLocationPin />
              <span> demo location</span>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-between px-16 py-4">
          <div>
            <img
              className="size-28"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbnU4H-QVJPTA6PLPwv5t9JStqISL5hP7Kynx_Wm4qaA&s"
              alt="logo"
            />
          </div>
          <div>
            <ul className="flex items-center gap-8">
              <li className="hover:text-black hover:font-[600] text-black cursor-pointer py-1 font-[700]  border-b-2 border-[#ff0000]">
                HOME
              </li>
              <li
                className="hover:text-black hover:font-[600] text-gray-700 cursor-pointer py-1 font-[500]"
                onClick={() => handleScrollToSection("aboutus")}
              >
                ABOUT US
              </li>
              <li
                className="hover:text-black hover:font-[600] text-gray-700 cursor-pointer py-1 font-[500]"
                onClick={() => handleScrollToSection("destination")}
              >
                DESTINATION
              </li>
              <li
                className="hover:text-black hover:font-[600] text-gray-700 cursor-pointer py-1 font-[500]"
                onClick={() => handleScrollToSection("testPreparation")}
              >
                TEST PREPARATION
              </li>
              <li>
                <Button buttonText="Contact Us" type="primary" />
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 px-16 py-4">
          <h2 className="w-full text-center text-3xl text-blue-800 font-[600]">
            Study Abroad
          </h2>
          <p className="w-3/5 text-center text-md ">
            This Consultancy provides a wide range of services that enclose at
            every, from the identification of the universities to the
            pre-departure orientation.
          </p>
          <div className="flex w-full items-center justify-center gap-4">
            <Button buttonText="Get Directions" type="primary" />
            <Button buttonText=" Apply Now" type="outline" />
            <Button buttonText="Explore Countries" type="primary" />
          </div>
        </div>
        <div className="flex  items-end justify-between gap-8 pt-4 flex-1">
          <div className="w-full h-full ">
            <img
              className="w-full h-full object-cover object-left"
              src={IMAGES[0]}
            />
          </div>
          <div className="w-full h-3/4 bg-red-400">
            <img
              className="w-full h-full object-cover object-left"
              src={IMAGES[1]}
            />
          </div>
          <div className="w-full h-full bg-red-400">
            <img
              className="w-full h-full object-cover object-left"
              src={IMAGES[2]}
            />
          </div>
          <div className="w-full h-3/4 bg-red-400">
            <img
              className="w-full h-full object-cover object-center"
              src={IMAGES[3]}
            />
          </div>
          <div className="w-full h-full bg-red-400">
            <img className="w-full h-full object-cover " src={IMAGES[4]} />
          </div>
        </div>
      </div>
      <div
        className="w-full h-screen max-h-screen flex flex-col justify-center items-center"
        ref={(el) => (sectionsRef.current["aboutus"] = el)}
      >
        ABOUT US
      </div>
      <div
        className="w-full h-screen max-h-screen flex flex-col justify-center items-center"
        ref={(el) => (sectionsRef.current["destination"] = el)}
      >
        DESTINATION
      </div>
      <div
        className="w-full h-screen max-h-screen flex flex-col"
        ref={(el) => (sectionsRef.current["testPreparation"] = el)}
      >
        <div className="flex items-start justify-between p-36 pb-8">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-[400]">Test Preparation</p>
            <h2 className="w-full  text-4xl text-black font-[600]">
              Test Preparation
            </h2>
          </div>
          <Button buttonText="View all" type="primary" />
        </div>
        <div className="px-36 py-4 flex items-start justify-between gap-8">
          <Container
            iconurl="https://cufinder.io/_next/image?url=https%3A%2F%2Fcufinder.io%2Fimages%2Fmarketing-logos%2Fielts.org.png&w=1200&q=75"
            title="IELTS CLASS"
            description="Educational institutions in Australia hold an excellent and well-deserved. Book IELTS class today hurry up to get exclusive discounts."
          />
          <Container
            iconurl="https://cufinder.io/_next/image?url=https%3A%2F%2Fcufinder.io%2Fimages%2Fmarketing-logos%2Fielts.org.png&w=1200&q=75"
            title="IELTS BOOKING"
            description="Educational institutions in Australia hold an excellent and well-deserved. Book IELTS class today hurry up to get exclusive discounts."
          />
          <Container
            iconurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbnU4H-QVJPTA6PLPwv5t9JStqISL5hP7Kynx_Wm4qaA&s"
            title="PTE CLASS"
            description="Educational institutions in Australia hold an excellent and well-deserved. Book IELTS class today hurry up to get exclusive discounts."
          />
          <Container
            iconurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-yFLUgraL741lSYUT6H7yQszGafYvLgLm3Uk3lj112Q&s"
            title="PTE BOOKING"
            description="Educational institutions in Australia hold an excellent and well-deserved. Book IELTS class today hurry up to get exclusive discounts."
          />
        </div>
      </div>

      <button
        onClick={handleScrollToTop}
        className="fixed bottom-4 right-8 text-black bg-white  border border-black rounded-full p-1"
      >
        <MdArrowDropUp className="text-[32px]" />
      </button>
    </div>
  );
}

export default App;
