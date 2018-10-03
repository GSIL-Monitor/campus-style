import React, { Component } from 'react';
import { Layout } from 'antd';
import  Header from '../Header/index.jsx';
import  Footer from '../Footer/index.jsx';
import  Sider from '../Sider/index.jsx';


const { Content } = Layout;
class WebLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <Layout>
        <Header>Header</Header>
        <Content>
          {this.props.children}
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}

export default WebLayout;

