import React, { useState } from "react";
import styles from "./Sidebar.module.scss";
import Searchbar from '../../components/Searchbar';


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
      <p className={styles.searchGreet}>Search for your bevvy below!</p>
      <Searchbar search={search}/>
    </>
  );
};

export default Sidebar;
