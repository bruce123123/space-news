import React from 'react';

const BlogDetail = props => {
    const foundBlog = props.blogList.find(blog => {
        return blog.id === props.match.params.id;
    })

    return (
        <div>
            <div className="image-text-wrapper">
                <h2 className="image-text">{foundBlog.title}</h2>
                <img src={foundBlog.imageUrl} alt="Blog" />
            </div>
            <div className="description">
                <p>{foundBlog.summary}</p>
            </div>
            <a href={foundBlog.url}>
              <button className="myButton">Read More</button>
            </a>
        </div>
    )
}

export default BlogDetail;
