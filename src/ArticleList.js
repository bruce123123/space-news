import React from 'react';
import { Link } from 'react-router-dom';

const ArticleList = props => {
  console.log(props.articleList);
  return(
    <div>
      {props.articleList.map(article => (
        <div className="arrange-list" key={article.id}>
          <div className="list-image-text-wrapper">
            <Link to={`/article/${article.id}`}>
              <img src={article.imageUrl} alt="image" />
              <h2 className="list-image-text">{article.title}</h2>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ArticleList;
