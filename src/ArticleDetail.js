import React from 'react';

const ArticleDetail = props => {
    const foundArticle = props.articleList.find(article => {
        return article.id === props.match.params.id;
    })
    console.log(foundArticle)
    return (
        // <h2>Founnd id {foundArticle} </h2>
        <div>
         <h2>{foundArticle.title}</h2>
         <h2>{foundArticle.summary}</h2>
         <img src={foundArticle.imageUrl} alt="Article" />
        </div>

        
    )
}

export default ArticleDetail

