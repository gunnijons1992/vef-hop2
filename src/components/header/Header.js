import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/auth';

import { Link, NavLink, Redirect, Route } from 'react-router-dom';

import Button from '../button';

import './Header.css';

class Header extends Component {

  state = {
  query: '',
}

onClick = (e) => {
  return (
    <div>
    <Route path="/" render={() => (
      <div>
        <Redirect to={`/books?search=${this.state.query}`}/>
        </div>
    )}/>

    </div>
  );

}


handleSubmit = (e) => {
  return (
    <div>
    <Route path="/" render={() => (
      <div>
        <Redirect to={`/books?search=${this.state.query}`}/>
        </div>
    )}/>

    </div>
  );
}

handleInputChange = (e) => {
  const { name, value } = e.target;

  if (name) {
    this.setState({ [name]: value });
  }
}

  handleLogout = (e) => {
  const { dispatch } = this.props;
  dispatch(logoutUser());
}


  render() {

  const { isAuthenticated } = this.props;
  const user = window.localStorage.getItem('user');
  const parsedUser = JSON.parse(user);

    return (
      <header className="header">
        <h1 className="header__heading"><Link to="/">Bókasafnið</Link></h1>


        {/* ætti samt frekar heima í sér component */}
        <div className="search_div">
          <form className="header_form" onSubmit={this.onClick}>
            <input id="search" type="text" name="query" onChange={this.handleInputChange} />

          <button className="button" onClick={this.handleSubmit}>
            <NavLink exact className="header_link"
            // eslint-disable-next-line
              to={`/books?search=${this.state.query}`} className="search">
              Leita
            </NavLink>
          </button>
          </form>
        </div>
        {isAuthenticated &&
          <div>
            <NavLink exact
            to= '/profile'>
            {parsedUser.name}
          </NavLink>
          <NavLink exact
            to= '/profile'>
            {parsedUser.image}
          </NavLink>
        <Button onClick={this.handleLogout}>Útskrá</Button>
        </div>
      }
        {!isAuthenticated &&
        <Button><Link to="/login">Innskráning</Link></Button> }
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
