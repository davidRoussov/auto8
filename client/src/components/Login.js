import React, { Component } from 'react';
import { FormControl, FormGroup, Button } from 'react-bootstrap';

import logo from '../../public/logo.png';

class Login extends Component {
  render() {
    const style = {
      container: {
        background: 'linear-gradient(#2c3e50, #0C2032)',
        height: '100%',
        width: '100%',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column'
      },
      middle: {
        display: 'table-cell',
        verticalAlign: 'middle'
      },
      form: {
        backgroundColor: 'white',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '8px',
        width: '30%',
        // padding: '40px',
        boxShadow: '0 0 10px #000'
      },
      panelBody: {
        padding: '40px'
      },
      panelFooter: {
        borderRadius: '0px 0px 8px 8px',
        padding: '20px'
      },  
      formHeading: {
        margin: '0px',
        marginBottom: '20px'
      },
      inputEmailAddress: {
        marginBottom: '20px'
      },
      inputPassword: {
        marginBottom: '20px'
      },
      loginButton: {
        width: '100%'
      },
      logo: {
        backgroundImage: `url(${logo})`,
        width: '15%',
        height: '10%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '20px',
        backgroundRepeat: 'round'
      }
    };

    return (
      <div style={style.container}>
        <img src={logo} style={style.logo} alt='company logo'/>
        <div style={style.middle}>
          <div style={style.form} className='panel panel-default'>
            <div style={style.panelBody} className='panel-body'>
              <h3 style={style.formHeading}>Log in to your account</h3>
              <FormGroup>
                <FormControl
                  type='email'
                  placeholder='Email address'
                  style={style.inputEmailAddress}>
                </FormControl>
                <FormControl
                  type='password'
                  placeholder='Password'
                  style={style.inputPassword}>
                </FormControl>
                <Button
                  type='submit'
                  className='btn-primary'
                  style={style.loginButton}>
                Log In</Button>
              </FormGroup>
            </div>

            <div style={style.panelFooter} className='panel-footer'>
              <span>No account?  </span>
              <a href='#'>  Sign up</a>              
            </div>
          </div>
          <a href='#' style={{color: 'white'}}>Forgot your password?</a>
        </div>
      </div>
    )
  }
}

export default Login;