import React from "react";
import styles from "./Dashboard.module.scss";


import Card from '../../components/Card';

const Dashboard = (props) => {
  console.log(props.bevvies)
  const cardList = props.bevvies.map(bevvie => {
    return (
    <Card bevvie={bevvie}/>
  );
  });
 
  return (
    <section>
      <div className="row">
        {cardList}
      </div>
    </section>
  );
};

export default Dashboard;
