import React, {Component} from 'react';
import bannerImage from '../../assets/img/ibam5.png';

import { Query } from "react-apollo";
import gql from "graphql-tag";
import {Cube} from 'react-preloaders';

const BANNER_QUERY = gql`
{
  banner{
    name
    job1
    job2
  }
}
`;

export default class Banner extends Component {
  render() {
    return (
      <Query query={BANNER_QUERY}>
        {({ data,loading, error }) => {
          if(!loading) {
            return (
              <section>
                <div className="container">
                  <div className="row fullscreen d-flex align-items-center">
                    <div className="banner-content col-lg-7 col-md-12 justify-content-center ">
                      <div className="me wow fadeInDown" data-wow-duration="1s" data-wow-delay="1.2s">It's me</div>
                      <h1 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.7s">{(data) ? data.banner.name : 'Ibrahim Nurandita'}</h1>
                      <div className="designation mb-50 wow fadeInUp" data-wow-duration="1s" data-wow-delay="2.1s">
                        <span className="designer">{(data) ? data.banner.job1 : 'Software'} </span>
                        <span className="developer">{(data) ? data.banner.job2 : 'Developer'}</span>
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
                    <div className="banner-content col-lg-5 col-md-5 align-self-end">
                      <img className="img-fluid" src={bannerImage} alt=""/>
                    </div>
                  </div>
                </div>
              </section>
            ) 
          }
          else {
            return <Cube color='#e45447'/>;
          }   
        }}
      </Query>
    );
  }
}