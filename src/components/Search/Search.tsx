import React from "react";
import scss from "./Search.module.scss";
import search_btn from "../../../public/assets/Search/search.svg";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const Search = () => {
  const { t } = useTranslation();
  
//   interface ReactProps  {
//     placeholder?: string,
//   }

  return (
    <div className={scss.search}>
    
      <input type="text" placeholder={`${t("search.placeholder")}`} />
      <Image src={search_btn} /*width={16} height={16}*/ alt={'Search'} />
    </div>
  );
};

export default Search;
