import React from "react";
import style from "./recipe.module.css";

const Recipe = ({title, calories, image, ingredients, diet, health, weight, time}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>Calories : {calories}</p>
            <p>Diet Label : {diet}</p>
            <p>Healht Label : {health}</p>
            <p>Total Weight : {weight}</p>
            <p>Time to Make : {time}</p>
            <img src={image} alt="" />
        </div>
    );
}

export default Recipe;