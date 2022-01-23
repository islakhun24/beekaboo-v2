import { useState } from "react";
import { LiquidSwipe } from "../../components/liquid-swipe";
import Slide1 from "../../components/slide/slide1";
import Slide2 from "../../components/slide/slide2";
import Slide3 from "../../components/slide/slide3";

const Home = () => {
  var componentsToRender = [<Slide1 />, <Slide2 />, <Slide3 />]; // Add components you want to render.
  var backgroundColors = ["#90CAF9", "#FFD101", "#BAB4E4"];

  return (
    <div className="overflow-hidden relative  w-screen h-auto">
      <LiquidSwipe components={componentsToRender} colors={backgroundColors} />
    </div>
  );
};

export default Home;
