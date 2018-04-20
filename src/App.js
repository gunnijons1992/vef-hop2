import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Route, Switch, withRouter } from 'react-router-dom'

import UserRoute from './components/user-route';
import Header from './components/header';

import Home from './routes/home';
import Login from './routes/login';
import Register from './routes/register';
import Profile from './routes/profile';
import NotFound from './routes/not-found';
import Books from './routes/books';
import OneBook from './routes/books/OneBook'
import Users from './routes/users/Users';
/* todo fleiri routes */

import './App.css';

class App extends Component {

  render() {
    const { isAuthenticated } = this.props; /* vita hvort notandi sé innskráður */

    return (
      <main className="main">
        <Helmet defaultTitle="Bókasafnið" titleTemplate="%s – Bókasafnið" />

        <Header />

        <div className="main__content">
          <Switch location={this.props.location}>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/books" exact component={Books}  />
            <Route path="/books/:id" exact component={OneBook}  />
            <UserRoute path="/profile" isAuthenticated={isAuthenticated} component={Profile} />
            {/* todo fleiri route */}
            <Route path="/books?search=:query" component={Books} />
            <UserRoute path="/users" isAuthenticated={isAuthenticated} component={Users} />
            <Route component={NotFound} />
          </Switch>
        </div>

      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
    isAuthenticated: state.auth.isAuthenticated,
  }
}

export default withRouter(connect(mapStateToProps)(App));
