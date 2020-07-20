import React from 'react';
import ApiContext from '../../ApiContext'
import config from '../../config'
import './EditRecipe.css'

class EditRecipe extends React.Component {
    componentDidMount(){
        const {recipes = []} = this.context
        const {id} = this.props.match.params

        const editRecipe = recipes.find(recipe => recipe.id === parseInt(id))

        this.setState({
            ...editRecipe,
        })
    }
        static defaultProps = {
            match: {
              params: {}
            }
          }

        static contextType = ApiContext

        constructor(props) {
            super(props);
            this.state = {
                recipename: "",
                experience: "",
                preptime: "",
                cooktime: "",
                servings: "",
                ingredients: "",
                directions: ""
            };

            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }

        handleChange = e => {
            this.setState({[e.target.getAttribute('name')]: e.target.value})
        }

        handleSubmit = e => {
            e.preventDefault()
            const newRecipe = {
                recipename: this.state.recipename,
                experience: this.state.experience,
                preptime: this.state.preptime,
                cooktime: this.state.cooktime,
                servings: this.state.servings,
                ingredients: this.state.ingredients,
                directions: this.state.directions,
            }
            console.log(newRecipe)
            
            fetch(`${config.API_ENDPOINT}/myrecipes/${this.props.match.params.id}`, {
                method: 'PUT',
                headers: {
                    'content-type':'application/json'
                },
                body: JSON.stringify(newRecipe),
            })

            .then(recipe => {
                console.log(recipe)
                this.props.fetchRecipes();
                this.props.history.push(`/myrecipes`);
            })
            .catch(error => {
                console.log( {error} )
            })
        }
   


    render() {
        const {id} = this.props.match.params
        const styleTextArea = {
            minHeight: '380px',
            minWidth: '380px',
            padding: '9px',
            boxSizing: 'border-box',
            fontSize: '15px',
            textAlign: 'left'
        };

        
        return (
            <div className="editRecipePage"> 
            <div className="editRecipeHero">
                <h1 className="editHeading">Edit Your Recipe</h1>
            </div>
            <form onSubmit={this.handleSubmit}>
                <section className="recipeIntro">
                    <label htmlFor="recipename">Recipe Name:</label>
                    <input value ={this.state.recipename} type="text" name="recipename" onChange={this.handleChange} required></input>
                    <br />

                    <textarea value ={this.state.experience} className="experience" name="experience" onChange={this.handleChange} style={styleTextArea} placeholder="Tell us about your experience making this recipe. Was it difficult? Was it fun? Did you try any new techniques or ingredients not normally associated with this cuisine?"></textarea>
                    <br />

                    <label htmlFor="prepTime">Prep Time:</label>
                    <input value ={this.state.preptime} type="text" name="preptime" onChange={this.handleChange} required></input>
                    <br />

                    <label htmlFor="cookTime">Cook Time:</label>
                    <input value ={this.state.cooktime} type="text" name="cooktime" onChange={this.handleChange} required></input>
                    <br />

                    <label htmlFor="servings">Servings:</label>
                    <input value ={this.state.servings}  type="text" name="servings" onChange={this.handleChange} required></input> 
                    <br />
                    
                </section>

                <section className="ingredientsList">
                    <h2>Ingredients</h2>
                    <textarea value ={this.state.ingredients} className="ingredients" name="ingredients" onChange={this.handleChange}  style={styleTextArea} placeholder="Please add each ingredient on a separate line." required></textarea>
                </section>

                <section className="directions">
                    <h2>Directions</h2>
                    <textarea value ={this.state.directions} className="directions" name="directions" onChange={this.handleChange} style={styleTextArea} placeholder="Please add each step on a separate line." required></textarea>
                </section>

                <input type="submit" className="submitBtn" value="Submit"></input>
            </form>
        </div>
        );
    }
}

export default EditRecipe;