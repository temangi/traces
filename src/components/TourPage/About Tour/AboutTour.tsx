import React from "react";
import scss from "./AboutTour.module.scss"

const AboutTour = () => {
    return(
        <section className={scss.aboutTour}>
            <div className="container">
                <p>About tour</p>
                <span>Kyrgyzstan has something for all interests, cultural experience with sleeping at yurt of nomads, immense mountains for horse riding, and beautiful hiking trails. See a bit of them all on this 7-day itinerary that takes in some of Kyrgyzstan is gems: the lovely alpine lake Song-Kol, sparkling Ysyk-Kol Lake, and gorges, canyons for wilderness adventures.</span>
            </div>
        </section>
    )
}

export default AboutTour