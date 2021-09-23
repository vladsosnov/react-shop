import React, { FC } from "react";
import { Coupons } from "components/pages/home/Coupons";
import { Discounts } from "components/pages/home/Discounts";
import { Hero } from "components/pages/home/Hero";

const Home: FC = () => {
  // TODO: add custom swiper with products and discounts
  const moveToSliderHandler = () => {
    console.log("moveToSliderHandler");
  };

  return (
    <>
      <Hero moveToSliderHandler={moveToSliderHandler} />
      <Discounts />
      <Coupons />
    </>
  );
};

export { Home };
