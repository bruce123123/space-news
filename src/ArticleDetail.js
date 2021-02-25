import React from 'react';

const ArticleDetail = props => {
    const foundArticle = props.articleList.find(article => {
        return article.id === props.match.params.id;
    })

    return (
      <div className="detail-container">
        <h2 className="detail-title">{foundArticle.title}</h2>
        <img className="detail-image" src={foundArticle.imageUrl} alt="Report" />
        <div className="detail-description">
          <p>{foundArticle.summary}</p>
        </div>
        <a href={foundArticle.url} target="_blank">
          <button className="detail-link">Read More</button>
        </a>
      </div>
    )
}

export default ArticleDetail;
