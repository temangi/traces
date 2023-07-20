import React, { useMemo } from "react";
import scss from "./SliderButton.module.scss";

interface SliderProps {
  variant: string;
  position: "left" | "right";
  img: string;
  onClick?: () => void;
}

const SliderButton: React.FC<SliderProps> = ({
  variant,
  position,
  img,
  onClick,
}) => {
  let background__btn = "";

  if (variant === "btn__white") {
    background__btn = scss.btn__white;
  } else if (variant === "btn__opacity") {
    background__btn = scss.btn__opacity;
  }

  const arrowClass = position === "left" ? scss.arrow__left : scss.arrow__right;

  const render__btn = useMemo(
    () => (
      <button className={`${scss.btn} ${background__btn}`} onClick={onClick}>
        <img className={arrowClass} src={img} alt="Arrow" />
      </button>
    ),
    [background__btn, img, arrowClass, onClick]
  );

  return <div>{render__btn}</div>;
};

export default SliderButton;
