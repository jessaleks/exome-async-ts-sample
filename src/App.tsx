import React from 'react';
import logo from './logo.svg';
import './App.css';

import {jokeStore} from './store';
import {useStore} from "exome/react";

function App() {

  const {joke, fetchJoke} = useStore(jokeStore)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{JSON.stringify(joke)}</p>
        <button onClick={fetchJoke}>Fetch a Joke</button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
