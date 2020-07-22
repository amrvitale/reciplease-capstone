import React from 'react'
import './PostRecipe.css'
import ApiContext from '../../ApiContext';
import config from '../../config'

class PostRecipe extends React.Component {

    static defaultProps = {
        history: {
            push: () => { }
        },
    }

    static contextType = ApiContext;

    constructor(props) {
        super(props);
        this.state = {value: ''};

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
           directions: this.state.directions  
        }
        console.log(newRecipe)

        fetch(`${config.API_ENDPOINT}/myrecipes`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newRecipe),
        })
        .then(res => {
          
            return res.json()
        })
        .then(recipe => {
            console.log(recipe)
            this.context.addRecipe(recipe)
            this.props.history.push(`/myrecipes`)
        })
        .catch(error => {
            console.log({ error })
        
        })
    }
    render() {
        const styleTextArea = {
            minHeight: '150px',
            minWidth: '300px',
            padding: '9px',
            boxSizing: 'border-box',
            fontSize: '15px',
            textAlign: 'left'
        };

        return (
            <div className="postRecipePage"> 
                <div className="postRecipeHero">
                    <h1 className="postHeading">Post Your Recipe Below</h1>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <section className="recipeIntro">
                        <label htmlFor="recipename">Recipe Name:</label>
                        <input type="text" name="recipename" onChange={this.handleChange} maxLength={30} required></input>
                        <br />

                        <label htmlFor="experience">Experience:</label>
                        <textarea className="experience" name="experience" onChange={this.handleChange} style={styleTextArea} placeholder="Tell us about your experience making this recipe. Was it difficult? Was it fun? Did you try any new techniques or ingredients not normally associated with this cuisine?"></textarea>
                        <br />

                        <label htmlFor="prepTime">Prep Time:</label>
                        <input type="text" name="preptime" onChange={this.handleChange} required></input>
                        <br />

                        <label htmlFor="cookTime">Cook Time:</label>
                        <input type="text" name="cooktime" onChange={this.handleChange} required></input>
                        <br />

                        <label htmlFor="servings">Servings:</label>
                        <input type="text" name="servings" onChange={this.handleChange} required></input> 
                        <br />
                        
                    </section>

                    <section className="ingredientsList">
                        <h2>Ingredients</h2>
                        <textarea className="ingredients" name="ingredients" onChange={this.handleChange}  style={styleTextArea} placeholder="Please add each ingredient on a separate line." required></textarea>
                    </section>

                    <section className="directions">
                        <h2>Directions</h2>
                        <textarea className="directions" name="directions" onChange={this.handleChange} style={styleTextArea} placeholder="Please add each step on a separate line." required></textarea>
                    </section>

                    <input type="submit" className="submitBtn" value="Submit"></input>
                </form>
            </div>
        );
    }
}

export default PostRecipe;