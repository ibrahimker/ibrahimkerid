import React,{Component} from 'react';

import {Helmet} from "react-helmet";

export default class PageNotFound extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Ibam's Site | 404</title>
          <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,400,300,500,600,700" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700,900" rel="stylesheet"/>
        </Helmet>
        <h1>Page Not Found | 404</h1>
      </div>
    );
  }
}