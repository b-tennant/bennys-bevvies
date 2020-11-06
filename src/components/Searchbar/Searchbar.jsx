import React from "react";
import styles from "./Searchbar.module.scss";

const Searchbar = ({search}) => {
  return (
    <div className="container">
      {/* <p>Search for bevvies</p> */}
      <input type="text" placeholder="enter bevvy here!" onInput={(e) => search(e.target.value)}/>
    </div>
  );
};

export default Searchbar;
