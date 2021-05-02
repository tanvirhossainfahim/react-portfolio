import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPlay,
} from "react-icons/fa";
const Banner = () => {
  const [state] = useState({
    title: "Hi! I am Tanvir Hossain Fahim",
    text: 'A Junior web developer',
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
                  <a href="https://drive.google.com/file/d/1bNcicZdy6__Nw1Dkf6J4TnK2BWL3f1ND/view?usp=sharing" className="btn btn-outline">
                    Download Resume
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <a href="https://www.linkedin.com/in/tanvir-hossain-fahim-2066a9200/" className="btn btn-smart">
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
