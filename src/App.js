import React, { Component } from 'react';
import Posts from './components/Posts';
import PostForm from './components/PostForm';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostForm />
        <Posts />
      </div>
    );
  }
}

export default App;
