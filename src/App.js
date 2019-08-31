import React from 'react';
import './App.css';
import NavBar from './Components/navBar';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <h1>Main Area</h1>
      </main>
    </React.Fragment>
  );
}

export default App;
