import React from "react";
import scss from "./Includes.module.scss";
import Image from "next/image";
import { includesArray,notIncludesArray } from "@/constants/toursUtils";
import good from "../../../../public/assets/images/TourPage/good.svg"
import bad from "../../../../public/assets/images/TourPage/bad.svg"

const Includes: React.FC = () => {

  const first = React.useMemo(() => (
    includesArray.map((el) => (
      <section key={el.id} className={scss.includes__yes}>
        <Image src={good} height={12} width={16} alt= "check mark"/>
        <p>{el.title}</p>
      </section>
    ))
  ),[])
  const second = React.useMemo(() => (
    notIncludesArray.map((el) => (
      <section key={el.id} className={scss.includes__not}>
        <Image src={bad} height={12} width={16} alt= "check mark"/>
        <p>{el.title}</p>
      </section>
    ))
  ),[])


  return (
    <section className={scss.includes}>
      <div className="container">
        <p className={scss.includes__title}>Price includes</p>
        <main>{first}</main>
        <footer>{second}</footer>
      </div>
    </section>
  );
};

export default Includes;
