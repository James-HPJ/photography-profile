import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";

const SocialHeading = () => {
  return (
    <div className="mx-auto text-center mt-5">
      <h2 className="text-lg font-semibold">Follow me on my Instagram</h2>
      <div className="flex justify-center items-center">
        <FaInstagram size={20} />
        <p className="ml-2 hover:border hover:bg-orange-400 hover:text-white p-2 rounded-lg">
          <Link href="https://www.instagram.com/canshootwilltravel/">
            @canshootwilltravel
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SocialHeading;
