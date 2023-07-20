import React, { useMemo } from "react";
import scss from "./AboutOurTeam.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import { OurTeamCards } from "@/constants/OurTeamCards";

const AboutOurTeam = () => {
  const { query } = useRouter();

  const render = useMemo(() => {
    return OurTeamCards.map((el) => {
      if (el.id === query.id) {
        return (
          <section className={`${scss.ourTeam} container`} key={el.id}>
            <aside className={scss.ourTeam_left}>
              <Image src={el.img} height={361} width={361} alt="bul logotip" />
            </aside>
            <aside className={scss.ourTeam_right}>
              <p>Team /  {el.title}</p>
              <span>{el.destination}</span>
            </aside>
          </section>
        );
      }
      return null;
    });
  }, [query.id]);

  return <div className={scss.ourTeam}>{render}</div>;
};

export default AboutOurTeam;
