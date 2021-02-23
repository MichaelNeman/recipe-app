import './App.css';
import React from 'react';
import NewRecipe from "./components/newRecipe";
import RecipeList from "./components/recipeList";

class App extends React.Component {
  
    render() {
    return (
      <div className="App wrapper">
        <div className="header">
        <h1>Recipe App</h1>
        </div>
        <div className="navigation">
          <h2>Recipes</h2>
          <RecipeList />
        </div>
        <NewRecipe />
     
      </div>
    );
  }
}

export default App;
