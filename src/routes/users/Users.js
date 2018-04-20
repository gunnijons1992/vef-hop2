import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../actions/users';
import { NavLink } from 'react-router-dom'

import './Users.css'

class Users extends Component {

  componentDidMount(){

    const { dispatch, isAuthenticated } = this.props;

    if (isAuthenticated) {
      dispatch(getUsers('users'));
    }
  }

    render(){
       const { isFetching, users } = this.props;

       if(isFetching){
         return(
           <p>Sæki notendur</p>
         );
       }
       return(
         <section>
         <h2>Notendur</h2>
         <ul>
           {users.map((user) => (
             <h3>
               <li key={user.id}>
                 <NavLink exact
                   to={`/users/${user.id}`}>
                   {user.name}
                 </NavLink>
               </li>
             </h3>
           ))}
         </ul>
         </section>
      }
  }


const mapStateToProps = (state) => {

  return {
    isFetching: state.users.isFetching,
    users: state.users.users,
    error: state.users.error,
    isAuthenticated: state.users.isAuthenticated,
  }
}

export default connect(mapStateToProps)(Users);
