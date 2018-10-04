import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import 'normalize.css';

const { Header } = Layout;

@withRouter
class WebHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNav: this.props.activeNav || ['home'],
    };
  }

  onClickItem = (args) => {
    const { key } = args;
    this.props.history.push(key);
  }

  render() {
    const { activeNav } = this.state;
    return (
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={activeNav}
          style={{
            lineHeight: '64px',
          }}
          onClick={this.onClickItem}
        >
          <Menu.Item key="home">首页</Menu.Item>
          <Menu.Item key="list">内推列表</Menu.Item>
          <Menu.Item key="create">创建内推</Menu.Item>
          <Menu.Item key="data">今日榜单</Menu.Item>
        </Menu>
      </Header>);
  }
}
WebHeader.propTypes = {
  activeNav: PropTypes.array,
};

export default WebHeader;