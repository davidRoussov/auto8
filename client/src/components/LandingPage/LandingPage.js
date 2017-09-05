import React, { Component } from 'react';
import backgroundImage from '../../../public/city3.jpg';
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
        <LandingMenuBar/>
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
            Civin distinguishes itself from other online services with a sophisticated artificial intelligence backbone that will manage the listing and sale of properties, to the finacial
            and temporal benefit of all those involved.
          </p>
        </section>
        <section style={style.howItWorks}>
          <h2 style={style.howItWorksHeading}>How It Works</h2>
            <br/>
            <p style={style.textWhite}> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, felis eget posuere tincidunt, justo diam accumsan odio, blandit eleifend orci dolor sit amet arcu. Duis suscipit ornare lorem, sed malesuada lectus vehicula ac. Integer congue odio vitae metus iaculis bibendum vitae eget augue. Praesent vestibulum sit amet nunc semper interdum. Nulla facilisi. Maecenas sed tempus urna. Integer non lacus nec nulla imperdiet tincidunt.

Suspendisse aliquam rutrum arcu. Vestibulum eu nibh tristique, hendrerit leo a, vestibulum libero. Vestibulum erat magna, dictum sit amet laoreet eu, posuere non arcu. Aliquam a volutpat felis. Fusce massa neque, suscipit sed massa iaculis, rhoncus auctor dui. Morbi tempus est elit, id commodo velit vulputate ut. Donec eget libero augue. Ut tempor scelerisque gravida. Nulla et ligula eget justo mollis sagittis. Nunc fermentum id leo molestie vestibulum. Sed at feugiat tellus, et pulvinar tortor. Aliquam posuere nec libero eget gravida. Ut nec scelerisque mauris, tempor condimentum leo. Phasellus vulputate eros aliquet massa sollicitudin dignissim. Maecenas laoreet pulvinar sem quis fringilla.

Sed eget lacinia nisl. Nam a quam a elit consequat commodo a a tortor. Vivamus ultricies pretium faucibus. Praesent nec pulvinar elit. Cras commodo malesuada eleifend. Mauris viverra turpis et elementum imperdiet. Fusce eleifend pulvinar enim, ut blandit lorem sagittis ac. Sed vitae congue augue, non dictum lacus. Nulla molestie lorem at ante faucibus commodo. Phasellus in sem eu quam varius tincidunt ut vitae nunc. Curabitur et dui vel velit accumsan vestibulum. Nulla facilisi. Aliquam aliquam ultrices pretium.

Aliquam accumsan dolor tincidunt, pulvinar ante id, scelerisque lacus. Nullam malesuada, urna at condimentum lobortis, justo libero aliquam eros, nec tristique velit eros sed mauris. Quisque lobortis ligula sit amet ullamcorper sodales. Nullam euismod tellus id rutrum aliquet. Vestibulum auctor, sapien in mattis laoreet, ex neque varius ex, eget posuere dui arcu sit amet nulla. Donec rutrum risus sit amet massa vehicula dignissim. Donec porta leo ac gravida commodo. Maecenas orci metus, elementum at magna in, mollis accumsan erat. Ut quis massa elit. Donec nec facilisis mi, ac facilisis quam. Aliquam dapibus diam nec tellus varius, vel maximus lacus mollis. Vestibulum viverra, justo sit amet porta posuere, diam ipsum dictum justo, non luctus tortor quam sit amet urna. Donec fermentum sapien at nibh sollicitudin finibus. Nulla fermentum maximus enim a eleifend. Etiam commodo, urna ac rhoncus bibendum, dui lorem finibus dolor, tristique rutrum turpis leo eget tortor.

Morbi vulputate felis vel pulvinar feugiat. Nam tellus erat, posuere eget dui accumsan, euismod malesuada lorem. Pellentesque in consequat diam. Praesent nec est sed tortor aliquet vulputate. Nam ullamcorper elit non facilisis vulputate. Pellentesque a cursus risus, id pellentesque lorem. Sed quis sapien vitae felis tristique tristique fermentum sit amet lectus. Sed sed nisl condimentum, vestibulum risus at, viverra massa. Maecenas dapibus laoreet neque, non consectetur mi sagittis tincidunt. Morbi placerat consectetur lorem, ac cursus mi elementum in. Aenean molestie ex id lectus condimentum porttitor. Phasellus vulputate elementum blandit. Duis pellentesque felis id mauris faucibus, non tincidunt diam semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit.   
            </p>    
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