import Hero from "@/components/Hero";
import React from "react";

const ContactPage = () => {
  const heroContent = {
    heading: "Contact me",
    message: "+65 8222 7555, pjhong@gmail.com",
  };

  return <Hero content={heroContent} book />;
};

export default ContactPage;
