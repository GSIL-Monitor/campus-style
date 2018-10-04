import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
        <Header activeNav={this.props.activeNav}>Header</Header>
        <Content>
          {this.props.children}
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}
WebLayout.propTypes = {
  activeNav: PropTypes.array,
};

export default WebLayout;

