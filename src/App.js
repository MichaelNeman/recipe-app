import './App.css';
import React from 'react';
import NewRecipe from "./components/newRecipe";

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
        <NewRecipe />
     
      </div>
    );
  }
}

export default App;
