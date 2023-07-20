import React, { useMemo } from "react";
import scss from "./Button.module.scss";

interface ButtonProps {
  title: string;
  variant: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, variant, onClick }) => {
  let background__btn = scss.btn_green;
  if (variant === "btn__green") {
    background__btn = scss.btn__green;
  } else if (variant === "btn__black") {
    background__btn = scss.btn__black;
  } else if (variant === "btn__white") {
    background__btn = scss.btn__white;
  } else if (variant === "btn__no_black") {
    background__btn = scss.btn__no_black;
  } else if (variant === "btn__yellow") {
    background__btn = scss.btn__yellow;
  } else if (variant === "btn__reviews") {
    background__btn = scss.btn__reviews;
  }else if (variant === "btn__border_green") {
    background__btn = scss.btn__border_green;
  }

  const handleButtonClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const render__btn = useMemo(
    () => (
      <button className={background__btn} onClick={handleButtonClick}>
        {title}
      </button>
    ),
    [background__btn, title, onClick]
  );

  return <div>{render__btn}</div>;
};

export default Button;
