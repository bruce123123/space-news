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
      articleList:[],
      apiDataLoaded: false
    }
  }

  componentDidMount = async () => {
    const articleData = await axios.get("https://spaceflightnewsapi.net/api/v2/articles");
    this.setState({
      articleList: articleData.data,
      apiDataLoaded: true
    })

  }
  render() {
    console.log(this.state.articleList);
    return (
        <div>
          <nav>
            <Link to="/">Space News List</Link>
          </nav>
          <div>
            {this.state.apiDataLoaded ? (
              <div>
                <Route exact path="/" render={() => (
                  <ArticleList articleList={this.state.articleList} />
                )} />
                <Route path="/article/:id" render={(routerProps) => (
                <ArticleDetail
                articleList={this.state.articleList}
                {...routerProps}
                />
                )} />
              </div>
              ) :
              <p>Article Data Not Loaded</p>
            }
          </div>
        </div>
    );
  }
}


export default App;
