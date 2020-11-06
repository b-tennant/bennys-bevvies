import React, { useState, useEffect } from 'react';
import Styles from '../src/App.module.scss';
import Sidebar from '../src/containers/Sidebar';
import Dashboard from '../src/containers/Dashboard';
import Routes from "./containers/Routes";
import firebase, { provider } from "./firebase";
import Card from "./components/Card";


const App = () => {

// set up state
const [bevvies, setBevvies] = useState([]);
const [user, setUser] = useState(null);


// fetch API data - fires on page load with all the data
// useEffect(() => {
//   fetch(('https://api.punkapi.com/v2/beers'))
//    .then(resp => resp.json())
//    .then(data => {
//      setBevvies(data);
//      console.log(data);
//   }).catch(reject => console.log(reject))
//   }, []);

  // search function - this will fire when the search or filter is used.
  const searchFetch = (searchString) => {
    fetch((`https://api.punkapi.com/v2/beers?beer_name=${searchString}`))
   .then(resp => resp.json())
   .then(data => {
     setBevvies(data);
     console.log(data);
  }).catch(reject => console.log(reject));
  } 

 
 



  return (
    <div className="blue">
      <h1 className="center purple-text">benny's bevvies</h1>
      <Sidebar searchFetch={searchFetch}>
      
        </Sidebar>
      <Dashboard bevvies={bevvies}/>
      <Routes
      user={user}
      />
    </div>
  );
  }

export default App;
