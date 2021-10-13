import React from 'react';
import { List} from 'antd';

const User= ({ user }) => {
  return (
    <List.Item>
    <div className="card">
      <h3>First Name- { user.firstName }</h3>
      <p>Last Name - { user.lastName }</p>
      <p>Email - { user.email}</p>
    </div></List.Item>
  );
}
 
export default User;