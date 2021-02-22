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
                <img src={foundArticle.imageUrl} alt="Article" />
                <h2 className="image-text">{foundArticle.title}</h2>
                </div>
            <div className="description">
                <h2>{foundArticle.summary}</h2>
            </div>
        </div>

        
    )
}

export default ArticleDetail

