import Carousel from "../components/Carousel.";
import { corousel } from "../../utils/constants";
import Footer from "../components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import AllProducts from "../components/AllProducts";

const HomePage = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <Carousel />
      <AllProducts />
      <Footer />
    </>
  );
};

export default HomePage;
