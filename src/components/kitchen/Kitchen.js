import React from 'react';
import { Link } from 'react-router-dom';
import './Kitchen.css';

/* This component renders the "my kitchen" page, which is where users can click to post a new recipe, or view existing recipes. */

class Kitchen extends React.Component {
    render() {
        return (
            <div className="kitchen">
                <div className="myKitchenHero">
                    <h1 className="myKitchenHeader">My Kitchen</h1>  
                </div>
                <h2 className="start">Let's get cookin'!</h2>
                <p>Welcome to your kitchen. <br />Here you can create a brand new recipe, or view your existing recipes to edit or publish to the Reciplease database.</p>
                <br />
                <Link to='/postrecipe'>
                    <button type="submit">Post New Recipe</button>
                </Link>

                <Link to='/myrecipes'>
                    <button type="submit">View My Recipes</button>
                </Link>
            </div>
        );
    }
}
export default Kitchen;