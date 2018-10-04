import React, { Component } from 'react';
import {
  Form, Input, DatePicker, TimePicker, InputNumber, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete,
} from 'antd';
import  Layout from '../component/Layout/index.jsx';
import './style.css';
import { names } from './mock.js';
import AppContext from '../context';

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

  componentDidMount() {
    console.log('this.props-->', this.props);
  }

  getCurrentYear = () => {
    const year = new Date().getFullYear();
    return year;
  }

  getYears = () => {
    const currentYear = this.getCurrentYear();
    const years = [currentYear - 1, currentYear, currentYear + 1];
    return years;
  }

  onNameChange = (value) => {
    this.props.form.setFieldsValue({ name: value });

  }

  onYearChange = (value) => {
    this.props.form.setFieldsValue({ year: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, fieldsValue) => {
      if (!err) {
        const params = {
          ...fieldsValue,
          startTime: fieldsValue.startTime.format('YYYY-MM-DD'),
          endTime: fieldsValue.endTime.format('YYYY-MM-DD'),
        };
        console.log('params-->', params);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const years = this.getYears();
    return (
      <Layout activeNav={['create']}>
        <div className="create-form">
          <p className="create-form-title">填写内推通告表单</p>
          <Form onSubmit={this.handleSubmit}>
            <FormItem
              {...formItemLayout}
              label="公司名称"
              // validateStatus="error"
              // help="Should be combination of numbers & alphabets"
            >
              <Col span={11}>
                {getFieldDecorator('name', {
                  rules: [{
                    required: true, message: '请输入公司内推码!',
                  }],
                })(
                  <Select
                    onChange={this.onNameChange}
                  >
                    {names.map((item) => {
                      const { key, value } = item;
                      return (<Option key={value} value={value}>
                        {key}
                      </Option>);
                    })}
                  </Select>)}
              </Col>
              <Col span={2} style={{ textAlign: 'center' }} />
              <Col span={11}>
                {getFieldDecorator('subname', {
                  rules: [{
                    required: false, message: '请输入公司内推码!',
                  }],
                })(<Input placeholder="请输入公司部门" />)}
              </Col>
            </FormItem>

            <FormItem
              label="校招时间:"
              {...formItemLayout}
            >
              <Col span={11}>
                {getFieldDecorator('startTime', {
                  rules: [{
                    required: true, message: '请输入开始时间!',
                  }],
                })(<DatePicker style={{ width: '100%' }} />)}
              </Col>
              <Col span={2}>
                <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
                   至
                </span>
              </Col>
              <Col span={11}>
                {getFieldDecorator('endTime', {
                  rules: [{
                    required: true, message: '请输入结束时间!',
                  }],
                })(<DatePicker style={{ width: '100%' }} />)}
              </Col>
            </FormItem>

            <FormItem
              {...formItemLayout}
              label="毕业年份:"
            >
              <Col span={22}>
                {getFieldDecorator('year', {
                  initialValue: this.getCurrentYear(),
                  rules: [{
                    required: true, message: '请选择毕业年份!',
                  }],
                })(
                  <Select
                    onChange={this.onYearChange}
                  >
                    {years.map(value =>
                      (<Option key={value} value={value}>
                        {value}
                      </Option>),
                    )}
                  </Select>)}
              </Col>
              <Col span={2}>
                <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>届</span>
              </Col>
            </FormItem>

            <FormItem
              {...formItemLayout}
              label="内推码:"
            >
              {getFieldDecorator('code', {
                rules: [{
                  required: true, message: '请输入公司内推码!',
                }],
              })(<Input placeholder="请输入内推码" />)}
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
            >
              {getFieldDecorator('email', {
                rules: [{
                  type: 'email', message: '请输入合法的邮箱地址!',
                }, {
                  required: true, message: '填写公司邮箱!',
                }],
              })(<Input placeholder="请填写公司邮箱" />)
              }
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
              <Col span={10} />
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
              <Col span={2} />

            </FormItem>
          </Form>
        </div>
      </Layout>
    );
  }
}

export default Form.create()(Create);