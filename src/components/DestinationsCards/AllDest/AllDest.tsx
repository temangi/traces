import Image from "next/image";
import React from "react";
import scss from "./AllDest.module.scss";
import { useRouter } from "next/router";

interface DestinationsItemsProps {
  id: number;
  image: string;
  area: string;
  quantity: string;
  destination?: string;
}

const AllDest: React.FC<DestinationsItemsProps> = ({
  id,
  image,
  area,
  quantity,
  destination
}) => {

  const router = useRouter()

  return (
    <div onClick={() => router.push({ pathname: `/destination/${id}`, query: { destination: destination, area: area } })} className={scss.allDest}>
      <Image src={image} alt="Image" width={300} height={300} />
      <p className={scss.quantity}>{quantity}</p>
      <div className={scss.area}>
        <p>Area:</p>
        <h4>{area}</h4>
      </div>
    </div>
  );
};

export default AllDest;
