import React from "react";
import Hero from "@/components/Hero";
import WorkForm from "@/components/work-page/WorkForm";

const heroContent = {
  heading: "Submit a request",
  message: "We can discuss, no obligations!",
};
const WorkPage = () => {
  return (
    <>
      <Hero content={heroContent} book={false} />
      <WorkForm />
    </>
  );
};

export default WorkPage;
