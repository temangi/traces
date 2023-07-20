import React, { useMemo } from "react";
import scss from "./OurTeam.module.scss";
import Slider from "react-slick";
import SliderButton from "../sliderButton/SliderButton";
import OurTeamCard from "../TourCard/Cards/OurTeamCard";
import { OurTeamCards } from "@/constants/OurTeamCards";

const PrevArrow = ({ onClick }: { onClick: () => void }) => (
  <div className={scss.prev__arrow}>
    <SliderButton
      variant={"btn__opacity"}
      position={"left"}
      img={"/images/arrow.svg"}
      onClick={onClick}
    />
  </div>
);

const NextArrow = ({ onClick }: { onClick: () => void }) => (
  <div className={scss.next__arrow}>
    <SliderButton
      variant={"btn__opacity"}
      position={"right"}
      img={"/images/arrow.svg"}
      onClick={onClick}
    />
  </div>
);

function OurTeam() {
  const OurTeamCardsMemo = useMemo(
    () =>
      OurTeamCards.map((item) => (
        <OurTeamCard
          key={item.id}
          title={item.title}
          description={item.description}
          img={item.img}
          id ={item.id}
        />
      )),
    []
  );
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    prevArrow: <PrevArrow onClick={() => {}} />,
    nextArrow: <NextArrow onClick={() => {}} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 678,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={scss.ourteam}>
      <div className="container">
        <h1>Our team</h1>
        <hr />
        <div className={scss.ourteam__slider}>
          <Slider {...settings}>{OurTeamCardsMemo}</Slider>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
