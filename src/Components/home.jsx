import React from "react";
import { Link } from "react-router-dom";

export const Home = () => (
  <React.Fragment>
    <div className="landing">
      <div className="home-wrap">
        <div className="home-inner">
          <img
            src="/images/beachimage_resize.jpg"
            className="home-inner-img"
            alt=""
          />
        </div>
      </div>
    </div>
    <div className="caption text-center">
      <div
        className="os-animation"
        data-animation="bounceInUp"
        data-delay=".6s"
      >
        <h1>Gerry Richardson</h1>
      </div>

      <div
        className="os-animation"
        data-animation="bounceInUp"
        data-delay=".8s"
      >
        <h1>Trust</h1>
      </div>

      <div className="os-animation" data-animation="bounceInUp" data-delay="1s">
        <Link className="btn btn-lg btn-primary" to="#aboutus">
          About Us
        </Link>
        <Link className="btn btn-lg btn-danger" to="#contact">
          Donate
        </Link>
      </div>
    </div>
    <div id="mission" className="container offset">
      <div className="os-animation" data-animation="fadeInUp">
        <div className="text-center">
          <div class="col-12">
            <h1>Our Mission</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, eveniet rerum. Aperiam, debitis tenetur! Eum adipisci,
              saepe, deserunt quod soluta dolores aliquid labore optio dolorum
              unde assumenda in odio eligendi?
            </p>
            <a href="/contact" className="btn btn-secondary btn-sm">
              Contact
            </a>
            <a href="/portfolio" className="btn btn-info btn-sm">
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </React.Fragment>
);
