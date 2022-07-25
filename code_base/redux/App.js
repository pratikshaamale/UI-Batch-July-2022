import React from 'react';
import './App.css';
import Application from './Application';
import SecondApplication from './SecondApplication';
import { UserInfo } from './UserInfo';

function App() {
  return (
    <div className="container">
      <div className='row'>
        <div className='col-md-6'>
        <Application></Application>

        </div>
        <div className='col-md-6'>
        <SecondApplication></SecondApplication>
        </div>

      </div>
      <div className='row'> 
      <UserInfo></UserInfo>

      </div>
    </div>
  );
}

export default App;
