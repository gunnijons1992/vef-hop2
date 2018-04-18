import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import Button from '../../components/button'
//import { loginUser, logoutUser } from '../actions/auth';

/* todo sækja actions frá ./actions */

import './Login.css';

class Login extends Component {

  render() {
    return (
      <div>
        <h1>Innskráning </h1>
        <p>í augnablikinu er þetta bara form, á eftir að setja alla virkni upp....</p>

        <form class="form">
          <div>
            <label> Notendanafn: </label>
            <input type="text" />
          </div>
          <div>
            <label> Lykilorð: </label>
            <input type="password" />
          </div>
          <Button> Innskrá </Button>
        </form>

        <Link to="/register"> Nýskráning </Link>

      </div>
    );
  }
}

/* todo tengja við redux */

export default Login;
