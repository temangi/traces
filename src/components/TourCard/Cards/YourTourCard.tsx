import React, { useMemo } from "react";
import scss from "./Variants.module.scss";
import Button from "@/components/Button/Button";
import { useRouter } from "next/router";

interface CoordinatesI{
  lat : number
  lng : number
}

interface YourTourCardProps {
  title: string;
  img: string ;
  buttons : string[] | []
  days : number 
  coordinates : CoordinatesI
}

const YourTourCard: React.FC<YourTourCardProps> = ({
  title,
  img,
  buttons,
  days,
  coordinates
}) => {

  const router = useRouter()
  const button = useMemo(() => {
    return buttons.map((el) => {
      return <Button key={el} title={el} variant="btn__border_green" />;
    });
  }, []);  
  return (
    <section onClick={() => router.push({ pathname: `/tour/${days}`, query: { lat : coordinates.lat , lng : coordinates.lng} })} className={scss.tour}>
      <div className={scss.info__tours}>
        <b>{days} {days > 1 ? "days" : "day"}</b>
      </div>
      <img className={scss.image} src={img} alt={"bul surot , jakshy surot"} />
      <div className={scss.bottom__content}>
        <div className={scss.title__block}>
          <h2 className={scss.title}>Tour name:</h2>
          <p className={scss.description}>Discover {title}</p>
        </div>
        <div className={scss.choice__block}>
          <b>Tour class:</b>
          <div>
            {button}
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourTourCard;
