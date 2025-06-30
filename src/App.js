import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Form from './components/Form';

function App() {
  return (
    <>
      <Menu logo="Company Logo"/>
        <div className='container'>
          <div className='row'>
            <Form kelma="This is form for testing"/>
          </div>
        </div>
      </>
  );
}

export default App;
