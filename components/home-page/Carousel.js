import React, { useState } from "react";
import Image from "next/image";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Carousel = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = props.data.length;

  const nextSlide = () => {
    setCurrentIndex((prevState) => {
      return prevState === length - 1 ? 0 : prevState + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevState) => {
      return prevState === 0 ? length - 1 : prevState - 1;
    });
  };

  if (props.data <= 0) {
    return null;
  }

  return (
    <div id="gallery" className="max-w-[1280px] mx-auto">
      <h1 className="text-2xl font-bold text-center p-4">Gallery</h1>
      <div className="relative flex justify-center p-4 ">
        {props.data.map((slide, index) => (
          <div
            key={index}
            className={
              index === currentIndex
                ? "opacity-100 ease-in duration-500 overflow-hidden rounded-lg shadow-lg shadow-slate-600"
                : "opacity-0"
            }
          >
            {" "}
            <FaArrowCircleLeft
              className="absolute top-[50%] left-[15%] text-white/70 cursor-pointer select-none z-[2]"
              size={50}
              onClick={prevSlide}
            />
            {index === currentIndex && (
              <Image
                src={slide.image}
                alt="gallery-image"
                width={1500}
                height={1000}
                priority
                // style={{ width: "auto", height: "auto" }}
              />
            )}
            <FaArrowCircleRight
              className="absolute top-[50%] right-[15%] text-white/70 cursor-pointer select-none z-[2]"
              size={50}
              onClick={nextSlide}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
