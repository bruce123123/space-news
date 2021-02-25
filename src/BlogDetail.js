import React from 'react';

const BlogDetail = props => {
    const foundBlog = props.blogList.find(blog => {
        return blog.id === props.match.params.id;
    })

    return (
      <div className="detail-container">
        <h2 className="detail-title">{foundBlog.title}</h2>
        <img className="detail-image" src={foundBlog.imageUrl} alt="Report" />
        <div className="detail-description">
          <p>{foundBlog.summary}</p>
        </div>
        <a href={foundBlog.url} target="_blank">
          <button className="detail-link">Read More</button>
        </a>
      </div>
    )
}

export default BlogDetail;
