import React from 'react'
import { Link } from 'react-router-dom'
import './Recipe.css';
import ApiContext from '../../ApiContext'

export default class Recipe extends React.Component {
   
    static contextType = ApiContext
    
    render() {
        const {id, recipename, experience, preptime, cooktime, servings, ingredients, directions} = this.props
        
        return (
            <div className="recipeCard">
                <Link to={`/recipe/${id}`}>
                    <div className="card-header">
                        <div className="card-title">
                            <h2 className="recipeTitle">{recipename}</h2>
                        </div>
                    </div>           
                </Link>
            </div>
        );
        
    }
}