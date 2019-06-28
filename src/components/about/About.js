import React, {Component} from 'react';
import aboutImage from '../../assets/img/ibam.jpg';

export default class About extends Component {
  render() {
    return (
      <section className="about-area section-gap">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-4 about-left">
              <img className="img-fluid" src={aboutImage} alt="" style={{borderRadius:40+'px',height:400+'px'}}/>
            </div>
            <div className="col-lg-6 col-md-12 about-right">
              <div className="section-title">
                <h2>about myselt</h2>
              </div>
              <div className="mb-50 wow fadeIn" data-wow-duration=".8s">
                <p>
                  inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the
                  workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. inappropriate behavior
                  is often laughed. inappropriate behavior is often laughed off as “boys will be boys,” women face higher.
                </p>
                <p>That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. inappropriate behavior is often
                  laughed.
                </p>
              </div>
              <a href="https://linkedin.com/in/ibrahimisbandiputra" target="_blank" rel="noopener noreferrer" className="primary-btn white" data-text="More Info">
                <span>M</span>
                <span>o</span>
                <span>r</span>
                <span>e</span>
                <span> </span>
                <span>I</span>
                <span>n</span>
                <span>f</span>
                <span>o</span>
              </a>
              <a href={process.env.PUBLIC_URL + '/file/resume.pdf'} target="_blank" rel="noopener noreferrer" className="primary-btn" data-text="Resume">
                <span>R</span>
                <span>e</span>
                <span>s</span>
                <span>u</span>
                <span>m</span>
                <span>e</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };
}