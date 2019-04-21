import React, { Component } from 'react';
import './App.css';
import Block from './components/block/block';
import Input from './components/input/input';
import figureStyles from './components/block/block-style'


class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <p>Diferent figure by props</p>
        <Block figure={figureStyles.square} />
        <Block figure={figureStyles.circle} />
        <Block figure={figureStyles.triangle} />
        <hr></hr>
        <p>Change component by state</p>
        <Input />
        <Input />
        <Input />
      </div>
    );
  }
}

export default App;
