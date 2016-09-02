import React, { Component } from 'react';
import NavBar from './containers/NavBar';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        { this.props.children }
      </div>
    );
  }
}
