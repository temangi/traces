import React, { useMemo } from "react";
import { IToursUtils, RenderWhatYouGetFunction } from "../../types/toursUtils.types";
import Image from "next/image";
import scss from "./toursutlis.module.scss";
import checkMark from "../../../public/images/checkMark.svg"

const ToursWhatYouGet: React.FC<IToursUtils> = ({ array }) => {

    const renderWhatYouGet: RenderWhatYouGetFunction | any = useMemo(() =>
        array?.map((el, i) =>
            <div className={scss.checkElement} key={`${el}_${i}`}>
                <Image width={16} height={12} src={checkMark} alt="checkMark" />
                <p>{el}</p>
            </div>
        )
        , [array])

    return (
        <section className={scss.toolsWrapper}>
            <div className="container">
                <h1 className={scss.title}>What will you get from this tour</h1>
                <div>
                    {renderWhatYouGet}
                </div>
            </div>
        </section>
    )
}

export default ToursWhatYouGet;