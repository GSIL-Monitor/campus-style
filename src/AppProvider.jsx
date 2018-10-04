import React, { Component } from 'react';
import AppContext from './context';


class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;