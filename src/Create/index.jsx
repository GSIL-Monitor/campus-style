import React, { Component } from 'react';
import {
  Form, Input, DatePicker, TimePicker, InputNumber, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete,
} from 'antd';
import  Layout from '../component/Layout/index.jsx';
import './style.css';

const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;
const formItemLayout = {
  labelCol: {
    xs: { span: 24, offset: 1 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
};
class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <Layout>
        <div className="create-form">
          <p className="create-form-title">填写内推通告表单</p>
          <Form>
            <FormItem
              {...formItemLayout}
              label="公司名称"
              // validateStatus="error"
              // help="Should be combination of numbers & alphabets"
            >
              <Col span={11}>
                <Select
                  value="ali"
                  onclick={this.onNameChange}
                >
                  <Option value="ali">
                 阿里巴巴
                  </Option>
                  <Option value="tencent">
                 腾讯
                  </Option>
                  <Option value="baidu">
                 百度
                  </Option>
                </Select>
              </Col>
              <Col span={2} style={{ textAlign: 'center' }} />
              <Col span={11}>
                <Input placeholder="请输入公司部门" />
              </Col>
            </FormItem>

            <FormItem
              label="校招时间:"
              {...formItemLayout}
            >
              <Col span={11}>
                <FormItem>
                  <DatePicker style={{ width: '100%' }} />
                </FormItem>
              </Col>
              <Col span={2}>
                <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
                   至
                </span>
              </Col>
              <Col span={11}>
                <FormItem>
                  <DatePicker style={{ width: '100%' }} />
                </FormItem>
              </Col>
            </FormItem>

            <FormItem
              {...formItemLayout}
              label="毕业年份:"
            >
              <Col span={22}>
                <Select
                  value="2017"
                  onclick={this.onNameChange}
                >
                  <Option value="ali">
                 2017
                  </Option>
                  <Option value="2018">
                 2018
                  </Option>
                  <Option value="2019">
                 2019
                  </Option>
                </Select>
              </Col>
              <Col span={2}>
                <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>届</span>
              </Col>
            </FormItem>

            <FormItem
              {...formItemLayout}
              label="内推码:"
            >
              <Input placeholder="请输入内推码" />
            </FormItem>

            <FormItem
              {...formItemLayout}
              label="工作要求:"
            >
              <TextArea rows={6} />
            </FormItem>

            <FormItem
              {...formItemLayout}
              label="简历接收邮箱"
              help="填写公司邮箱增加可信度"
            >
              <Input placeholder="请填写公司邮箱" />
            </FormItem>

            <FormItem
              {...formItemLayout}
              label="备注:"
            >
              <TextArea rows={6} />
            </FormItem>
            <FormItem
              wrapperCol={{ span: 12, offset: 5 }}
            >
              <Col span={8} />
              <Col span={6}>
                <Button type="primary" htmlType="reset">
                 重置
                </Button>
              </Col>
              <Col span={6}>
                <Button type="primary" htmlType="submit">
                 提交
                </Button>
              </Col>
              <Col span={4} />

            </FormItem>
          </Form>
        </div>
      </Layout>
    );
  }
}

export default Create;