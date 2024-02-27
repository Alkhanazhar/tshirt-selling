import React from "react";
import Carousel from "../components/Carousel.";
import HomeSectionCarousel from "../components/HomeSectionCarousel";
import { corousel } from "../../utils/constants";
import Footer from "../components/Footer";
import LocomotiveScroll from "locomotive-scroll";

const HomePage = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <Carousel />
      <HomeSectionCarousel data={corousel} heading={"T-shirts"} />
      <HomeSectionCarousel data={corousel} heading={"T-shirts"} />
      <HomeSectionCarousel data={corousel} heading={"T-shirts"} />
      <HomeSectionCarousel data={corousel} heading={"T-shirts"} />
      <HomeSectionCarousel data={corousel} heading={"T-shirts"} />
      <HomeSectionCarousel data={corousel} heading={"T-shirts"} />

      <Footer />
    </>
  );
};

export default HomePage;
