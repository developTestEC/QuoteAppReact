import React from "react";
import About from "../components/About";
import BlogFeed from "../components/BlogFeed";
import Carousel from "../components/Carousel";
import Contact from "../components/Footer";
import Header from "../components/Header";
import Presentation from "../components/Presentation";
export default function Landing() {
  return (
    <>
      <Header />
      <Presentation />
      <BlogFeed />
      <Carousel />
      <About />
      <Contact />
    </>
  );
}