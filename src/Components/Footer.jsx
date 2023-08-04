import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";
export default function Footer() {
  return (
    <footer className="footer mt-3">
      <div className="container">
        <div className="row pt-4">
          <div className="col">
            <p className="text-uppercase fw-bold ">social media</p>
            <div className="py-2">
              <BsFacebook size="30" /> Facebook
            </div>
            <div className="py-2">
              <BsTwitter size="30" /> Twitter
            </div>
            <div className="py-2">
              <BsInstagram size="30" /> Instagram
            </div>
            <div className="py-2">
              <BsWhatsapp size="30" /> Whatsapp
            </div>
          </div>
          <div className="col ">
            <p className="text-uppercase fw-bold ">About Winter Hoods</p>
            <p>Terms & Condition</p>
            <p>Privacy Policy</p>
            <p>Privacy </p>
            <p>Staff Portal </p>
          </div>

          <div className="col">
            <p className="text-uppercase fw-bold ">Contact us</p>
            <form>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="John Doe"
                />
              </div>
              <div class="mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div class="d-grid gap-2">
                <button type="submit" class="btn btn-secondary mb-3">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
