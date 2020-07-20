import React from 'react'
import config from '../../config'
import Recipe from '../recipe/Recipe'
import './Search.css'

class Search extends React.Component {

    state = {
        recipenameValue: '',
        ingredientsValue: "",
        recipes: [],
        noResults: false,
    };

    handleRecipenameChange = event => {
        this.setState( {recipenameValue: event.target.value});
    }

    handleIngredientsChange = event => {
        this.setState( {ingredientsValue: event.target.value});
    }

    handleSearch = () => {
        this.makeAPICall();
    }

    makeAPICall = searchInput => {
        let url = `${config.API_ENDPOINT}/search`;
        let searchTerms = [];
        if (this.state.recipenameValue.length > 0) searchTerms.push(`recipename=${this.state.recipenameValue}`);
        if (this.state.ingredientsValue.length > 0) searchTerms.push(`ingredients=${this.state.ingredientsValue}`);

        url += searchTerms.join('&');

        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            },
        })

        .then((response) => {
            if(!response.ok) {
                throw response.message;
            }
            console.log('the whole response', response)
            return response.json();
        })

        .then((responseJson)=> {
            let recipe = responseJson.recipes;
            console.log(recipe)
            this.setState( {recipes: recipe, noResults: recipe.length === 0,})
            console.log({recipes: recipe})
        })
        .catch(error => {
            console.log({error})
        })
    }

    render() {
        return (
            <div className="searchPage">
                <div className="searchPageHero">
                    <h1 className="searchHeading">Search Recipes</h1>
                </div>
                <br />
                <br />
                <section className="recipeNameSearch">
                    <label htmlFor="recipeName">Recipe Name<br />Search by recipe name, i.e. 'crepes'</label>
                    <input 
                        type="text" 
                        onChange={event => this.handleRecipenameChange(event)} 
                        value={this.state.recipenameValue}>
                    </input>
                </section>
                <br />
                <br />
                
                <section className="ingredientsSearch">
                    <label htmlFor="ingredients">Ingredients<br />Search by ingredients, i.e. 'flour'</label>
                    <input 
                        type="text"
                        onChange={event => this.handleIngredientsChange(event)}
                        value={this.state.ingredientsValue}>
                    </input>
                </section>
                <br />
                <br />
                <button type="submit" onClick={this.handleSearch}>Search</button>
                <br />
                <br />
                <br />
                <br />
                {this.state.recipes.length > 0 && (
                    <div id="recipeSearchResultContainer">
                        {this.state.recipes.map((recipe, index) => (
                            <div className="single-recipe" key={index}>
                                <Recipe 
                                    {...recipe}
                                />
                            </div>
                        ))}
                    </div>
                )}  
            {this.state.noResults && <p>No results found for your search. Please search again!</p>}     
        </div>

        );
    }
}

export default Search;