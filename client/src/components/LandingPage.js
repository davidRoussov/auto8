import React, { Component } from 'react';
import backgroundImage from '../../public/city3.jpg';
import LandingMenuBar from './LandingMenuBar';

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
        <section>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rutrum finibus est, non cursus orci mattis eu. Donec eleifend, tellus eget sollicitudin rutrum, nibh lacus dignissim ex, non malesuada dui orci vel neque. Nulla diam ipsum, vulputate eget odio in, tristique consequat neque. Nullam consequat nisl nibh, ut vehicula elit auctor sed. Suspendisse sed finibus mi, ac tincidunt erat. In hac habitasse platea dictumst. Duis eu congue augue. Vestibulum mattis rutrum sagittis. Praesent semper vitae erat vitae faucibus. Nunc et nisi facilisis, dignissim elit nec, facilisis quam. Maecenas at nibh magna.

Praesent eget vestibulum dolor. Proin cursus, diam nec rutrum efficitur, lorem libero euismod eros, ut mollis metus diam vel ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec vestibulum, enim eu scelerisque convallis, est dolor ornare elit, viverra imperdiet dui libero nec dui. Phasellus id sem sit amet ipsum congue scelerisque quis vel ipsum. Proin rhoncus placerat nulla, ac euismod velit euismod at. In nec sem diam. Pellentesque risus tortor, viverra nec nibh vel, sagittis iaculis mauris.

Phasellus vestibulum lacus in lectus suscipit, a dapibus nulla cursus. Vestibulum viverra efficitur metus in varius. Nullam in massa ac justo cursus posuere at vel felis. Fusce sed erat sed eros malesuada laoreet. Nunc vel libero porttitor, dictum leo at, congue ipsum. Donec at nisl sapien. Proin suscipit mi maximus enim eleifend mollis. Praesent ante ligula, pulvinar id egestas eu, sagittis nec enim. Proin gravida eros nulla, tempor cursus est semper eget. In hac habitasse platea dictumst.

Proin dapibus bibendum eros, quis scelerisque lectus sagittis id. Sed sit amet turpis sed ex tincidunt consequat tempus vel purus. Cras ornare convallis neque, a pretium purus aliquet vel. Praesent eget commodo felis. Maecenas sed convallis ex. Nulla posuere nulla eget mollis egestas. Aenean aliquam ultricies faucibus.

Etiam vulputate turpis quis venenatis viverra. Aliquam pharetra eget felis at elementum. Phasellus condimentum enim a viverra varius. Sed ut varius felis, quis lobortis risus. Ut et luctus dui, quis ullamcorper arcu. Vivamus tempus, odio nec rhoncus feugiat, leo lorem luctus arcu, non condimentum metus libero id eros. Etiam in erat id metus bibendum consequat. Pellentesque convallis est id eleifend ornare. Proin venenatis ligula sapien, eget viverra dui hendrerit vitae. Suspendisse vel odio dapibus, scelerisque tellus eget, pellentesque mi. Cras ut suscipit nisi. Curabitur condimentum efficitur massa a aliquet.
          </p>
        </section>
      </div>
    )
  }
}

export default LandingPage;