import React from 'react';
import {Menu,Button} from 'antd';
const Navbar = ({ setPage }) => {
  return ( 
     <Menu theme="dark" mode="horizontal">
   <Menu.Item key="1"><Button type="primary" onClick={() =>  setPage('register')}>Register</Button></Menu.Item>
   <Menu.Item key="2"><Button type="primary" onClick={() =>  setPage('chars')}>View</Button></Menu.Item>
    </Menu>
  );
}
 
export default Navbar;