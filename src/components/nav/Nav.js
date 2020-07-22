import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css';

class Nav extends React.Component {


    render() {
        return (
            <div>
                <nav role = "full-horizontal">
                    <ul id="navbar">
                        <li><Link to='/mykitchen'>My Kitchen</Link></li>
                        <li><Link to='/postrecipe'>Post a Recipe</Link></li>
                        <li><Link to='/search'>Search Recipes</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Nav;