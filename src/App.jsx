import React, { useState, useEffect } from 'react';
import Styles from '../src/App.module.scss';
import Sidebar from '../src/containers/Sidebar';
import Dashboard from '../src/containers/Dashboard';
import Card from "./components/Card";


const App = () => {

// set up state
const [bevvies, setBevvies] = useState([]);
const [user, setUser] = useState(null);


// fetch API data - fires on page load with all the data
useEffect(() => {
  fetch(('https://api.punkapi.com/v2/beers'))
   .then(resp => resp.json())
   .then(data => {
     setBevvies(data);
     console.log(data);
  }).catch(reject => console.log(reject))
  }, []);

  // search function - this will fire when the search or filter is used.
  const searchFetch = (searchString) => {
    let hasSearchTerm;
    if(searchString.length === 0) {
      hasSearchTerm = "";
    } else {
      hasSearchTerm = `&beer_name=${searchString}`
    }
    fetch((`https://api.punkapi.com/v2/beers?per_page=80${hasSearchTerm}`))
   .then(resp => resp.json())
   .then(data => {
     setBevvies(data);
     console.log(data);
  }).catch(reject => console.log(reject));
  } 


  return (
    <div className={Styles.main}>
      <h1 className={Styles.header}>Benny's (Brewdog) Bevvies!</h1>
      <Sidebar searchFetch={searchFetch} />
      <Dashboard bevvies={bevvies}/>
    </div>
  );
  }

export default App;
