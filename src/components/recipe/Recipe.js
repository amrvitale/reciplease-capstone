import React from 'react'
import { Link } from 'react-router-dom'
import './Recipe.css';

export default class Recipe extends React.Component {
    render() {
        return (
            <div className="recipeCard">
                <Link to={}>
                    <div className="card-header">
                        <div className="card-title">
                            <h2>{recipename}</h2>
                        </div>
                    </div>
                    <div className="card-summary">
                        
                    </div>
                </Link>
            </div>
        );
        
    }
}