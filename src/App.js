import React, { Component } from 'react';
import './App.css';

import {Route, Link} from 'react-router-dom';
import axios from 'axios';
import parkData from './data/parks.json';
import ParkList from './ParkList';
import ParkDetail from './ParkDetail';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parkList:[]
    }
  }


  componentDidMount = async () => {
    const parkData = await axios.get("https://spaceflightnewsapi.net/api/v2/articles");
    this.setState({
      parkList: parkData.data.data
    })
  
  }

  render() {
    return (
        <div>
          <nav>
            <Link to="/">Nation Park List </Link>
          </nav>
          <Route exact path="/" render={() => (
            <ParkList parkList={this.state.parkList} />
          )} />
          <Route path="/park/:id" render={(routerProps) => (
            <ParkDetail 
            parkList={this.state.parkList}
            {...routerProps}
            />
          )} />
        </div>
    );
  }
}

export default App;
