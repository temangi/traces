import React from "react";
import scss from "./ShareTour.module.scss"

const ShareTours: React.FC = () => {
    return(
        <section className={scss.share}>
            <div className="container">
                <p className={scss.share__title}>Share tours with travelers</p>
                <span className={scss.share__desc}>Arctic Wild is a family owned and operated, wilderness guiding company based in Fairbanks, Alaska. We <br/> specialize in 1 to 3 week, fully guided and outfitted adventures across Alaska. Our professional guides can take you to the most remote, beautiful and wildlife rich areas in Alaska. Our dedication to your enjoyment and learning is why people return year after year to enjoy the wilds of Alaska with us. Read their testimonials to learn more about why we are considered the best guide service in northern Alaska.</span>
            </div>
        </section>
    )
}

export default ShareTours