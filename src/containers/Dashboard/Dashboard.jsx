import React from "react";
import styles from "./Dashboard.module.scss";
import { firestore } from "../../firebase";

import Card from '../../components/Card';

const Dashboard = ({bevvies}) => {
  console.log(bevvies)
  const cardList = bevvies && bevvies.map(bevvie => {
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
