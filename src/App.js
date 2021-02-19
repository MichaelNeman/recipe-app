import './App.css';
import React from 'react';

class App extends React.Component {
  
    render() {
    return (
      <div className="App wrapper">
        <div className="header">
        <h1>Recipe App</h1>
        </div>
        <div className="navigation">
          <h2>Placeholder</h2>
        </div>
        <div className="welcome-page">
         <p> Welcome to the Recipe App. Create a new recipe to 
          begin or login to view saved recipes</p>
        </div>
      </div>
    );
  }
}

export default App;
