import React from "react";
import scss from "./Variants.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";
interface DestinationsCardProps {
  title: string;
  description: string;
  tours: string | undefined;
  img: string ; 
  id: number | string
}

const DestinationsCard: React.FC<DestinationsCardProps> = ({
  title,
  description,
  tours,
  img,
  id
}) => {

  const router = useRouter()
  
  return (
    <div onClick={() => router.push({ pathname: `/destination/${id}`, query: { destination: description, area: title } })} className={scss.destinations}>
      <div className={scss.info__tours}>
        <b>{tours}</b>
      </div>
      <Image className={scss.image} src={img} alt={description} width={300} height={300} />
      <div className={scss.title__block}>
        <h2 className={scss.title}>Area:</h2>
        <p className={scss.description}>{title}</p>
      </div>
    </div>
  );
};

export default DestinationsCard;
