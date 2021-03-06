import React from 'react';
import './PostRecipe.css';
import ApiContext from '../../ApiContext';
import config from '../../config';

/* This component renders the Post Recipe page, found by clicking My Kitchen > Post New Recipe. */

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
                        <label htmlFor="recipename">Recipe Name:
                            <input type="text" name="recipename" id="recipename" onChange={this.handleChange} maxLength={30} required></input>
                        </label>
                        <br />

                        <label htmlFor="experience">Experience:
                        <br />
                            <textarea className="experience" name="experience" id="experience" onChange={this.handleChange} style={styleTextArea} placeholder="Tell us about your experience making this recipe. Was it difficult? Was it fun? Did you try any new techniques or ingredients not normally associated with this cuisine?"></textarea>
                        </label>
                        <br />

                        <label htmlFor="preptime">Prep Time:
                        <input type="text" name="preptime" id="preptime" onChange={this.handleChange} required></input>
                        </label>
                        <br />

                        <label htmlFor="cooktime">Cook Time:
                            <input type="text" name="cooktime" id="cooktime" onChange={this.handleChange} required></input>
                        </label>
                        <br />

                        <label htmlFor="servings">Servings:
                            <input type="text" name="servings" id="servings" onChange={this.handleChange} required></input> 
                        </label>
                        <br />
                    </section>

                    <section className="ingredientsList">
                        <label htmlFor="ingredients">Ingredients
                        <br />
                            <textarea className="ingredients" id="ingredients" name="ingredients" onChange={this.handleChange}  style={styleTextArea} placeholder="Please add each ingredient on a separate line." required></textarea>
                        </label>
                    </section>

                    <section className="directions">
                        <label htmlFor="directions">Directions
                        <br />
                            <textarea className="directions" name="directions" id="directions" onChange={this.handleChange} style={styleTextArea} placeholder="Please add each step on a separate line." required></textarea>
                        </label>
                        </section>

                    <input type="submit" className="submitBtn" value="Submit"></input>
                </form>
            </div>
        );
    }
}

export default PostRecipe;