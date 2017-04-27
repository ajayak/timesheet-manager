// @flow
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import styles from './Home.css';

const info = require('../../package.json');

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>{info.productName}</h2>
          <h3>{info.version}</h3>
          <Link to="/main">
            <RaisedButton label="Enter" secondary fullWidth />
          </Link>
        </div>
      </div>
    );
  }
}
