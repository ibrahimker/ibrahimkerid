import React, {Component} from 'react';
import logo from '../../assets/img/logo.png';

export default class Footer extends Component {
  render() {
    const year = new Date().getFullYear();
    return (
      <footer className="footer-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="footer-top flex-column">
                <div className="footer-logo">
                  <a href="#">
                    <img src={logo} alt=""/>
                  </a>
                  <h4>Follow Me</h4>
                </div>
                <div className="footer-social">
                  <a href="https://facebook.com/ibrahimker" target="_blank"><i className="fa fa-facebook"></i></a>
                  <a href="https://twitter.com/ibrahimker" target="_blank"><i className="fa fa-twitter"></i></a>
                  <a href="https://github.com/ibrahimker" target="_blank"><i className="fa fa-github"></i></a>
                  <a href="https://linkedin.com/in/ibrahimisbandiputra" target="_blank"><i className="fa fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="row footer-bottom justify-content-center">
            <p className="col-lg-8 col-sm-12 footer-text">
              Copyright &copy;{year} All rights reserved | made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://ibrahimker.id" target="_blank">Ibrahim Nurandita Isbandiputra</a></p>
          </div>
        </div>
      </footer>
    );
  };
}