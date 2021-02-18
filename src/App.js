import './App.css';
import React from 'react';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        recipeList: [],
        ingredients: [],
        recipe: ''
      }
    }
    render() {
    return (
      <div className="App">
        <h1>Recipe Book</h1>

      </div>
    );
  }
}

export default App;
