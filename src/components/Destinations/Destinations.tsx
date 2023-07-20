import React, { useMemo } from "react";
import scss from "./Destinations.module.scss";
import SliderButton from "../sliderButton/SliderButton";
import Slider from "react-slick";
import Image from "next/image";
import { DestinationsCardMain } from "@/constants/CardDestinations"; 
import DestinationsCard from "../TourCard/Cards/DestinationsCard";
import Link from "next/link";

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

function Destinations() {
  const DestinationsCardsMemo = useMemo(
    () =>
      DestinationsCardMain.map((item) => (
        <DestinationsCard
          key={item.id}
          title={item.area}
          description={item.destination}
          tours={item.quantity}
          img={item.image}
          id= {item.id}
        />
      )),
    []
  );

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    prevArrow: <PrevArrow onClick={() => {}} />,
    nextArrow: <NextArrow onClick={() => {}} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 678,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
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
    <div className={scss.destinations}>
      <div className="container">
        <div className={scss.destinations__header}>
          <div className={scss.header__content}>
            <h1>Destinations</h1>
            <p>
              Learn more about the beautiful sights. Choose an area and we will
              tell you what attractions and tours there are in this area.
            </p>
          </div>
          <div className={scss.reviews__link}>
            <Link href="/destinations">Watch all sights</Link>
            <Image
              src="/images/arrow__white.svg"
              alt="arrow"
              width={23}
              height={14.73}
            />
          </div>
        </div>
        <hr />
        <div className={scss.destinations__slider}>
          <Slider {...settings}>{DestinationsCardsMemo}</Slider>
        </div>
      </div>
    </div>
  );
}

export default Destinations;
