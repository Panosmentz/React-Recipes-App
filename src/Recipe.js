import React from "react";
import style from "./recipe.module.css";

const Recipe = ({
  title,
  calories,
  image,
  ingredients,
  url,
  carbs,
  fat,
  protein
}) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ul className={style.ul}>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ul>

      <img className={style.image} src={image} alt="recipe" />
      <p className={style.text}>{calories}</p>
      <a href={url} target="_blank">
        View Instructions
      </a>
      <p className={style.text}>{carbs}</p>
      <p className={style.text}>{fat}</p>
      <p className={style.text}>{protein}</p>
    </div>
  );
};

export default Recipe;
