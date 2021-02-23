import React, { Component } from 'react';
import './App.css';

import {Route, Link} from 'react-router-dom';
import axios from 'axios';

import ArticleList from './ArticleList';
import ArticleDetail from './ArticleDetail';
import BlogList from './BlogList';
import BlogDetail from './BlogDetail';
import ReportList from './ReportList';
import ReportDetail from './ReportDetail';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articleList:[],
      blogList: [],
      reportList: [],
      apiDataLoaded: false
    }
  }

  componentDidMount = async () => {
    const articleData = await axios.get("https://spaceflightnewsapi.net/api/v2/articles");
    const blogData = await axios.get("https://spaceflightnewsapi.net/api/v2/blogs");
    const reportData = await axios.get("https://spaceflightnewsapi.net/api/v2/reports");
    this.setState({
      articleList: articleData.data,
      blogList: blogData.data,
      reportList: reportData.data,
      apiDataLoaded: true
    })
  }

  render() {
    return (
        <div>
          <nav>
            <Link to="/">News Articles</Link>
            <Link to="/blog">Blog</Link>
            <Link to='/reports'>Reports</Link>
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
                <Route exact path="/blog" render={() => (
                  <BlogList blogList={this.state.blogList} />
                )} />
                <Route path="/blog/:id" render={(routerProps) => (
                <BlogDetail
                blogList={this.state.blogList}
                {...routerProps}
                />
                )} />
                <Route exact path="/reports" render={() => (
                  <ReportList reportList={this.state.reportList} />
                )} />
                <Route path="/reports/:id" render={(routerProps) => (
                <ReportDetail
                reportList={this.state.reportList}
                {...routerProps}
                />
                )} />
              </div>
              ) :
              <p>Data Not Loaded</p>
            }
          </div>
        </div>
    );
  }
}


export default App;
