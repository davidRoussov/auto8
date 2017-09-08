import React, { Component } from 'react';
import backgroundImage from '../../images/city3.jpg';
import LandingMenuBar from './LandingMenuBar';
import AppFooter from '../AppFooter';

class LandingPage extends Component {
  render() {
    const style = {
      intro: {
        backgroundImage: `url(${backgroundImage })`,
        height: '100vh',
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'table'
      },
      introTitleMessage: {
        backgroundColor: 'rgba(56,56,56,0.7)',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100%',
        padding: '100px',
        color: 'white'
      },
      middle: {
        display: 'table-cell',
        verticalAlign: 'middle'
      },
      about: {
        backgroundColor: '#F9F89F9',
        padding: '40px'
      },
      aboutHeading: {
        margin: '0px',
        textAlign: 'center'
      },
      howItWorksHeading: {
        margin: '0px',
        textAlign: 'center',
        color: 'white'
      },
      howItWorks: {
        backgroundColor: '#2c3e50',
        padding: '40px'
      },
      howItWorksTable: {
        color: 'white'
      },
      text: {
        margin: '0px'
      },
      textWhite: {
        margin: '0px',
        color: 'white'
      },
    };

    return (
      <div>
        <div style={{position: 'absolute', width: '100%'}}><LandingMenuBar/></div>
        <header style={style.intro}>
          <div style={style.middle}>
            <h1 style={style.introTitleMessage}>Intelligent, simplified real estate and property management</h1>
          </div>
        </header>
        <section style={style.about}>
          <h2 style={style.aboutHeading}>About</h2>
          <br/>
          <p style={style.text}>
            Civin is a simplified platform for real-estate buyers and sellers. As much as possible is done for you and there is no need to go through the hassle of hiring a real-estate agent.
            Civin distinguishes itself from other online services with a sophisticated artificial intelligence backbone that will manage the listing and sale of properties, to the financial
            and temporal benefit of all those involved.
          </p>
        </section>
        <section style={style.howItWorks}>
          <h2 style={style.howItWorksHeading}>How It Works</h2>
            <br/>
            <h4 style={style.howItWorksHeading}>Buyers</h4>
            <br/>
            <p style={style.textWhite}>
              Prospective buyers can browse properties without signing up, but if they choose to sign up, our artificial intelligence systems will analyse the user
              and strive to match the user with their desired property. It will offer an intuitive interface for people to seamlessly browse properties, organise inspections and
              sign contracts, without difficulty inconvenience and cost associated with real estate agents.
            </p>
            <br/>
            <h4 style={style.howItWorksHeading}>Sellers</h4>
            <br/>
            <p style={style.textWhite}>
              Sellers sign up for an account and spend a little time submitting the details of their property to the system. Our artificial intelligence systems will then you that 
              data to generate a report for you specifying the optimal prices, how modifying the price will influence selling velocity, and many other
              useful pieces of information that will maximize the value you will receive from the property. This is all completely free, and if our platform happens to successfully
               match you will a suitable buyer, then we will charge a small fee (a tiny fraction of what a real estate agency would charge).
            </p>
            <br/>
        </section>
        <section style={style.about}>
          <h2 style={style.aboutHeading}>Features</h2>
          <br/>
          <ul style={style.text}>
            <li>Optimised selling price recommendations + time frame of expected selling dates</li>
            <li>Much lower fees than traditional real-estate agents</li>
            <li>Intuitive dashboard for managing your property</li>        
          </ul>
        </section>
        <AppFooter/>
      </div>
    )
  }
}

export default LandingPage;