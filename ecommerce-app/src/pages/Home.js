import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import ProductCard from "../components/ProductCard";
import BlogCard from "../components/BlogCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import { services } from "../utils/Data";

const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img src="images/main-banner-1.jpg"
                className="img-fluid rounded-3" alt="main banner" />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>Special Sale</h5>
                <p>From ₹79999.00 or ₹3333.29/mo.<br />for 24 mo. footnote*</p>
                <Link className="button">BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img src="images/catbanner-01.jpg"
                  className="img-fluid rounded-3" alt="main banner" />
                <div className="small-banner-content position-absolute">
                  <h4>Best Sale</h4>
                  <h5>Laptops Max</h5>
                  <p>From ₹135999 or<br />₹5666.62/mo.</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img src="images/catbanner-02.jpg"
                  className="img-fluid rounded-3" alt="main banner" />
                <div className="small-banner-content position-absolute">
                  <h4>15% OFF</h4>
                  <h5>Smartwatch 7</h5>
                  <p>Shop the latest brand<br />styles and colors</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img src="images/catbanner-03.jpg"
                  className="img-fluid rounded-3" alt="main banner" />
                <div className="small-banner-content position-absolute">
                  <h4>New Arrival</h4>
                  <h5>Buy iPad Air</h5>
                  <p>From ₹47999 or<br />₹3999/mo. for 12 mo.*</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img src="images/catbanner-04.jpg"
                  className="img-fluid rounded-3" alt="main banner" />
                <div className="small-banner-content position-absolute">
                  <h4>FREE ENGRAVING</h4>
                  <h5>AirPods Max</h5>
                  <p>High-fidelity playback &<br />ultra-low distortion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex flex-wrap justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <div>
                  <h6>Computers & Laptop</h6>
                  <p>6 Items</p>
                </div>
                <img src="images/laptop.jpg" alt="camera" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Cameras & Videos</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>12 Items</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/gaming.jpg" alt="camera" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Headphones</h6>
                  <p>6 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Accessories</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/acc.jpg" alt="camera" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Portable Speakers</h6>
                  <p>6 Items</p>
                </div>
                <img src="images/speaker.jpg" alt="camera" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Home Appliances</h6>
                  <p>6 Items</p>
                </div>
                <img src="images/homeapp.jpg" alt="camera" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/famous-1.jpg" className="img-fluid" alt="famous" />
              <div className="famous-content position-absolute">
                <h5>BIG SCREEN</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From ₹31999 or ₹1333 for 24 mo.*</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/famous-2.jpg" className="img-fluid" alt="famous" />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">STUDIO DISPLAY</h5>
                <h6 className="text-dark">600 nits of brightness.</h6>
                <p className="text-dark">27-inch 5K Retina Display</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/famous-3.jpg" className="img-fluid" alt="famous" />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">SMARTPHONES</h5>
                <h6 className="text-dark">SmartPhone 13 Pro.</h6>
                <p className="text-dark">Now in Green. From ₹79999 or<br />₹3291.67 for 24 mo. footnote*</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/famous-4.jpg" className="img-fluid" alt="famous" />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">HOME SPEAKERS</h5>
                <h6 className="text-dark">Room-filling sound.</h6>
                <p className="text-dark">From ₹31999 or ₹1333 for 24 mo.*</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>

      <Container className="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popualar Products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container class1="marquee-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;