import React from "react";
import styles from "./Card.module.scss";

const Card = ({bevvie}) => {

  const {image_url, name, tagline, first_brewed, description, hops, abv} = bevvie;
  return (
    <article className={styles.penguin}>
      <div className={styles.polar}>
        <img src={image_url} alt="some bevvie"/>
        <div className={styles.iceberg}>
          <h3>{name}</h3>
          <p className={styles.iglu}>{description}</p>
        </div>
      </div>
    </article>
  );
};

export default Card;






{/* <div className="col s12 m7 l2">
<div>
  <div className="card purple z-depth-5">
    <div className="card-image">
      <div className="container">
      <img className="responsive-img" src={image_url} />
      </div>
      <span className="card-title">{name}</span>
    </div>
    <div className="card-content">
      <p className="truncate">{description}</p>
    </div>
    <div className="card-action">
      <a href="#">This is a link</a>
    </div>
  </div>
</div>
</div> */}