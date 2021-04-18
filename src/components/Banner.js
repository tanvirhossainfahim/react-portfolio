import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPlay,
} from "react-icons/fa";
const Banner = () => {
  const [state] = useState({
    title: "I am Ariyan Al Fahim",
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, nemo.',
    image: "/images/profile1.png",
  });
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
                  <li>
                    <a href="https://www.facebook.com/alfahim.5322/"><FaFacebookF className="headerIcon" /></a>
                  </li>
                  <li>
                    <a href="#Twiter"><FaTwitter className="headerIcon" /></a>
                  </li>
                  
                  <li>
                    <a href="https://www.instagram.com/ariyan_al_fa_him/"><FaInstagram className="headerIcon" /></a>
                  </li>
                </ul>
                <h1>{state.title}</h1>
                <p>{state.text}</p>
                <div className="header__buttons">
                  <a href="/about" className="btn btn-outline">
                    Click To Know More
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <a href="#play" className="btn btn-smart">
                    <FaPlay className="play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img">
              <img style={{width:"500px", height:"500px"}} src={state.image} alt="man" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
