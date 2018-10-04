import React, { Component } from 'react';
import AppContext from './context';


class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNav: ['home'],
    };
  }

  toggleActiveNav = (value) => {
    this.setState({
      activeNav: [value],
    });
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          toggleActiveNav: this.toggleActiveNav,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;