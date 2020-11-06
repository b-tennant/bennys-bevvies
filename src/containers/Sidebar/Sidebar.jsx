import React, { useState } from "react";
import styles from "./Sidebar.module.scss";
import App from "../../App";

import Searchbar from '../../components/Searchbar';
import Filters from '../../components/Filters';

const Sidebar = (props) => {

const {searchFetch} = props;


// function for search filtering
const search = (searchValue) => {
  const searchString = searchValue.replace(/\s/g, '_');
  searchFetch(searchString);
}


// function for filter filtering
// const filter = () => {
//   searchFetch();
// }

  return (
    <>
      <p className="center flow-text">Search for your bevvy!</p>
      <Searchbar search={search}/>
      <Filters />
    </>
  );
};

export default Sidebar;
