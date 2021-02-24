import React from 'react';

const ArticleDetail = props => {
    const foundArticle = props.articleList.find(article => {
        return article.id === props.match.params.id;
    })

    return (
        <div className="detail-container">
            <div className="image-text-wrapper">
                <h2 className="image-text">{foundArticle.title}</h2>
                <img src={foundArticle.imageUrl} alt="Article" />
            </div>
            <div className="description">
                <p>{foundArticle.summary}</p>
            </div>
            <a href={foundArticle.url}>
              <button className="myButton">Read More</button>
            </a>
        </div>
    )
}

export default ArticleDetail;
