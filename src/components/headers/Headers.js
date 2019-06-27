import React, {Component} from 'react';
import { Link } from "react-router-dom";
import routes from '../../router/Routes';
import logo from '../../assets/img/logo.png';

export default class Header extends Component {
  renderMenu = () => {
    const path = window.location.pathname;
    const menu = routes.map((value,index) => {
      return (
        <li key={index}>
          <Link className={(path === value.path) ? 'active' : ''} to={value.path}>{value.name}</Link>
        </li>
      )
    });
    return menu;
  }

  render() {
    return (
      <header id="header">
        <div className="container main-menu">
          <div className="row align-items-center d-flex">
            <div id="logo">
              <Link to="/">
                <img src={logo} alt="logo" title="logo"/>
              </Link>
            </div>
            <nav id="nav-menu-container">
              <ul className="nav-menu">
                {this.renderMenu()}
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