import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import 'normalize.css';
import AppContext from '../../context';

const { Header } = Layout;

@withRouter
class WebHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onClickItem = (args, context) => {
    const { key } = args;
    context.toggleActiveNav(key);
    this.props.history.push(key);
  }

  render() {
    return (
      <AppContext.Consumer>
        {props =>
          (<Header>
            <Menu
              theme="dark"
              mode="horizontal"
              selectedKeys={props.activeNav}
              style={{
                lineHeight: '64px',
              }}
              onClick={e => this.onClickItem(e, props)}
            >
              <Menu.Item key="home">首页</Menu.Item>
              <Menu.Item key="list">内推列表</Menu.Item>
              <Menu.Item key="create">创建内推</Menu.Item>
              <Menu.Item key="data">今日榜单</Menu.Item>
            </Menu>
          </Header>)}
      </AppContext.Consumer>);
  }
}

export default WebHeader;