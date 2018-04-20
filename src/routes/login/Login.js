import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link , Redirect, NavLink, Route } from 'react-router-dom';
import Button from '../../components/button'
import { loginUser } from '../../actions/auth';

//import { loginUser, logoutUser } from '../actions/auth';

/* todo sækja actions frá ./actions */

import './Login.css';

class Login extends Component {

  state = {
    username: '',
    password: '',
  }


  handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name) {
      this.setState({ [name]: value });
    }
    }


  handleSubmit = async (e) => {
    e.preventDefault();
      const { dispatch, isAuthenticated } = this.props;
      const { username, password } = this.state;
      dispatch(loginUser(username, password));
      }

  render() {
    const { username, password } = this.state;
    const { dispatch, isFetching, isAuthenticated, errors } = this.props;

  /*  let partners = this.props && this.props.errors.length > 0 ?
        this.props.part.map(p=>
            <li className = "partners" key={p.id}>
                <img src={p.img} alt={p.name}/> {p.name} </li>
        ) : <span></span>*/
        if (isAuthenticated) {
          return (<p>þú ert núna innskráður</p>);
        }

    if (isFetching) {
      return (
        <p>Skrái þig inn...</p>
      );
    }
  //console.log(errors[0])
    return (
      <div>
      { errors && (
         <p>{errors.toString()}</p>
       )}

        <div>
          <h1>Innskráning </h1>
        </div>
        <div id="parent">
          <form className="form" name="form" onSubmit={this.handleSubmit}>
            <div id="register">
              <div className="form-group">
                <label htmlFor="username"> Notendanafn: </label>
                <div>
                  <input type="text" id="username" required="required" name="username"
                  value={username} onChange={this.handleInputChange} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="password"> Lykilorð: </label>
                <div>
                  <input type="password" id="password" required="required" name="password"
                  value={password} onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                  <Button disabled={isFetching} type="submit" id="register_submit"> Innskrá </Button>
                </div>
              </div>
            </div>
            </form>
          <Link to="/Register"> Nýskráning </Link>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    isFetching: state.auth.isFetching,
    isAuthenticated: state.auth.isAuthenticated,
    errors: state.auth.errors,
  }
}
/* todo tengja við redux */

export default connect(mapStateToProps)(Login);
