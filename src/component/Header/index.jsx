import React, { Component } from 'react';
import { Layout } from 'antd';

const {
  Header, Footer, Sider, Content,
} = Layout;
class WebHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <Header>
          头部
      </Header>
    );
  }
}

export default WebHeader;