import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customer = {
  'name': '이인기',
  'birthday': '940910',
  'gender': '남자',
  'job': '개발자'
}

class App extends Component {
  render() {
    return (
      <Customer
        name={customer.name}
        birthday={customer.birthday}
        gender={customer.gender}
        job={customer.job}
      />
    );
  }
}

export default App;
