import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

const App = () => {
  //API ID and Key
  const APP_ID = "86025c42";
  const APP_KEY = "6a516646ea5a6f5c155e0519825fdd31	";

  //States for recipe, search and query
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  //UseEffect to control when the API runs(when query changed, API call is executed)
  useEffect(() => {
    getRecipes();
  }, [query]);

  //API Call and change recipe State
  const getRecipes = async () => {
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data);
  };

  //set search state to whatever user's input is
  const updateSearch = e => {
    setSearch(e.target.value);
  };

  //on form submission, setQuery state so that the API call runs, reset search state to blank.
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  //render the page
  return (
    <div className="App">
      <h1 className="header">Simply search for recipes</h1>
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={
              "Calories: " + Math.floor(recipe.recipe.calories) + " Kcal"
            }
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            url={recipe.recipe.url}
            carbs={
              "Carbs: " +
              Math.floor(recipe.recipe.totalNutrients.CHOCDF.quantity) +
              "g"
            }
            fat={
              "Fat: " +
              Math.floor(recipe.recipe.totalNutrients.FAT.quantity) +
              " g"
            }
            protein={
              "Protein: " +
              Math.floor(recipe.recipe.totalNutrients.PROCNT.quantity) +
              " g"
            }
          />
        ))}
      </div>
    </div>
  );
};

export default App;
