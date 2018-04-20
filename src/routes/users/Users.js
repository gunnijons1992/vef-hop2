import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../actions/users';

import User from '../../components/users/User';

import './Users.css';

const token = window.localStorage.getItem('token');
console.log(token);

class Users extends Component {



  componentDidMount(){

    const { dispatch, isAuthenticated } = this.props;

    if (isAuthenticated) {
      dispatch(getUsers('users'));
    }
  }


  render() {
    const { isFetching, users } = this.props;

    if (isFetching) {
      return (
        <p>Sæki Notendur..</p>
      );
    }

    return (
      <section>
        <h2>Notendur</h2>
        <ul>
          {users.map((user) => {
            return (
              <a href={"/users/"+ user.id}><User
                key={user.id}
                name={user.name}
              /></a>
            )
          })}
        </ul>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.users.isFetching,
    users: state.users.users,
    error: state.users.error,
    isAuthenticated: state.auth.isAuthenticated,
  }
}

export default connect(mapStateToProps)(Users);
