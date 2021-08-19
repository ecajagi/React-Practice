import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients, url }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <p>Calories: {Math.floor(calories)}</p>
      <img className={style.image} src={image} alt="" />
      <ol>
        <p>Ingredients:</p>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <a href={url}>Link to a page</a>
      <br></br>
    </div>
  );
};

export default Recipe;
