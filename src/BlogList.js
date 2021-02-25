import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = props => {
  return(
    <div className="list-container">
    {props.blogList.map(blog => (
      <div className="list-arrange" key={blog.id}>
        <div className="list-image-text-wrapper">
          <Link to={`/blog/${blog.id}`}>
            <img src={blog.imageUrl} alt="image" />
            <h2 className="list-image-text">{blog.title}</h2>
          </Link>
        </div>
      </div>
    ))}
    </div>
  )
}

export default BlogList;
