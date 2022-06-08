import React from "react";
import About1 from "../component/about1/About1";
import About2 from "../component/about2/About2";
import About3 from "../component/about3/About3";
import About4 from "../component/about4/About4";
import Banner from "../component/banner/Banner";
import Banner2 from "../component/banner2/Banner2";
import Categories1 from "../component/categories1/Categories1";
import Courses1 from "../component/courses1/Courses1";
import Courses2 from "../component/courses2/Courses2";
import Courses3 from "../component/courses3/Courses3";
import News from "../component/news/News";
import Reviews from "../component/reviews/Reviews";
import Services1 from "../component/services1/Services1";
import Services2 from "../component/services2/Services2";
import Slider from "../component/slider/Slider";
import Video from "../component/video/Video";

const Home = () => {
  return (
    <>
      <Slider />
      <About1 />
      <About2 />
      <Courses1 />
      <About3 />
      <Services1 />
      <Categories1 />
      <Courses2 />
      <Reviews />
      <Courses3 />
      <Banner />
      <About4 />  
      <Video />
      <Services2 />
      <News />
      <Banner2 />
    </>
  );
};

export default Home;
