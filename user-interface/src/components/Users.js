import React from 'react';
import { useQuery } from 'react-query';
import User from './User';
import axios from 'axios';
import { List,Table } from 'antd';

const columns = [
  {
    title: 'FirstName',
    dataIndex: 'firstName',
  },
  {
    title: 'LastName',
    dataIndex: 'lastName',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
];
const fetchUser = async () => {
   const { data } = await axios.get('http://localhost:8092/user');
  return data;
   }

const Users = () => {
  const { data, status } = useQuery('user', fetchUser);
  console.log(data);

  return (
    <div>
      <h2>Users</h2>
      {status === 'loading' && (
        <div>Loading data</div>
      )}

      {status === 'error' && (
        <div>Error fetching data</div>
      )}

      {status === 'success' && (
        <List>
        <Table columns={columns} dataSource={data} />
          { data.map(user => <User key={user.firstName} user={user} /> ) }
        </List>
      )} 
    </div>
  );
}
 
export default Users;