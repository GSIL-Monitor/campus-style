import React, { Component } from 'react';
import { Layout } from 'antd';

const {
  Header, Footer, Sider, Content,
} = Layout;
class WebSider extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <Sider>
          左侧导航
      </Sider>
    );
  }
}

export default WebSider;