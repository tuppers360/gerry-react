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
        <h1>The Gerry Richardson Trust</h1>
      </div>
      <div className="os-animation" data-animation="bounceInUp" data-delay="1s">
        <a className="btn btn-lg btn-primary" href="#mission">
          Our Mission
        </a>
        <Link className="btn btn-lg btn-danger" to="#mission">
          Donate
        </Link>
      </div>
    </div>
    {/* Start Mission Section */}
    <div id="mission" className="narrow offset">
      {/* Start Animation Section */}
      <div className="os-animation" data-animation="fadeInUp">
        <div className="narrow text-center">
          <div className="col-12">
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
      {/* End Animation Section */}
      {/* Start Jumbotron Section */}
      <div className="jumbotron">
        <div className="narrow"></div> {/* End Narrow */}
      </div>
      {/* End Jumbotron Section */}
    </div>
    {/* End Mission Section */}
    <br />
    <br /> <br />
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
    <br /> <br />
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
