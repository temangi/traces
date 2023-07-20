import React, { useState, useMemo } from "react";
import scss from "./ItineraryBlock.module.scss";
import { ItineraryArr } from "@/constants/Itinerary";
import Image from "next/image";
import arrow from "../../../public/images/itinerary/arrow.svg";

const ItineraryBlock = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    const getData = React.useMemo(() => ItineraryArr.map((item, index) => (
        <div className={scss.accordion} key={item.id}>
            <button
                className={`${scss.accordion_visible} ${activeIndex === index ? scss.active : scss.nonActive
                    }`}
                onClick={() => toggleAccordion(index)}
            >
                <h3>{item.title}</h3>
                <Image src={arrow} width={18} height={10} alt="arrow" />
            </button>
            <div
                className={`${scss.accordion_toggle} ${activeIndex === index ? scss.open : ""
                    }`}
            >
                <div className={scss.line}></div>
                <p>{item.description}</p>
            </div>
        </div>
    )), [activeIndex]);

    return (
        <div className={scss.wrapper}>
            <div className="container">
                <h1>Itinerary</h1>
                {getData}
            </div>
        </div>
    );
};

export default ItineraryBlock;