import React, {Component} from 'react';

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
                <li className=""><a className="active" href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="portfolio.html">Portfolio</a></li>
                <li className="menu-has-children"><a href="#">Pages</a>
                  <ul>
                    <li><a href="elements.html">Elements</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="services.html">Service</a></li>
                    <li><a href="portfolio-details.html">Portfolio Details</a></li>
                  </ul>
                </li>
                <li className="menu-has-children"><a href="">Blog</a>
                  <ul>
                    <li><a href="blog-home.html">Blog Home</a></li>
                    <li><a href="blog-single.html">Blog Single</a></li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  };
};