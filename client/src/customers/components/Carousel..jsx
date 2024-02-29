import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { corousel } from "../../utils/constants";
import Hero from "./Hero";

const responsive = {
  0: { items: 1 },
  568: { items: 1 },
  1024: { items: 1 },
};

const items = corousel.map((item) => (
  <img
    src={item}
    role="presentation"
    className="cursor-pointer h-[60vh] -z-30 w-full hover:opacity-70 duration-500 object-cover"
  />
));

const Carousel = () => (
  <div data-scroll data-scroll-speed="-.02" className="mb-8 relative">
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      controlsStrategy="alternate"
      disableButtonsControls
      autoPlay
      disableDotsControls
      autoPlayInterval={4000}
      infinite
      className="relative"
    />
    <Hero />
  </div>
);
export default Carousel;
