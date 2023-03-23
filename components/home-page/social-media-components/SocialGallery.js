import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import pic1 from "../../../public/images/pic1.jpg";
import pic2 from "../../../public/images/pic2.jpg";
import pic3 from "../../../public/images/pic3.jpg";
import pic4 from "../../../public/images/pic4.jpg";
import pic5 from "../../../public/images/pic5.jpg";
import pic6 from "../../../public/images/pic6.jpg";

const SocialGallery = () => {
  return (
    <div className="w-max mb-36 mx-auto">
      <div
        className="p-6 grid justify-center gap-4
       sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        <div className="relative">
          <Link href="https://www.instagram.com/p/BwZDs_iH2rG/?utm_source=ig_web_copy_link">
            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center hover:bg-black/50 group">
              <p className="text-gray-300 hidden group-hover:block">
                <FaInstagram size={30} className="z-10" />
              </p>
            </div>
            <Image
              src={pic2}
              width={320}
              height={200}
              alt="..."
              style={{ width: "auto", height: "auto" }}
            />
          </Link>
        </div>
        <div className="relative">
          <Link href="https://www.instagram.com/p/Bv8tkCGhF4f/?utm_source=ig_web_copy_link">
            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center hover:bg-black/50 group">
              <p className="text-gray-300 hidden group-hover:block">
                <FaInstagram size={30} className="z-10" />
              </p>
            </div>
            <Image
              src={pic1}
              width={320}
              height={200}
              alt="..."
              style={{ width: "auto", height: "auto" }}
            />
          </Link>
        </div>
        <div className="relative">
          <Link href="https://www.instagram.com/p/B05-Q5aHspf/?utm_source=ig_web_copy_link">
            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center hover:bg-black/50 group">
              <p className="text-gray-300 hidden group-hover:block">
                <FaInstagram size={30} className="z-10" />
              </p>
            </div>
            <Image
              src={pic3}
              width={320}
              height={200}
              alt="..."
              style={{ width: "auto", height: "auto" }}
            />
          </Link>
        </div>
        <div className="relative">
          <Link href="https://www.instagram.com/p/BwOmtmSnGeU/?utm_source=ig_web_copy_link">
            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center hover:bg-black/50 group">
              <p className="text-gray-300 hidden group-hover:block">
                <FaInstagram size={30} className="z-10" />
              </p>
            </div>
            <Image
              src={pic4}
              width={320}
              height={200}
              alt="..."
              style={{ width: "auto", height: "auto" }}
            />
          </Link>
        </div>
        <div className="relative">
          <Link href="https://www.instagram.com/p/BwJLcX6BzLy/?utm_source=ig_web_copy_link">
            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center hover:bg-black/50 group">
              <p className="text-gray-300 hidden group-hover:block">
                <FaInstagram size={30} className="z-10" />
              </p>
            </div>
            <Image
              src={pic6}
              width={320}
              height={200}
              alt="..."
              style={{ width: "auto", height: "auto" }}
            />
          </Link>
        </div>
        <div className="relative">
          <Link href="https://www.instagram.com/p/BwJgFSAhlqb/?utm_source=ig_web_copy_link">
            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center hover:bg-black/50 group">
              <p className="text-gray-300 hidden group-hover:block">
                <FaInstagram size={30} className="z-10" />
              </p>
            </div>
            <Image
              src={pic5}
              width={320}
              height={200}
              alt="..."
              style={{ width: "auto", height: "auto" }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SocialGallery;
