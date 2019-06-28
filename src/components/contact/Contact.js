import React, {Component} from 'react';

export default class Contact extends Component {
  render() {
    return (
      <section id="contact" className="contact-area section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="contact-title">
                <h2>Contact Me</h2>
                <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see
                  some for as low as $.17 each.</p>
              </div>
            </div>
          </div>
    
          <div className="row mt-80">
            <div className="col-lg-4 col-md-4">
              <div className="contact-box">
                <h4>+62 856 9267 8181</h4>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="contact-box">
                <h4>ibrahim.nurandita@gmail.com</h4>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="contact-box">
                <h4>ibrahimker.id</h4>
              </div>
            </div>
          </div>
    
          <div className="row">
            <div className="col-lg-12 text-center">
              <a href="#" className="primary-btn mt-50" data-text="Hire Me">
                <span>H</span>
                <span>i</span>
                <span>r</span>
                <span>e</span>
                <span> </span>
                <span>M</span>
                <span>e</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };
}