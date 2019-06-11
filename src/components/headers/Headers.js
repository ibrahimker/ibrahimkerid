import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from '../../assets/img/logo.png';

export default class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="container main-menu">
          <div className="row align-items-center d-flex">
            <div id="logo">
              <a href="index.html"><img src={logo} alt="" title="" /></a>
            </div>
            <nav id="nav-menu-container">
              <ul className="nav-menu">
                <li className="">
                  <Link className="active" to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                {/* <li className="menu-has-children"><a href="#">Pages</a>
                  <ul>
                    <li><a href="elements.html">Elements</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="services.html">Service</a></li>
                    <li><a href="portfolio-details.html">Portfolio Details</a></li>
                  </ul>
                </li> */}
                {/* <li className="menu-has-children"><a href="">Blog</a>
                  <ul>
                    <li><a href="blog-home.html">Blog Home</a></li>
                    <li><a href="blog-single.html">Blog Single</a></li>
                  </ul>
                </li> */}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  };
};