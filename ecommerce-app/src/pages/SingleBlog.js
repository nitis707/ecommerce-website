import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { HiOutlineArrowLeft } from "react-icons/hi";
import blog from "../images/blog-1.jpg";
import Container from "../components/Container";

const SingleBlog = () => {
    return (
        <>
            <Meta title={"Dynamic Blog"} />
            <BreadCrumb title="Dynamic Blog" />
            <Container class1="blog-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="single-blog-card">
                            <Link to="/blogs" className="d-flex align-items-center gap-10">
                                <HiOutlineArrowLeft className="fs-4" /> Go back to Blogs
                            </Link>
                            <h3 className="title">
                                A Beautiful Sunday Morning Renaisance
                            </h3>
                            <img src={blog} className="img-fluid w-100 my-4" alt="blog" />
                            <p>
                                You're only as good as your last collection.
                                Which is an enormous pressure. I think there is something about luxury - It's not something people need.
                                But it's what they want. It realty pulls at their heart.
                                I have aantastic relationship with money-Scolerisque sociosqu
                                uma nisi molils vestibulum protium commodo Inceptos cum condimentum
                                placerat diam venenatis blandit hac egot dis a parturient accumsan rusi ante vestibulum.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default SingleBlog;