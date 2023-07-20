import React from "react";
import scss from "./Filter.module.scss";
import Image from "next/image";
import filter from "../../../public/assets/images/ToursPage/filter.svg";
import { tourButtons } from "@/constants/FilterBlock";
import Button from "../Button/Button";
import FilterCard from "./FilterCard/FilterCard";


const Filter = () => {

  const buttons = React.useMemo(
    () =>
      tourButtons.map((el) => (
        <FilterCard {...el} key={el.id}/>
      )),
    []
  );


  return (
    <section className={scss.filter}>
      <div className="container">
        <header>
          <Image src={filter} height={20} width={40} alt="filter" />
          <p className={scss.filter__title}>Find your tour</p>
        </header>
        <main className={scss.filter__main}>
          <aside className={scss.filter__buttons}>{buttons}</aside>
          <div><Button title="Search" variant="btn__green"/></div>
        </main>
      </div>
    </section>
  );
};

export default Filter
