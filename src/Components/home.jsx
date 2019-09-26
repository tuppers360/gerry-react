import React from "react";
import { Link } from "react-router-dom";
import { ThankYou } from "./home/thankyou";

export const Home = () => (
  <React.Fragment>
    <div className="landing">
      <div className="home-wrap">
        <div className="home-inner">
          <img
            src="/images/blackpool_tower_darker_resize.png"
            className="home-inner-img"
            alt=""
          />
        </div>
      </div>
    </div>
    <div className="caption text-center">
      <h1>The</h1>
      <h1>Gerry Richardson</h1>
      <h1>Trust</h1>
      <a className="btn btn-lg btn-primary" href="#mission">
        Our Mission
      </a>
    </div>
    {/* Start Mission Section */}
    <div id="mission" className="offset">
      {/* Start Top Section */}
      <div className="narrow text-center">
        <div className="col-12">
          <h1>Our Mission</h1>
          <p className="lead">
            The trust seeks to promote youth development by supporting young
            people, aged 25 or under, to attend courses and activities of an
            educational, cultural, sporting, adventuresome or character-building
            nature. It is willing to entertain written applications for
            financial assistance from young people living or working within 15
            miles of the town hall in Blackpool, Lancashire.
          </p>
          <Link to="/contact" className="btn btn-secondary btn-sm">
            Contact
          </Link>
          <Link to="/about" className="btn btn-info btn-sm">
            Who are we
          </Link>
        </div>
      </div>
      {/* End Animation Section */}
      {/* Start Jumbotron Section */}
      <div className="jumbotron">
        <div className="narrow">
          <div className="os-animation" data-animation="fadeInUp">
            <h3 className="heading">Stories</h3>
            <div className="heading-underline"></div>
            <h5>Coming Soon</h5>
          </div>
        </div>
        {/* End Narrow */}
      </div>
      {/* End Jumbotron Section */}
    </div>
    {/* End Mission Section */}
    {/* Start Portfolio grid */}
    <div className="row justify-content-center">
      <div className="os-animation" data-animation="fadeInUp">
        <div className="narrow text-center">
          <div className="col-12">
            <p className="lead">
              what you're going to do with love this icon now you've found it?
              Check out our guide on getting started.
            </p>
            <Link className="btn btn-secondary btn-sm" to="/contact">
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
    {/* End of Portfolio Section */}
    <ThankYou />
  </React.Fragment>
);
