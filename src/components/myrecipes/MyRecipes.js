import React from 'react';
import Recipe from '../recipe/Recipe';
import './MyRecipes.css';

/* This component renders the My Recipes page, which renders the Recipe component. Users get here by clicking My Kitchen > View My Recipes. */

class MyRecipes extends React.Component {
    render() {
        console.log(this.props.recipes)
        return (
            <div className="myRecipesPage">
                <div className="myRecipesPageHero">
                    <h1 className="myRecipesHeading">My Recipes</h1>
                </div>
                <ul className="container">
                    {this.props.recipes.map(recipe =>
                        <li className="card" key={recipe.id}>
                            <Recipe 
                                id={recipe.id}
                                recipename={recipe.recipename}
                                experience={recipe.experience}
                                preptime={recipe.preptime}
                                cooktime={recipe.cooktime}
                                servings={recipe.servings}
                                ingredients={recipe.ingredients}
                                directions={recipe.directions}
                            />
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default MyRecipes;