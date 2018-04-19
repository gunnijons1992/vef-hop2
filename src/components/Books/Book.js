import React, { Component } from 'react';
import PropTypes from 'prop-types';

//import './Note.css';

export default class Book extends Component {
  static propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
  }

  static defaultProps = {
  //  visible: true,
  //  onHeaderClick: () => {},
  }

  render() {
    const { id, title, author } = this.props;
    return (
      <li className="book">
        <h3>{id}</h3>
          <div>
            <p>{title}</p>
            <p>{author}</p>
          </div>
      </li>
    );
  }
}
