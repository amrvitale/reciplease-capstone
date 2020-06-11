import React from 'react'
import { Link } from 'react-router-dom'

class MyRecipes extends React.Component {
    render() {
        return (
            <div>
                <h1>My Recipes</h1>
                
                <section class="recipe1">
                    <h2>Pasta alla Norma</h2>
                    <Link to="./viewrecipe">
                        <button type="button">View</button>
                    </Link>

                    <Link to="./editrecipe">
                        <button type="button">Edit</button>
                    </Link>
                    <button type="button">Delete</button>
                </section>

                <section class="recipe2">
                    <h2>Cherry Chocolate Cake</h2>
                    <Link to="./viewrecipe">
                        <button type="button">View</button>
                    </Link>

                    <Link to="./editrecipe">
                        <button type="button">Edit</button>
                    </Link>
                    
                    <button type="button">Delete</button>
                </section>

            </div>
        );
    }
}

export default MyRecipes;