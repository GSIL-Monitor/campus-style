import React, { Component } from 'react';
import  Layout from '../component/Layout/index.jsx';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <Layout activeNav={['home']}>
        Home
      </Layout>
    );
  }
}

export default Home;