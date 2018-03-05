import React, { Component } from 'react';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.callFoo();
  }

  callFoo() {

    return fetch(`/api/foo`, {
      accept: 'application/json',
    }).then((response) => {
      return response.json();
    }).then(json => {
      console.log("/api/foo", json);
    });
  }

  render() {
    return (
      <div className="App">
        OH HAI
      </div>
    );
  }
}

export default App;

