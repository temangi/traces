import React, { useMemo } from "react";
import scss from "./Footer.module.scss";
import { info } from "@/constants/Footer";
import { images } from "@/constants/Footer";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const text = useMemo(
    () =>
      info.map(({ title, text, id }) => (
        <article key={id}>
          <span className={scss.footer__info}>{title}</span>
          <span className={scss.footer__unInfo}>{text}</span>
        </article>
      )),
    []
  );
  const image = useMemo(
    () =>
      images.map(({ image, id }) => (
        <div className={scss.footer__image} key={id}>
          <Image src={image} width={id === 1 ? 22 : 18} height={id === 1 ? 13 : 18} alt="logo" />
        </div>
      )),
    []
  );

  return (
    <section className={scss.footer}>
      <div className="container">
        <header>
          <aside className={scss.footer_left}>
            <p className={scss.footer__title}>Kyrgyz Traces</p>
            <span className={scss.footer__desc}>
              We are proudly the Best Inside Travel DMCs & Tour Operators in
              each destination where you travel to, our. Operat...
            </span>
            <Link href = {"/aboutUs"}className={scss.footer__link}>Read more</Link>
          </aside>
          <aside className={scss.footer_center}>
            <p className={scss.footer__title}>CONTACT US</p>
            <footer>{text}</footer>
          </aside>
          <aside className={scss.footer_right}>
            <p className={scss.footer__title}>Follow us</p>
            <footer>{image}</footer>
          </aside>
        </header>
      </div>
      <footer className={scss.footer__footer}>
          <p className={scss.footer__unTitle}>@ 2023 Kyrgyz Riders. All rights reserved</p>
          <p>Design by @SolidDevs</p>
      </footer>
    </section>
  );
};

export default Footer;
