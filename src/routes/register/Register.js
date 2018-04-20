import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import Button from '../../components/button'
import { addUser } from '../../actions/register';
//import { loginUser, logoutUser } from '../actions/auth';

/* todo sækja actions frá ./actions */

import './Register.css';

class Register extends Component {

  state = {
    username: '',
    password: '',
    name: '',
  }



  handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name) {
      this.setState({ [name]: value });
    }
    }


  handleSubmit = async (e) => {
    e.preventDefault();
      const { dispatch } = this.props;
      const { username, password, name } = this.state;
      dispatch(addUser(username, password, name));
      }

  render() {
    const { username, password, name } = this.state;
    const { isAdding, isDone, message } = this.props;

  /*  let partners = this.props && this.props.errors.length > 0 ?
        this.props.part.map(p=>
            <li className = "partners" key={p.id}>
                <img src={p.img} alt={p.name}/> {p.name} </li>
        ) : <span></span>*/
    if (isDone) {
      return (
        <p>Ýttu hér til að skrá þig inn : <Link to="/login">innskráning</Link></p>
        );
      }

    if (isAdding) {
      return (
        <p>Skrái atriði...</p>
      );
    }
  //console.log(errors.errors[0].message);
  //console.log(errors)
    return (
      <div>
      <div>
        <h1>Nýskráning </h1>
          {message && (message.map((error) => {
            return (
              <h3>{error.message}</h3>
            )
          }))
      }
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
              </div>
              <div className="form-group">
                <label htmlFor="name"> Nafn: </label>
                <div>
                  <input type="text" id="name" required="required" name="name"
                  value={name} onChange={this.handleInputChange} />
                </div>
              </div>
              <div className="form-group">
                <Button disabled={isAdding} type="submit" id="register_submit"> Nýskrá </Button>
              </div>
            </div>
          </form>
          <Link to="/Login"> Innskráning </Link>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    isAdding: state.register.isAdding,
    isDone: state.register.isDone,
    message: state.register.message,
  }
}
/* todo tengja við redux */

export default connect(mapStateToProps)(Register);
