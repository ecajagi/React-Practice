import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import Recipe from "./Recipe";
import "./App.css";

const App = () => {
  const APP_ID = "445723b1";
  const APP_KEY = "c9a7685ad09855570363b16a5e6bba68";

  //all recipes are stored in recipes variable now and we need query to run only when Search btn is clicked
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  //preventDefault because we want to prevent constant page refresh
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
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
        {recipes.map((recipe) => (
          <Recipe
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            key={recipe.recipe.label}
            ingredients={recipe.recipe.ingredients}
            url={recipe.recipe.url}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
