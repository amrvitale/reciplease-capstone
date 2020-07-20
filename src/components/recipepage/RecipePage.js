import React from 'react'
import ApiContext from '../../ApiContext'
import config from '../../config'
import {Link} from 'react-router-dom'
import './RecipePage.css'

class RecipePage extends React.Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }

    

    static contextType = ApiContext

     updateRecipeStatus = (selectedRecipe) =>  {
        console.log('clicked')
        console.log(this.props)
    
        let status 
          
        if (selectedRecipe.status === 'published') {
          status = 'unpublished'
        } else {
          status = 'published'
        }  
    
        const updatedRecipe = {
          ...selectedRecipe,
          status: status
        }
    
        let url = `${config.API_ENDPOINT}/mydraftlings/${selectedRecipe.id}`; 
    
          fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },   
            body: JSON.stringify(updatedRecipe),
        }) 
    
        .then(recipe => {
          console.log(recipe)
          this.props.handlePublishRecipe(selectedRecipe.id, status);
        })
    
        .catch(error => {
          console.log({ error })
        })
      }

    render() {
        const {recipes = [] } = this.context
        console.log(this.context)
        const {slug} = this.props.match.params;
        console.log(slug)
        console.log(recipes)
        let selectedRecipe = recipes.find(recipe => recipe.id === parseInt(slug))
        console.log(recipes, selectedRecipe, "recipes", "selectedRecipe")

        let statusButton;
        
        if (selectedRecipe === undefined) {
            let html = <p>Readying your recipe!</p>
            return html
        }
        else if (selectedRecipe.status === "published") {
            statusButton = <button className="unpubButton" onClick= {() => this.updateRecipeStatus(selectedRecipe)}>Unpublish</button>
        }

        else {
            statusButton = <button className="pubButton" onClick= {() => this.updateRecipeStatus(selectedRecipe)}>Publish</button>
        }

        return (
            <div className="recipePage">
                <div className="recipeActions">
                    <Link to={`/editerecipe/${slug}`}><button type="button">Edit</button></Link>
                    {statusButton}
                </div>

                <div className="selectedRecipe">
                    <h1 className="recipeName">{(selectedRecipe) ? selectedRecipe.recipename: ""}</h1>
                    <br />
                    <p className="experience">{(selectedRecipe) ? selectedRecipe.experience: ""}</p>
                    <br />
                    <p className="preptime">{(selectedRecipe) ? selectedRecipe.preptime: ""}</p>
                    <p className="cooktime">{(selectedRecipe) ? selectedRecipe.cooktime: ""}</p>
                    <p className="servings">{(selectedRecipe) ? selectedRecipe.servings: ""}</p>
                    <p className="ingredients">{(selectedRecipe) ? selectedRecipe.ingredients: ""}</p>
                    <p className="directions">{(selectedRecipe) ? selectedRecipe.directions: ""}</p>
                </div>
            </div>
        );
    }
}

export default RecipePage;