
import React ,{useState } from 'react';
import 'antd/dist/antd.css';
import {useMutation } from 'react-query';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

const Forms = () =>{
      const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [email, setEmail] = useState('')

   const mutation = useMutation(createPost=>{return axios.post('http://localhost:8092/user',createPost)})
      
  return  (
  <div >
    <Form>
      <Form.Item
        label="First Name"
        name="firstName"
        rules={[{ required: true, message: 'Please input your firstName!' }]}
        onChange={e=>setfirstName(e.target.value)}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Last Name"
        name="lastName"
        rules={[{ required: true, message: 'Please input your lastName!' }]}
        onChange={e=>setlastName(e.target.value)}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
        onChange={e=>setEmail(e.target.value)}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" onClick={() => {mutation.mutate({ firstName:firstName,lastName:lastName, email:email});
    console.log(email)
  }} >
          Submit
        </Button>
      </Form.Item>
    </Form>

  </div>
)};

export default Forms;