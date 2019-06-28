import React, {Component} from 'react';
import bannerImage from '../../assets/img/ibam5.png';

export default class Banner extends Component {
  render() {
    return (
      // <section className="home-banner-area">
      <section>
        <div className="container">
          <div className="row fullscreen d-flex align-items-center">
            <div className="banner-content col-lg-7 col-md-12 justify-content-center ">
              <div className="me wow fadeInDown" data-wow-duration="1s" data-wow-delay="1.2s">It's me</div>
              <h1 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.7s">Ibrahim Nurandita</h1>
              <div className="designation mb-50 wow fadeInUp" data-wow-duration="1s" data-wow-delay="2.1s">
                <span className="designer">Software </span>
                <span className="developer">Engineer</span>
              </div>
              <a href="#contact" className="primary-btn" data-text="Hire Me">
                <span>H</span>
                <span>i</span>
                <span>r</span>
                <span>e</span>
                <span> </span>
                <span>M</span>
                <span>e</span>
              </a>
            </div>
            {/* <div className="banner-img col-lg-6 col-md-6 align-self-end">
              <img className="img-fluid" src={bannerImage} alt=""/>
            </div> */}
            <div className="banner-content col-lg-5 col-md-5 align-self-end">
              <img className="img-fluid" src={bannerImage} alt=""/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}