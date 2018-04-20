import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import { Link } from 'react-router-dom';


//import './Note.css';

export default class OneBook extends Component {
  static propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    published: PropTypes.string,
    isbn13: PropTypes.string,
    categorytitle: PropTypes.string,
    description: PropTypes.string,
    pagecount: PropTypes.string,
    language: PropTypes.string,
  }

  static defaultProps = {
  //  visible: true,
  //  onHeaderClick: () => {},
  }

  render() {

    const token = window.localStorage.getItem('user');
    const { id, title, author, published, isbn13, categorytitle, description, pagecount, language } = this.props;
    if(token != null){
    return (
      <li className="onebook">
        <h3>{title}</h3>
          <div>
            <p>Eftir: {author}</p>
            <p>Gefin út: {published}</p>
            <p>Númer bókar: {isbn13}</p>
            <p>Týpa bókar: {categorytitle}</p>
            <p>Lýsing: {description}</p>
            <p>{pagecount} síður </p>
            <p>Tungumál: {language}</p>
            <Button>Skrá lestur</Button>
            <Button>Til baka</Button>
          </div>
      </li>
    );
  }
  else{
    return (
      <li className="onebook">
        <h3>{title}</h3>
          <div>
            <p>Eftir: {author}</p>
            <p>Gefin út: {published}</p>
            <p>Númer bókar: {isbn13}</p>
            <p>Týpa bókar: {categorytitle}</p>
            <p>Lýsing: {description}</p>
            <p>{pagecount} síður </p>
            <p>Tungumál: {language}</p>
            <Button>Til baka</Button>
          </div>
      </li>
    );
  }
  }
}
