import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiOutlineHome } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import Container from "../components/Container";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.063549837603!2d76.55530431497657!3d30.772795781623252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ffb2169dd8c69%3A0xcd125f40bd38a52!2sChandigarh%20university!5e0!3m2!1sen!2sin!4v1675058470781!5m2!1sen!2sin"
              width="600" height="450" className="border-0 w-100"
              allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h3 className="contact-title">Contact</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input type="text" className="form-control" placeholder="Name" />
                  </div>
                  <div>
                    <input type="eamil" className="form-control" placeholder="Email" />
                  </div>
                  <div>
                    <input type="tel" className="form-control" placeholder="Phone Number" />
                  </div>
                  <div>
                    <textarea name="" id="" className="w-100 form-control"
                      cols="30" rows="4"
                      placeholder="Comments"></textarea>
                  </div>
                  <div>
                    <button className="button border-0">Submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4">Get in touch with Us</h3>
                <div>
                  <ul className="ps-0">
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineHome className="fs-5" />
                      <address className="mb-0">Chandigarh University, Mohali, Punjab</address>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BiPhoneCall className="fs-5" />
                      <a href="tel:+91 7700818886">+91 7700818886</a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineMail className="fs-5" />
                      <a href="mailto:20bcs9713@cuchd.in">20bcs9713@cuchd.in</a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BsInfoCircle className="fs-5" />
                      <p className="mb-0">Monday - Friday 10 AM - 8PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;