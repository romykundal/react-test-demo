import React, { Component } from 'react';
import './../App.css';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="center">
        <Link  to={'/user'}><button className="btn">Show User Details</button></Link>
      </div>
    );
  }
}

export default Home;
