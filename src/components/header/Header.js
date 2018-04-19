import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/auth';

import { Link, NavLink, Redirect } from 'react-router-dom';

import Button from '../button';

import './Header.css';

class Header extends Component {

  onClick = (e) => {
    console.log('leita');
  }

  handleLogout = (e) => {
  const { dispatch } = this.props;
  dispatch(logoutUser());
}

  render() {

  const { isAuthenticated } = this.props;

    return (
      <header className="header">
        <h1 className="header__heading"><Link to="/">Bókasafnið</Link></h1>

        {/* ætti samt frekar heima í sér component */}
        <Button onClick={this.onClick}>Leita</Button>
        {isAuthenticated &&
        <button className="button" onClick={this.handleLogout}>Útskrá</button>}
        {!isAuthenticated &&
        <Link to="/login">Innskráning</Link> }
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    isAuthenticated: state.auth.isAuthenticated,
  }
}

export default connect(mapStateToProps)(Header);
