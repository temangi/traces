import React, { useState } from "react";
import scss from "./FilterCard.module.scss";
import arrow from "../../../../public/assets/images/ToursPage/arrow.svg";
import Image from "next/image";
import cancel from "../../../../public/assets/images/ToursPage/cancel.svg";
import { useEffect } from "react";

export interface FilterI {
  name: string;
  id: number;
  index: boolean;
}

interface CardI {
  title: string;
  filter: FilterI[];
}

const FilterCard: React.FC<CardI> = ({ title, filter }) => {
  const [isModal, setIsModal] = useState(false);
  const [isModalOpen,setIsModalOpen] = useState(false)
  const [arrButtons, setArrButtons] = useState(filter);
  const [counter, setCounter] = useState(false);
  const [status, setStatus] = useState(0);
  const [day,setDay] = useState("")

  useEffect(() => {
    const local: FilterI[] | null = JSON.parse(localStorage.getItem(title) as string);
    const days: string | null = JSON.parse(localStorage.getItem(day) as string);
    if (local !== null) {
      setArrButtons(local);
    }
  }, []);

  useEffect(()=> {
    if(title === "Duration"){
      arrButtons.map((el) => {
        if (el.index === true){
          setDay(el.name)
          console.log("fafafa",day)
        }
      })
    }
  },[arrButtons])

  const handleClick = () => {
    setIsModal(true)
    setIsModalOpen(!isModalOpen)
  };

  const change = (id: number) => {
    const newArray = arrButtons.map((el) => {
      const state = el.index;
      if (el.id === id) {
        return { ...el, index: !state };
      }
      return { ...el };
    });
    setArrButtons(newArray);
    setCounter(!counter);
  };

  const changeOne = (id: number) => {
    const newArray = arrButtons.map((el) => {
      const state = el.index;
      if (el.id === id) {
        setDay(el.name)
        return { ...el, index: !state };
      }
      return { ...el, index: false };
    });
    setArrButtons(newArray);
    setCounter(!counter);
  };

  const reset = () => {
    const newArr = arrButtons.map((el) => {
      return { ...el, index: false };
    });
    setArrButtons(newArr);
  };

  const apply = () => {
    localStorage.setItem(title, JSON.stringify(arrButtons));
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    let counterN : number = 0
    arrButtons.map((el) => {
      if (el.index === true) {
        counterN++
      }
    });
    setStatus(counterN)
  }, [counter, arrButtons]);

  const buttons = React.useMemo(
    () =>
      arrButtons.map(({ name, id, index }) => (
        <section
          className={
            index
              ? scss.filterBlock__button_active
              : scss.filterBlock__button_notActive
          }
          key={id}
          onClick={
            title === "Duration" ? () => changeOne(id) : () => change(id)
          }
        >
          {name}
        </section>
      )),
    [counter, arrButtons]
  );

  const modal = React.useMemo(
    () =>
      isModal && (
        <section
          className={isModalOpen ? scss.modal_active : scss.modal_notActive}
          onClick={handleClick}
        >
          <main
            className={scss.modal}
            onClick={(event) => event.stopPropagation()}
          >
            <header className={scss.modal__header}>
              <p className={scss.modal__title}>{title}</p>
              <Image
                src={cancel}
                height={24}
                width={24}
                alt="cancel"
                onClick={handleClick}
              />
            </header>
            <main className={scss.modal__main}>{buttons}</main>
            <footer className={scss.modal__footer}>
              <button className={scss.modal__apply} onClick={reset}>
                Reset
              </button>
              <button className={scss.modal__reset} onClick={apply}>
                Apply
              </button>
            </footer>
          </main>
        </section>
      ),
    [isModal, counter, arrButtons,isModalOpen]
  );

  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;

    body.style.overflow = isModalOpen ? "hidden" : ""
    html.style.overflow = isModalOpen ? "hidden" : ""
  }, [isModalOpen]);


  return (
    <>
      <article className={scss.filterButton} onClick={handleClick}>
        <div className={status > 0 ? scss.modal__circle_active : scss.modal__circle_notActive}></div>
        <aside>
          <p>{title === "Duration" && status > 0 ? day :title}</p>
          <p
            className={
             title !== "Duration" && status > 0
                ? scss.filterBlock__button_active
                : scss.filterBlock__button_notActive
            }
          >
            ({status})
          </p>
        </aside>
        <Image src={arrow} height={6} width={12} alt="arrow" />
      </article>
      {modal}
    </>
  );
};

export default FilterCard;
