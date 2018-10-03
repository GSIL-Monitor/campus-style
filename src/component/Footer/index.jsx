import React, { Component } from 'react';
import { Layout } from 'antd';

const {
  Header, Footer, Sider, Content,
} = Layout;
class WebFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <Footer>
          版权
      </Footer>
    );
  }
}

export default WebFooter;