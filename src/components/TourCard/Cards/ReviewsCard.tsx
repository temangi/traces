import React from "react";
import scss from "./Variants.module.scss";
import Button from "@/components/Button/Button";

interface ReviewsCardProps {
  title: string;
  description: string;
  img: string ;
  id? : number | string
}

const ReviewsCard: React.FC<ReviewsCardProps> = ({
  title,
  description,
  img,
}) => {
  return (
    <div className={scss.reviews}>
      <div className={scss.header__blog}>
        <img className={scss.image} src={img} alt={title} />
        <div>
          <h2 className={scss.title}>{title}</h2>
          <a href="#">Germany</a>
        </div>
      </div>
      <p className={scss.description}>{description}</p>
      <Button title={"Link on full review"} variant={"btn__reviews"} />
    </div>
  );
};

export default ReviewsCard;
