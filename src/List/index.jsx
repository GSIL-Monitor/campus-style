import React, { Component } from 'react';
import  Layout from '../component/Layout/index.jsx';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <Layout activeNav={['list']}>
        List
      </Layout>
    );
  }
}

export default List;