import React from 'react'
import { Link } from 'react-router-dom'

class Dash extends React.Component {
    render() {
        return (
            <div>
                <section className="myRecipes">
                        <h1>My Recipes</h1>  
                        <Link to='/postrecipe'>
                            <button type="submit">Post New Recipes</button>
                        </Link>

                        <Link to='/myrecipes'>
                            <button type="submit">View My Recipes</button>
                        </Link>
                </section>

                <section class="otherRecipes">
                        <h1>Other Recipes</h1>

                        <Link to='/search'>
                            <button type="submit">Search</button>
                        </Link>
                </section>
            </div>
        );
    }
}
export default Dash;