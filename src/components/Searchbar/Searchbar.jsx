import React from "react";
import Styles from "./Searchbar.module.scss";

const Searchbar = ({search}) => {
  return (
    <div className={Styles.searchBox}>
      {/* <p>Search for bevvies</p> */}
      <input className={Styles.placeholder} type="text" placeholder="Enter a Brewdog bevvy here!" onInput={(e) => search(e.target.value)}/>
    </div>
  );
};

export default Searchbar;
