import { Destinations_item } from "@/constants/CardDestinations";
import Image from "next/image";
import React, { useState, useMemo } from "react";
import AllDest from "../DestinationsCards/AllDest/AllDest";
import scss from "./AllTours.module.scss";
import nextBtn from "../../../public/assets/images/Destinations/next.svg";
import { useRouter } from "next/router";
import YourTourCard from "../TourCard/Cards/YourTourCard";
import { TourCards } from "@/constants/ToursCard";

const AllTours = () => {
  const {route} = useRouter()
  const discover = route === "/tours" ?  TourCards.map((e) => <YourTourCard {...e} key={e.days + e.title}  /> ):  Destinations_item.map((e) => <AllDest key={e.id} {...e} />);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = discover.slice(indexOfFirstItem, indexOfLastItem);
  const handlePageSelect = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const numericButtons = useMemo(() => {
    return Array.from({
      length: Math.ceil(discover.length / itemsPerPage),
    }).map((_, index) => (
      <button
        className={currentPage === index + 1 ? scss.active : scss.numericPage}
        key={index}
        onClick={() => handlePageSelect(index + 1)}
        disabled={currentPage === index + 1}
      >
        {index + 1}
      </button>
    ));
  }, [discover.length, itemsPerPage, currentPage, handlePageSelect]);
  return (
    <div className={scss.allTours}>
      <div className="container">
        <div className={scss.alltours_title}>
          <h4>All Tours</h4>
        </div>
        <div className={scss.discovers}>{currentItems}</div>
        <div className={scss.page_control}>
          <div>{numericButtons}</div>
          <button
            onClick={handleNextPage}
            disabled={indexOfLastItem >= discover.length}
            className={scss.nextPage}
          >
            <Image src={nextBtn} alt="next_button" width={18} height={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllTours;
