import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div>
              Hello,world
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
