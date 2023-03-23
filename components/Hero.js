import Link from "next/link";
import React from "react";

const Hero = (props) => {
  const { heading, message } = props.content;

  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
      <div className="p-5 text-white z-[2] mt-[-10rem]">
        <h2 className="text-5xl font-bold font-mono">{heading}</h2>
        <p className="py-5 text-xl">{message}</p>
        {props.book && (
          <Link
            href="/work"
            className="px-8 py-2 border rounded hover:bg-white hover:text-black  hover:scale-125 transition ease-in duration-300"
          >
            Book
          </Link>
        )}
      </div>
    </div>
  );
};

export default Hero;
