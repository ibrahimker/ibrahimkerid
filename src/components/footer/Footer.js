import React, {Component} from 'react';
import logo from '../../assets/img/logo.png';

export default class Footer extends Component {
  render() {
    const year = new Date().getFullYear();
    return (
      <footer class="footer-area">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-12">
              <div class="footer-top flex-column">
                <div class="footer-logo">
                  <a href="#">
                    <img src={logo} alt=""/>
                  </a>
                  <h4>Follow Me</h4>
                </div>
                <div class="footer-social">
                  <a href="https://facebook.com/ibrahimker" target="_blank"><i class="fa fa-facebook"></i></a>
                  <a href="https://twitter.com/ibrahimker" target="_blank"><i class="fa fa-twitter"></i></a>
                  <a href="https://github.com/ibrahimker" target="_blank"><i class="fa fa-github"></i></a>
                  <a href="https://linkedin.com/in/ibrahimisbandiputra" target="_blank"><i class="fa fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="row footer-bottom justify-content-center">
            <p class="col-lg-8 col-sm-12 footer-text">
              Copyright &copy;{year} All rights reserved | made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://ibrahimker.id" target="_blank">Ibrahim Nurandita Isbandiputra</a></p>
          </div>
        </div>
      </footer>
    );
  };
}