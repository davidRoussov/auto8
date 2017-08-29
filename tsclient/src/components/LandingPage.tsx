import React, { Component } from 'react';

import LandingMenuBar from './LandingMenuBar';
const backgroundImage = require('../images/city3.jpg');

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
      footer: {
        backgroundColor: '#617487',
        textAlign: 'center'
      },
      footerText: {
        margin: '0px',
        color: '#B0B0B0',
        paddingTop: '20px',
        paddingBottom: '20px'
      },
      bigfoot: {
        backgroundColor: '#3d3d3d',
        padding: '40px'
      },
      howItWorks: {
        backgroundColor: '#2c3e50',
        padding: '40px'
      },
      pee: {
        margin: '0px'
      },
      peeWhite: {
        margin: '0px',
        color: 'white'
      }
    };
    
    return (
      <div>
        <LandingMenuBar/>
        <header style={style.intro}>
          <div style={style.middle}>
            <h1 style={style.introTitleMessage}>Welcome. This is a title.</h1>
          </div>
        </header>
        <section style={style.about}>
          <h2 style={style.aboutHeading}>About</h2>
          <br/>
          <p style={style.pee}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rutrum finibus est, non cu
          rsus orci mattis eu. 
          Donec eleifend, tellus eget sollicitudin rutrum, nibh lacus dignissim ex, non malesuada dui orci vel neque.
           Nulla diam ipsum, vulputate eget odio in, tristique consequat neque. Nullam consequat nisl ni
           bh, ut vehicula elit auctor sed. 
           Suspendisse sed finibus mi, ac tincidunt erat. In hac habitasse platea dictumst. Duis eu congue augue. 
           Vestibulum mattis rutrum sagittis. Praesent semper vitae erat vitae faucibus. 
           Nunc et nisi facilisis, dignissim elit nec, facilisis quam. Maecenas at nibh magna. 
           Praesent eget vestibulum dolor. Proin cursus, diam nec rutrum efficitur, 
           lorem libero euismod eros, ut mollis metus diam vel ex.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
            Donec vestibulum, enim eu scelerisque convallis, est dolor ornare elit, viverra imperdiet dui 
            libero nec dui. Phasellus id sem sit amet ipsum congue scelerisque quis vel ipsum. Proin rhoncu
            s placerat nulla, ac euismod velit euismod at. In nec sem diam. Pellentesque risus tortor, viv
            erra nec nibh vel, sagittis iaculis mauris.Phasellus vestibulum lacus in lectus suscipit, a dapib
            us nulla cursus. Vestibulum viverra efficitur metus in varius. Nullam in massa ac justo cursus po
            suere at vel felis. Fusce sed erat sed eros malesuada laoreet. Nunc vel libero porttitor, dictum 
            leo at, congue ipsum. Donec at nisl sapien. Proin suscipit mi maximus enim eleifend mollis. Praese
            nt ante ligula, pulvinar id egestas eu, sagittis nec enim. Proin gravida eros nulla, tempor curs
            us est semper eget. In hac habitasse platea dictumst.
          Proin dapibus bibendum eros, quis scelerisque lectus sagittis id. Sed sit amet turpis sed ex t
          incidunt consequ
          at tempus vel purus. Cras ornare convallis neque, a pretium purus aliquet vel. Praesent eget commodo felis.
           Maecenas sed convallis ex. Nulla posuere nulla eget mollis egestas. Aenean aliquam ultricies faucibus.
            Etiam vulputate turpis quis venenatis viverra. Aliquam pharetra eget felis at elementum. Phasel
            lus condimentum eni
              m a viverra varius. Sed ut varius felis, quis lobortis risus. Ut et luctus dui, quis ullamcor
              per arcu. Vivamus tempus,
               odio nec rhoncus feugiat, leo lorem luctus arcu, non condimentum metus libero id eros. E
               tiam in erat id metus bib
               endum consequat. Pellentesque convallis est id eleifend ornare. Proin venenatis ligula sapien, 
               eget viverra d
               ui hendrerit vitae. Suspendisse vel odio dapibus, scelerisque tellus eget, pellentesque mi. 
               Cras ut suscip
               it nisi. Curabitur condimentum efficitur massa a aliquet.
          </p>
        </section>
        <section style={style.howItWorks}>
          <h2 style={style.howItWorksHeading}>How It Works</h2>
            <br/>
            <p style={style.peeWhite}> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, felis eget posuere tinc
            idunt, justo diam accumsan odio, blandit eleifend orci dolor sit amet arcu. Duis suscipit ornar
            e lorem, sed malesuada lectus vehicula ac. Integer congue odio vitae metus iaculis bibendum vita
            e eget augue. Praesent vestibulum sit amet nunc semper interdum. Nulla facilisi. Maecenas sed te
            mpus urna. Integer non lacus nec nulla imperdiet tincidunt.

Suspendisse aliquam rutrum arcu. Vestibulum eu nibh tristique, hendrerit leo a, vestibulum libero. Vestibu
lum erat magna, dictum sit amet laoreet eu, posuere non arcu. Aliquam a volutpat felis. Fusce massa neque, s
uscipit sed massa iaculis, rhoncus auctor dui. Morbi tempus est elit, id commodo velit vulputate ut. Donec 
eget libero augue. Ut tempor scelerisque gravida. Nulla et ligula eget justo mollis sagittis. Nunc fermentu
m id leo molestie vestibulum. Sed at feugiat tellus, et pulvinar tortor. Aliquam posuere nec libero eget gr
avida. Ut nec scelerisque mauris, tempor condimentum leo. Phasellus vulputate eros aliquet massa sollicitud
in dignissim. Maecenas laoreet pulvinar sem quis fringilla.

Sed eget lacinia nisl. Nam a quam a elit consequat commodo a a tortor. Vivamus ultricies pretium faucibus
. Praesent nec pulvinar elit. Cras commodo malesuada eleifend. Mauris viverra turpis et elementum imperdiet. F
usce eleifend pulvinar enim, ut blandit lorem sagittis ac. Sed vitae congue augue, non dictum lacus. Nulla
 molestie lorem at ante faucibus commodo. Phasellus in sem eu quam varius tincidunt ut vitae nunc. Curabi
 tur et dui vel velit accumsan vestibulum. Nulla facilisi. Aliquam aliquam ultrices pretium.

Aliquam accumsan dolor tincidunt, pulvinar ante id, scelerisque lacus. Nullam malesuada, urna at condiment
um lobortis, justo libero aliquam eros, nec tristique velit eros sed mauris. Quisque lobortis ligula sit a
met ullamcorper sodales. Nullam euismod tellus id rutrum aliquet. Vestibulum auctor, sapien in mattis lao
reet, ex neque varius ex, eget posuere dui arcu sit amet nulla. Donec rutrum risus sit amet massa vehicul
a dignissim. Donec porta leo ac gravida commodo. Maecenas orci metus, elementum at magna in, mollis accumsan
 erat. Ut quis massa elit. Donec nec facilisis mi, ac facilisis quam. Aliquam dapibus diam nec tellus variu
 s, vel maximus lacus mollis. Vestibulum viverra, justo sit amet porta posuere, diam ipsum dictum justo, no
 n luctus tortor quam sit amet urna. Donec fermentum sapien at nibh sollicitudin finibus. Nulla fermentum m
 aximus enim a eleifend. Etiam commodo, urna ac rhoncus bibendum, dui lorem finibus dolor, tristique rutrum
  turpis leo eget tortor.

Morbi vulputate felis vel pulvinar feugiat. Nam tellus erat, posuere eget dui accumsan, euismod malesuada 
lorem. Pellentesque in consequat diam. Praesent nec est sed tortor aliquet vulputate. Nam ullamcorper elit
 non facilisis vulputate. Pellentesque a cursus risus, id pellentesque lorem. Sed quis sapien vitae felis 
 tristique tristique fermentum sit amet lectus. Sed sed nisl condimentum, vestibulum risus at, viverra mas
 sa. Maecenas dapibus laoreet neque, non consectetur mi sagittis tincidunt. Morbi placerat consectetur lore
 m, ac cursus mi elementum in. Aenean molestie ex id lectus condimentum porttitor. Phasellus vulputate elem
 entum blandit. Duis pellentesque felis id mauris faucibus, non tincidunt diam semper. Lorem ipsum dolor si
 t amet, consectetur adipiscing elit.   
            </p>    
        </section>
        <section style={style.about}>
          <h2 style={style.aboutHeading}>Something Promotional?</h2>
          <br/>
          <p style={style.pee}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rutrum finibus est, non cursu
          s orci mattis eu. Donec eleifend, tellus eget sollicitudin rutrum, nibh lacus dignissim ex, n
          on malesuada dui orci vel neque. Nulla diam ipsum, vulputate eget odio in, tristique consequa
          
          t neque. Nullam consequat nisl nibh, ut vehicula elit auctor sed. Suspendisse sed finibus mi,
           ac tincidunt erat. In hac habitasse platea dictumst. Duis eu congue augue. Vestibulum mattis
            rutrum sagittis. Praesent semper vitae erat vitae faucibus. Nunc et nisi facilisis, digniss
            im elit nec, facilisis quam. Maecenas at nibh magna.

Praesent eget vestibulum dolor. Proin cursus, diam nec rutrum efficitur, lorem libero euismod eros, ut 
mollis metus diam vel ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubi
ia Curae; Donec vestibulum, enim eu scelerisque convallis, est dolor ornare elit, viverra imperdiet dui 
libero nec dui. Phasellus id sem sit amet ipsum congue scelerisque quis vel ipsum. Proin rhoncus placer
at nulla, ac euismod velit euismod at. In nec sem diam. Pellentesque risus tortor, viverra nec nibh vel
, sagittis iaculis mauris.

Phasellus vestibulum lacus in lectus suscipit, a dapibus nulla cursus. Vestibulum viverra efficitur metu
s in varius. Nullam in massa ac justo cursus posuere at vel felis. Fusce sed erat sed eros malesuada lao
reet. Nunc vel libero porttitor, dictum leo at, congue ipsum. Donec at nisl sapien. Proin suscipit mi ma
ximus enim eleifend mollis. Praesent ante ligula, pulvinar id egestas eu, sagittis nec enim. Proin gravi
da eros nulla, tempor cursus est semper eget. In hac habitasse platea dictumst.

Proin dapibus bibendum eros, quis scelerisque lectus sagittis id. Sed sit amet turpis sed ex tincidunt c
onsequat tempus vel purus. Cras ornare convallis neque, a pretium purus aliquet vel. Praesent eget commo
do felis. Maecenas sed convallis ex. Nulla posuere nulla eget mollis egestas. Aenean aliquam ultricies fa
ucibus.

Etiam vulputate turpis quis venenatis viverra. Aliquam pharetra eget felis at elementum. Phasellus condim
entum enim a viverra varius. Sed ut varius felis, quis lobortis risus. Ut et luctus dui, quis ullamcorpe
r arcu. Vivamus tempus, odio nec rhoncus feugiat, leo lorem luctus arcu, non condimentum metus libero i
d eros. Etiam in erat id metus bibendum consequat. Pellentesque convallis est id eleifend ornare. Proi
n venenatis ligula sapien, eget viverra dui hendrerit vitae. Suspendisse vel odio dapibus, scelerisque 
tellus eget, pellentesque mi. Cras ut suscipit nisi. Curabitur condimentum efficitur massa a aliquet.
          </p>
        </section>
        <section style={style.bigfoot}>
          <p style={style.peeWhite}>
          Sed eget lacinia nisl. Nam a quam a elit consequat commodo a a tortor. Vivamus ultricies pretium faucibus. 
          Praesent nec pulvinar elit. Cras commodo malesuada eleifend. Mauris viverra turpis et elementum imperdiet.
           Fusce eleifend pulvinar enim, ut blandit lorem sagittis ac. Sed vitae congue augue, non dictum lacus. Nu
           lla molestie lorem at ante faucibus commodo. Phasellus in sem eu quam varius tincidunt ut vitae nunc. Cu
           rabitur et dui vel velit accumsan vestibulum. Nulla facilisi. Aliquam aliquam ultrices pretium.
          </p>
        </section>
        <footer style={style.footer}>
          <p style={style.footerText}>Ⓒ 2017 Autom8.</p>
        </footer>
      </div>
    );
  }
}

export default LandingPage;