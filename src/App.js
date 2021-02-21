import React, { Component } from 'react';
import './App.css';

import {Route, Link} from 'react-router-dom';
import axios from 'axios';

import ArticleList from './ArticleList';
import ArticleDetail from './ArticleDetail';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articleList:[]
    }
  }

  componentDidMount = async () => {
    const articleData = await axios.get("https://spaceflightnewsapi.net/api/v2/articles");
    this.setState({
      articleList: articleData.data
    })
  
  }
  render() {
    console.log(this.state.articleList);
    return (
        <div>
          <h1>App.js</h1>
        </div>
    );
  }
}


export default App;
