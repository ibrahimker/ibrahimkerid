import React from 'react';
import './assets/css/linearicons.css';
import './assets/css/font-awesome.min.css';
import './assets/css/bootstrap.css';
import './assets/css/magnific-popup.css';
import './assets/css/nice-select.css';
import './assets/css/animate.min.css';
import './assets/css/main.css';

// import Preloader from './components/preloader/Preloader';
import Header from './components/headers/Headers';
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';

import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Ibam's Site</title>
        <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,400,300,500,600,700" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700,900" rel="stylesheet"/>
      </Helmet>
      {/* <Preloader/> */}
      <Header/>
      <Banner/>
      <Footer/>
    </div>
  );
}

export default App;
