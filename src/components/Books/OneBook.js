import React, { Component } from 'react';
import PropTypes from 'prop-types';

//import './Note.css';

export default class OneBook extends Component {
  static propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    published: PropTypes.string,
    isbn13: PropTypes.string,
  }

  static defaultProps = {
  //  visible: true,
  //  onHeaderClick: () => {},
  }

  render() {
    const { id, title, author, published, isbn13 } = this.props;
    return (
      <li className="onebook">
        <h3>{title}</h3>
          <div>
            <p>Eftir: {author}</p>
            <p>eftir: <span>{published}</span></p>
            <p>{isbn13}</p>
          </div>
      </li>
    );
  }
}
