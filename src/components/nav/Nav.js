import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css';

class Nav extends React.Component {
    render() {
        return (
            <div>
                <ul id="navbar">
                    <li><Link to='/mydash'>My Dash</Link></li>
                    <li><Link to='/postrecipe'>Post a Recipe</Link></li>
                    <li><Link to='/search'>Search Recipes</Link></li>
                </ul>
            </div>
        );
    }
}

export default Nav;