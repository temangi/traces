import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import scss from './Main.module.scss';
import { MainArray } from '@/constants/Main';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
export interface TitleProps {
  title: string,
  unTitle: string
  id: number
}

interface MainI {
  array: TitleProps[]
}

const Main: React.FC<MainI> = ({ array }) => {
  const { route } = useRouter();
  const { t } = useTranslation();
  const router = useRouter();
  const backgroundHomeStyles = [scss.backgroundHome, scss.backgroundHome2, scss.backgroundHome3, scss.backgroundHome4];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 6000,
  };

  const renderBtn = MainArray.map((item) => (
    <div key={item.id} onClick={() => {
      router.push(`${item.link}`)
    }}>
      <h6 className={scss.mainBtns}>{t(item.title)}</h6>
    </div>
  ));

  const renderButtons = React.useMemo(() => (
    renderBtn.map((item, index) => (
      <div key={index} className={scss.background__flex_el}>{item}</div>
    ))
  ), [])


  const render = React.useMemo(() => (
    array.map(({ title, unTitle, id }, index) => (
      <div className={`${route !== "/" ? route !== "/tours" ? route !== "/aboutUs" ? scss.backgroundDestinations : scss.backgroundAbout : scss.backgroundTours : backgroundHomeStyles[index % backgroundHomeStyles.length]} ${scss.imageAnimation}`} key={id}>
        <div className={scss.titles}>
          <h1>{title}</h1>
          <p>{unTitle}</p>
        </div>
        <div className={scss.background__flex}>
          {renderButtons}
        </div>
      </div>
    ))
  ), [])

  return (
    <div className={scss.carouselWrapper}>
      <Slider {...settings}>
        {render}
      </Slider>
    </div>
  );
}

export default Main;
