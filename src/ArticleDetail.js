import React from 'react';
// maybe include more info
const ArticleDetail = props => {
    const foundArticle = props.articleList.find(article => {
        return article.id === props.match.params.id;
    })
    // console.log(foundArticle)
    return (
        <div>
            <div className="image-text-wrapper">
                <h2 className="image-text">{foundArticle.title}</h2>
                <img src={foundArticle.imageUrl} alt="Article" />
            </div>
            <div className="description">
                <h2>{foundArticle.summary}</h2>
            </div>
            <a href={foundArticle.url}>
              <button className="myButton">Read More</button>
            </a>          
        </div>


    )
}

export default ArticleDetail
