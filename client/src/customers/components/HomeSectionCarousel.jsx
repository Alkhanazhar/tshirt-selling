import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { corousel } from "../../utils/constants";
import HomeSectionCard from "./HomeSectionCard";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Button } from "@mui/material";

const responsive = {
  0: {
    items: 1,
  },
  568: {
    items: 2,
  },
  768: {
    items: 2,
  },
  1024: {
    items: 3,
    itemsFit: "contain",
  },
  1240: {
    items: 5,
    itemsFit: "contain",
  },
};
const items = corousel?.map((item) => <HomeSectionCard />);
const HomeSectionCarousel = ({ heading, data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handlePrev = () => {
    setActiveIndex((activeIndex) => activeIndex - 1);
  };
  const handleNext = () => {
    setActiveIndex((activeIndex) => activeIndex + 1);
  };
  const syncActive = ({ item }) => setActiveIndex(item);

  return (
    <div className="relative w-full h-full">
      <div className="container mx-auto mb-12 relative">
        <h1 className="text-3xl font-bold text-zinc-900 leading-none text-center mb-8">
          {heading}
        </h1>
        <AliceCarousel
          items={items}
          responsive={responsive}
          disableDotsControls
          disableButtonsControls
          onSlideChanged={syncActive}
          activeIndex={activeIndex}
        />
      </div>
      {activeIndex !== 0 && (
        <span className="absolute top-1/2 left-8" onClick={handlePrev}>
          <Button variant="outlined">
            <ArrowBackIosNewIcon />
          </Button>
        </span>
      )}
      {activeIndex !== items?.length - 4 && (
        <span className="absolute top-1/2  right-8" onClick={handleNext}>
          <Button variant="outlined">
            <ArrowBackIosNewIcon className="rotate-[180deg]" />
          </Button>
        </span>
      )}
    </div>
  );
};
export default HomeSectionCarousel;
