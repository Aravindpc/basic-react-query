import Register from './components/Register';
import Users from './components/Users';
import Foot from './components/Foot';
import { Layout } from 'antd';
import Navbar from './components/Navbar';
import React, { useState } from 'react';

const { Header, Footer, Content } = Layout;
function App() {
   let [page, setPage] = useState('register');
  return (
    <div className="App">
   <Layout>
      <Header>
        <Navbar setPage={setPage} />
        
      </Header>
      <Content>
          <div className="content">
          { page === 'register' ? <Register />:<Users />}
        </div>
      </Content>
      <Footer>
          <Foot/>
          </Footer>
    </Layout>
    </div>
  );
}

export default App;
