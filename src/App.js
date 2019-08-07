import './App.css';
import React, { Component } from 'react';
// import GetOnlinePosts from './GetOnlinePosts';
import GetDates from './GetDates';


class App extends Component {
  render() {
      return (
        <div className="App">
          <GetDates />
          {/* <GetOnlinePosts /> */}

        </div>
      );
    }
}

export default App;
