import React, { useMemo } from "react";
import Slider from "react-slick";
import scss from "./Reviews.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewsCard from "../TourCard/Cards/ReviewsCard";
import Image from "next/image";
import SliderButton from "../sliderButton/SliderButton";
import { ReviewsCards } from "@/constants/ReviewsCards";

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

function Reviews() {
  const ReviewsCardsMemo = useMemo(
    () =>
      ReviewsCards.map((item) => (
        <ReviewsCard
          key={item.id}
          title={item.title}
          description={item.description}
          img={item.img}
          id={item.id}
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
    <div className={scss.reviews}>
      <div className="container">
        <div className={scss.reviews__header}>
          <h1>Reviews</h1>
          <div className={scss.reviews__link}>
            <a href="#">Watch all sights</a>
            <Image
              src="/images/arrow__green.svg"
              alt="arrow"
              width={23}
              height={14.73}
            />
          </div>
        </div>
        <hr />
        <div className={scss.reviews__slider}>
          <Slider {...settings}>{ReviewsCardsMemo}</Slider>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
