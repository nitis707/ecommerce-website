import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
    return (
        <div className="blog-card">
            <div className="card-image">
                <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blog" />
            </div>
            <div className="blog-content">
                <p className="date">1 Apr, 2023</p>
                <h5 className="title">
                    A beautiful sunday morning renaisance
                </h5>
                <p className="desc">You're Only As Good As Your Collection. Which Is An
                    Enormous Pressure. I Think There Is Something About...</p>
                <Link to="/blog/:id" className="button">Read More</Link>
            </div>
        </div>
    );
};

export default BlogCard;