import React, { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import './App.css';
import User from './user/User';
import Home from './user/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Route  path={'/'} exact component={Home}></Route>
        <Route  path={'/user'} exact component={User}></Route>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
