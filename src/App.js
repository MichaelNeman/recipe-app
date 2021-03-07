import './App.css';
import React from 'react';
import NewRecipe from "./components/newRecipe";
import RecipeList from "./components/recipeList";



const App =() => {
  const DATA = [
    { id: '0', name: 'Chicken and Vegetable Soup', ingredients: ['2 lbs chicken', '8 cups chicken stock', 'item 3'], instructions: 'string detailing recipe instructions' },
    { id: '1', name: 'Meatballs', ingredients: ['item 1', 'item 2', 'item 3'], instructions: 'string detailing recipe instructions' },
    { id: '2', name: 'Pulled Pork', ingredients: ['item 1', 'item 2', 'item 3'], instructions: 'string detailing recipe instructions' }
];

  return (
    <div className="App wrapper">
      <div className="header">
        <h1>Recipe App</h1>
      </div>
      <div className="navigation">
        <h2 className="nav-header">Recipes</h2>
        <RecipeList />
      </div>
      <NewRecipe list={DATA} />

    </div>
  );

}

export default App;
