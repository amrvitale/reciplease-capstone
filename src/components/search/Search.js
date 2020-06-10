import React from 'react'
import { Link } from 'react-router-dom'

class Search extends React.Component {
    render() {
        return (
            <div className="searchPage">
                <h1>Search Recipes</h1>

                <label htmlFor="recipeName">Recipe Name<br />Search by recipe name, i.e. 'crepes'</label>
                <input type="text"></input>
                <br />
                <br />
                <label htmlFor="cuisine">Cuisine<br />Search by cuisine, i.e. 'French'</label>
                <input type="text"></input>
                <br />
                <br />
                <label htmlFor="meal">Category<br />Search by meal category, i.e. 'breakfast'</label>
                <input type="text"></input>
                <br />

                <Link to='/results'>
                    <button type="submit">Search</button>
                </Link>

            </div>
        );
    }
}

export default Search;