import React, {Component} from 'react';

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
                  <h4>Follow Me</h4>
                </div>
                <div class="footer-social">
                  <a href="#"><i class="fa fa-facebook"></i></a>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-dribbble"></i></a>
                  <a href="#"><i class="fa fa-behance"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="row footer-bottom justify-content-center">
            <p class="col-lg-8 col-sm-12 footer-text">
              Copyright &copy;{year} All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a></p>
          </div>
        </div>
      </footer>
    );
  };
}