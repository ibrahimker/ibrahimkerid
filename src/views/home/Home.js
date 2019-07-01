import React,{Component} from 'react';
import '../../assets/css/linearicons.css';
import '../../assets/css/font-awesome.min.css';
import '../../assets/css/bootstrap.css';
import '../../assets/css/magnific-popup.css';
import '../../assets/css/nice-select.css';
import '../../assets/css/animate.min.css';
import '../../assets/css/main.css';

import Header from '../../components/headers/Headers';
import Banner from '../../components/banner/Banner';
import About from '../../components/about/About';
import Works from '../../components/works/Works';
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';
import JobHistory from '../../components/jobhistory/JobHistory';
import {Cube} from 'react-preloaders';

import {Helmet} from "react-helmet";

import { graphql,Query } from "react-apollo";
import gql from "graphql-tag";

const QUERY = gql`
{
  todos {
    id
    text
    user {
      id
      name
    }
  }
}
`;

export default class Home extends Component {
  componentDidMount() {
    setTimeout(()=>{
      const element = document.getElementById('preloader');
      if(element != null) {
        element.className += "close";
      }
    },500);
  }

  render() {
    return (
      <Query query={QUERY} returnPartialData={true}>
        {({ data,loading, error }) => {
        console.log(data);
        console.log(error);
        if (loading) {
          return <Cube color='#e45447'/>;
        }
        else {
          return (
            <div className="App">
              <Helmet>
                <title>Ibam's Site | Home</title>
                <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,400,300,500,600,700" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700,900" rel="stylesheet"/>
              </Helmet>
              <Cube color='#e45447'/>
              <Header/>
              <Banner/>
              <About/>
              <Works/>
              <JobHistory/>
              <Contact/>
              <Footer/>
            </div>
          );
        }
        }}
      </Query>
    );
  }
}