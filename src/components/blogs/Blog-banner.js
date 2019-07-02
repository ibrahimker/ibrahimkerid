import React, {Component} from 'react';

export default class BlogBanner extends Component {
  render() {
    return (
      <section className="banner-area relative">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="about-content col-lg-12">
              <h1 className="text-white">
                Blog Home
              </h1>
              <p className="link-nav">
                <span className="box">
                  <a href="index.html">Home </a>
                  <a href="blog-home.html">Blog</a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
}