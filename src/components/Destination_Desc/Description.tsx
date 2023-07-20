import React from "react";
import scss from "./description.module.scss";

interface IDestination {
    destination: string | undefined | any;
    area: string | any;
}

const Description: React.FC<IDestination> = ({ destination, area }) => {

    return (
        <section className={scss.desc_wrapper}>
            <div className="container">
                <h1 className={scss.title}>Destination / {area}</h1>
                <p className={scss.destination}>{destination}</p>
            </div>
        </section>
    )
}

export default Description;