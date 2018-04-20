import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './User.css';

export default class User extends Component {
  static propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
  }

  static defaultProps = {
  //  visible: true,
  //  onHeaderClick: () => {},
  }

  render() {
    const { id, name} = this.props;
    return (
      <li className="book">
        <h3>{id}</h3>
          <div>
            <h3>{name}</h3>
          </div>
      </li>
    );
  }
}
