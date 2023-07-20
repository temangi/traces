import { Destinations_item } from "@/constants/CardDestinations";
import React, { useState, useMemo } from "react";
import AllDest from "./AllDest/AllDest";
import scss from "./DestinationsCards.module.scss";
import nextBtn from "../../../public/assets/images/Destinations/next.svg";
import Image from "next/image";

function DestinationsCards() {
  const regions = Destinations_item.map((item) => (
    <AllDest key={item.id} {...item} />
  ));

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = regions.slice(indexOfFirstItem, indexOfLastItem);
  const handlePageSelect = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };


  const numericButtons = useMemo(() => {
    return Array.from({
      length: Math.ceil(regions.length / itemsPerPage),
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
  }, [regions.length, itemsPerPage, currentPage, handlePageSelect]);

  return (
    <div className={scss.dest_card}>
      <div className="container">
        <div className={scss.title_dest}>
          <h2>All Destinations</h2>
        </div>
        <div className={scss.dest_regions}>{currentItems}</div>

        <div className={scss.page_control}>
          <div>{numericButtons}</div>

          <button
            onClick={handleNextPage}
            disabled={indexOfLastItem >= regions.length}
            className={scss.nextPage}
          >
            <Image src={nextBtn} alt="next_button" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DestinationsCards;
