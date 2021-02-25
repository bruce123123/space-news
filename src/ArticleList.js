import React from 'react';
import { Link } from 'react-router-dom';

const ArticleList = props => {


  return(
    <div className="list-container">
      {props.articleList.map(article => (
        <div className="list-arrange" key={article.id}>
          <div className="list-image-text-wrapper">
            <Link to={`/articles/${article.id}`}>
              <img src={article.imageUrl} onError={(e) => e.target.src=".././images-error.png"} alt="image" />
              <h2 className="list-image-text">{article.title}</h2>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ArticleList;
