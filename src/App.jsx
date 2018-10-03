import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Switch, BrowserRouter as Router, Route,
} from 'react-router-dom';

import Home from './Home/index.jsx';
import Create from './Create/index.jsx';
import List from './List/index.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/list" component={List} />
          <Route path="/create" component={Create} />
          <Route component={Home} />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
