import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../search/Search';
class SearchResults extends React.Component {
    render() {
        return (
            <div className="searchResults">
                <h1>Reciplease Search Results</h1>
                <section className="resultsPlaceholder">
                <p>Placeholder for recipe search results.</p>
                </section>
                
                <Link to='/search'>
                    <button type="submit">Return to Search</button>
                </Link>
            </div>
        );
    }
}

export default SearchResults;