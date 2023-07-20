import i18n from "@/i18next/i18next";
import scss from "./Header.module.scss";
import React, { useMemo, useState,useEffect } from "react";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Link from "next/link";
import { Header__item } from "@/constants/HeaderItem";
import { useRouter } from "next/router";
import { HeaderImages } from "@/constants/HeaderItem";
import Image from "next/image";
import burgerMenu from "../../../public/assets/images/Header/burger.svg";

const Header: React.FC = () => {
  const [isBurger, setIsBurger] = useState(false);
  const [burgerOpen, setBurgerOpen] = useState(false);
  const { t } = i18n;
  const { route } = useRouter();

  const handleClick = () => {
    setIsBurger(true);
    setBurgerOpen(!burgerOpen);
  };
  const renderLinks = React.useMemo(
    () =>
      Header__item.map((item) => (
        <Link
          href={item.path}
          key={item.id}
          className={
            route === item.path
              ? scss.header__item_active
              : scss.header__item_notActive
          }
        >
          {t(item.items)}
        </Link>
      )),
    []
  );

  const image = useMemo(
    () =>
      HeaderImages.map(({ image, id }) => (
        <div className={scss.header__burgerImage} key={id}>
          <Image
            src={image}
            width={id === 1 ? 22 : 18}
            height={id === 1 ? 13 : 18}
            alt="logo"
          />
        </div>
      )),
    []
  );

  const burger = useMemo(
    () =>
      isBurger && (
        <section
          className={
            burgerOpen
              ? scss.header__burger_active
              : scss.header__burger_notActive
          }
          onClick={handleClick}
        >
          <main className={scss.header__burgerMain} onClick={(event) => event.stopPropagation()}>
            <header className={scss.header__burgerLinks}>
              {renderLinks}
              <p className={scss.header__burgerInfo}>experts@kyrgyztraces.kg</p>
            </header>
            <footer className={scss.header__burgerFooter}>
              <p>Follow us</p>
              <main className={scss.header__burgerImages}>{image}</main>
            </footer>
          </main>
        </section>
      ),
    [burgerOpen]
  );

  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;

    body.style.overflow = burgerOpen ? "hidden" : ""
    html.style.overflow = burgerOpen ? "hidden" : ""
  }, [burgerOpen]);

  return (
    <>
      <div className={scss.header}>
        <Logo />
        <div className={scss.header__item}>{renderLinks}</div>
        <Search />
        <aside className={scss.header__burger} onClick={handleClick}>
          <Image
            src={burgerMenu}
            width={30}
            height={13}
            alt="bul burger menu"
          />
        </aside>
        {burger}
      </div>
      <div className={scss.sticky}></div>
    </>
  );
};

export default Header;
