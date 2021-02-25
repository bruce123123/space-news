import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = props => {
  return(
    <div>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <div className='title'>
        <span>Space News</span>
      </div>
    </div>
  )
}

export default Home;
