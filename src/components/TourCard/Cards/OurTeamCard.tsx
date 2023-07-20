import React from "react";
import scss from "./Variants.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";
 
interface OurTeamCardProps {
  title: string;
  description: string;
  img: string;
  id : number | string
}

const OurTeamCard: React.FC<OurTeamCardProps> = ({
  title,
  description,
  img,
  id,
}) => {

  const router = useRouter()

  return (
    <Link href={`/ourTeam/${id}`} className={scss.our__team}>
      <img className={scss.image} src={img} alt={title} />
      <div className={scss.footer__blog}>
        <h2 className={scss.title}>{title}</h2>
        <b className={scss.description}>{description}</b>
      </div>
    </Link>
  );
};

export default OurTeamCard;
