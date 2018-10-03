import React, { Component } from 'react';
import { Layout } from 'antd';
import './style.css';

const { Footer } = Layout;
class WebFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <Footer className="footer">
        <div className="footer-reference">
          <div>
            <p>相关资源</p>
            <ul className="footer-reference-list">
              <li>
                <a href="https://www.baidu.com" target="_blank" rel="noopener noreferer">百度</a>
              </li>
            </ul>
          </div>
          <div>
            <p>社区</p>
            <ul className="footer-reference-list">
              <li>
                <a href="https://www.baidu.com">百度</a>
              </li>
            </ul>
          </div>
          <div>
            <p>帮助</p>
            <ul className="footer-reference-list">
              <li>
                <a href="https://www.baidu.com">百度</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-copyRight">
          <p> ©2018 一键科技 All Rights Reserved</p>
        </div>
      </Footer>
    );
  }
}

export default WebFooter;