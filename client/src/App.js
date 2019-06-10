import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    user: null,
  };

  async componentDidMount() {
      const data = await fetch('http://localhost:3333/user');
      const user = await data.json();
      this.setState({ user });
  }

  render() {
      return (
          <div className="App">
              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                      Edit <code>src/App.js</code> and save to reload.
                  </p>
                  <a
                      className="App-link"
                      href="https://reactjs.org"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      Learn React
                  </a>
                  <p>UserId: {this.state.user && this.state.user.id}</p>
                  <p>Name: {this.state.user && this.state.user.name}</p>
                  <p>CreatedAt: {this.state.user && this.state.user.createdAt}</p>
              </header>
          </div>
      );
  }

}

export default App;
