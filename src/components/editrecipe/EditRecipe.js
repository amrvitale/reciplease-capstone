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
                    <label htmlFor="recipename">Recipe Name:
                        <input value ={this.state.recipename} type="text" name="recipename" onChange={this.handleChange} maxLength={30} required></input>
                    </label>
                    <br />

                     <label htmlFor="experience">Experience:  
                        <textarea value ={this.state.experience} className="experience" name="experience" onChange={this.handleChange} style={styleTextArea} placeholder="Tell us about your experience making this recipe. Was it difficult? Was it fun? Did you try any new techniques or ingredients not normally associated with this cuisine?"></textarea>
                    </label> 
                    <br />

                    <label htmlFor="prepTime">Prep Time:
                        <input value ={this.state.preptime} type="text" name="preptime" onChange={this.handleChange} required></input>
                    </label>
                    <br />

                    <label htmlFor="cookTime">Cook Time:
                        <input value ={this.state.cooktime} type="text" name="cooktime" onChange={this.handleChange} required></input>
                    </label>
                    <br />

                    <label htmlFor="servings">Servings:
                        <input value ={this.state.servings}  type="text" name="servings" onChange={this.handleChange} required></input> 
                    </label>
                    <br />
                    
                </section>

                <section className="ingredientsList">
                    <label htmlFor="ingredients">Ingredients
                        <textarea value ={this.state.ingredients} className="ingredients" name="ingredients" onChange={this.handleChange}  style={styleTextArea} placeholder="Please add each ingredient on a separate line." required></textarea>
                    </label>
                </section>

                <section className="directions">
                    <label htmlFor="directions">Directions
                        <textarea value ={this.state.directions} className="directions" name="directions" onChange={this.handleChange} style={styleTextArea} placeholder="Please add each step on a separate line." required></textarea>
                    </label>
                </section>

                <input type="submit" className="submitBtn" value="Submit"></input>
            </form>
        </div>
        );
    }
}

export default EditRecipe;