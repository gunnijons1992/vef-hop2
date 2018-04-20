import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/button'
import { addUserPhoto } from '../../actions/user';

export default class Profile extends Component {

  state = {
    photo: null,
  }

  handleChange = async (e) => {
  const { files } = e.target;
  this.setState({
    photo: files[0],
  })
}

handleSubmitPhoto = (e) => {
  e.preventDefault();

  const { photo } = this.state;
  const { dispatch } = this.props;
  dispatch(addUserPhoto(photo));
}

  render() {
    //const { username, password } = this.state;
    //const { isFetching, isAuthenticated, message } = this.props;
    const token = window.localStorage.getItem('user');
    const parsedUser = JSON.parse(token);
    if(token != null){
      return (
        <div>
        <div>
          <p>þú ert innskráður sem {parsedUser.name}</p>
          <form onSubmit={this.handleSubmitPhoto}>
          <input type="file" onChange={this.handleChange}/>
          </form><Button>Uppfæra mynd</Button>
        </div>
        <div>
          <p>ER EKKI BUINN AD MAPPA STATE SVO EKKI HAEGT AD UPPFAERA MYND</p>
        </div>
      </div>
      );
    }else{
      return (
        <div>
          <h2>Velkomin á bókasafnið</h2>
          <p>Til að njóta bókasafnisins til fullnustu mælum við með að <Link to="/login">skrá sig inn</Link> Þangað til getur þú skoðað <Link to ="/books">allar bækurnar</Link>.</p>
        </div>
      );
    }

  }
  }
