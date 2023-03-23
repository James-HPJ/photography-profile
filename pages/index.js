import Hero from "@/components/Hero";
import Head from "next/head";
import Carousel from "../components/home-page/Carousel";
import { imgURL } from "@/data/imgURL";
import SocialMediaWork from "@/components/home-page/social-media-components/SocialMediaWork";
import Footer from "@/components/Footer";

const heroContent = {
  heading: "James' Photography",
  message: "Capturing your most important Moments",
};

export default function Home() {
  return (
    <>
      <Hero content={heroContent} book />
      <Carousel data={imgURL} />
      <SocialMediaWork />
    </>
  );
}
