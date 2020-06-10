import React from 'react'
import { Link } from 'react-router-dom';
import './PostRecipe.css'

class PostRecipe extends React.Component{
    render() {
        const styleTextArea = {
            minHeight: '150px',
            minWidth: '380px',
            padding: '9px',
            boxSizing: 'border-box',
            fontSize: '15px',
            textAlign: 'left'
        };
        return (
            <div>
                <h1>Post Your Recipe Below</h1>
                <form>
                    <section className="recipeIntro">
                        <label htmlFor="recipeName">Recipe Name:</label>
                        <input type="text"></input>
                        <br />

                        <textarea className="experience" style={styleTextArea} placeholder="Tell us about your experience making this recipe. Was it difficult? Was it fun? Did you try any new techniques or ingredients not normally associated with this cuisine?"></textarea>
                        <br />

                        <label htmlFor="prepTime">Prep Time:</label>
                        <input type="text"></input>
                        <br />

                        <label htmlFor="cookTime">Cook Time:</label>
                        <input type="text"></input>
                        <br />

                        <label htmlFor="servings">Servings:</label>
                        <input type="text"></input> 
                        <br />
                        
                    </section>

                    <section className="ingredientsList">
                        <h2>Ingredients</h2>
                        <textarea className="ingredients" style={styleTextArea} placeholder="Please add each ingredient on a separate line."></textarea>
                    </section>

                    <section className="directions">
                        <h2>Directions</h2>
                        <textarea className="directions" style={styleTextArea} placeholder="Please add each step on a separate line."></textarea>
                    </section>

                    <button type="submit">Post Recipe</button>
                </form>
            </div>
        );
    }
}

export default PostRecipe;