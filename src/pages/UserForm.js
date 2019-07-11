import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadUsers, loadCountries, loadStates } from '../actions'
//import UserList from '../components/users/UserList'

import { Form, Icon, Input, Button, Checkbox } from 'antd';

class UserForm extends Component {
  componentDidMount() {
    this.props.dispatch(loadUsers())
    this.props.dispatch(loadCountries())
    //this.props.dispatch(loadStates())
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { users, countries, states } = this.props
    const { getFieldDecorator } = this.props.form;

    /*let list = <div>Loading...</div>

    if(!users.isFailed && users.data) {
      if(users.data.length > 0) {
        list = <UserList data={users.data} />
      }
    }

    if(users.isFailed) {
      list = <h4>{users.data}</h4>
    }*/

    return (
      <div>
        <h1>Add User</h1>
        <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
                {getFieldDecorator('name', {
                    rules: [{ required: true, message: 'Please input your name!' }],
                })(
                    <Input                
                    placeholder="Name"
                    />,
                )}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('email', {
                    rules: [{ required: true, message: 'Please input your email!' }],
                })(
                    <Input                
                    placeholder="Email"
                    />,
                )}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('address', {
                    rules: [{ required: true, message: 'Please input your address!' }],
                })(
                    <Input                
                    placeholder="Address"
                    />,
                )}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('address2', {
                    //rules: [{ required: true, message: 'Please input your address2!' }],
                })(
                    <Input                
                    placeholder="address 2"
                    />,
                )}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('zipcode', {
                    rules: [{ required: true, message: 'Please input your zipcode!' }],
                })(
                    <Input                
                    placeholder="Zipcode"
                    />,
                )}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('city', {
                    rules: [{ required: true, message: 'Please input your city!' }],
                })(
                    <Input                
                    placeholder="city"
                    />,
                )}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('state_id', {
                    rules: [{ required: true, message: 'Please input your State!' }],
                })(
                    <Input                
                    placeholder="State"
                    />,
                )}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('country_id', {
                    rules: [{ required: true, message: 'Please input your Country!' }],
                })(
                    <Input                
                    placeholder="Country"
                    />,
                )}
            </Form.Item>            
            <Form.Item>            
                <Button type="primary" htmlType="submit" className="login-form-button">
                   Save
                </Button>            
            </Form.Item>
        </Form>
      </div>
    )
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'UserForm' })(UserForm);

function mapStateToProps(state) {
  return {
    users : state.users,
    countries : state.countries,
    states : state.states
  }
}

export default connect(mapStateToProps)(WrappedNormalLoginForm)