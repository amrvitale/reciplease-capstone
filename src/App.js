import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Welcome from './components/welcome/Welcome';
import PostRecipe from './components/postrecipe/PostRecipe';
import Nav from './components/nav/Nav';
import Kitchen from './components/kitchen/Kitchen';
import Search from './components/search/Search'
import MyRecipes from './components/myrecipes/MyRecipes'
import EditRecipe from './components/editrecipe/EditRecipe';
import RecipePage from './components/recipepage/RecipePage';
import ApiContext from './ApiContext'
import config from './config'


class App extends React.Component {
  
  state = {
    recipes: []
  };

  componentDidMount() {
    Promise.all( [
      fetch(`${config.API_ENDPOINT}/myrecipes`),
    ])
    .then(([recipesRes]) => {
      if(!recipesRes.ok)
        return recipesRes.json().then(e => Promise.reject(e))

        return Promise.all([
          recipesRes.json()
        ])
    })
    .then(([recipes]) => {
      console.log(recipes, "here we are!")
      this.setState( {recipes: recipes} )
    })
    .catch(error => {
      console.log( {error} )
    })
  }

    addRecipe = recipe => {
      this.setState( {
        recipes: [
          ...this.state.recipes,
          recipe
        ]
      })
    }

    handlePublishRecipe= (id, status) => {
      console.log(id, status)
      this.setState( {
        recipes: this.state.recipes.map((recipe) => {
           if (parseInt(recipe.id) === parseInt(id)) {
            console.log("SETTING NEW STATUS")
              return {
                ...recipe,
                status: status
              } 
           } else {
            return recipe;
           }
         })
      })
    }

    fetchRecipes = (props) => {
      fetch(`${config.API_ENDPOINT}/myrecipes`)
      .then((recipesRes) => {
        if(!recipesRes.ok)
          return recipesRes.json().then((e) => Promise.reject(e));
        return recipesRes.json();
      })
      .then ((recipes) => {
        this.setState( {recipes} );
      })
      .catch((error) => {
        console.log( {error} )
      });
    }

    render() {
      const providerValue = {
        addRecipe: this.addRecipe,
        recipes: this.state.recipes,
        handlePublishRecipe: this.handlePublishRecipe,
        editRecipe: this.editRecipe,
        fetchRecipes: this.fetchRecipes
      }

    return (
      <ApiContext.Provider value={providerValue}>
        <div className="App">
          <Nav />
          <Route exact path = '/' component={Welcome}/>
          <Route path= '/mykitchen' component={Kitchen} />
          <Route path= '/postrecipe' component={PostRecipe} />
          <Route path= '/search' component={Search} />

          <Route 
            path= '/myrecipes' 
            render={(props) => <MyRecipes {...props} recipes={this.state.recipes} />} 
          />

          <Route 
            path= '/recipe/:slug' 
            render={(props) => <RecipePage {...props} recipes={this.state.recipes} handlePublishRecipe={this.handlePublishRecipe} />} 
          />  
          
          
          <Route 
            path='/editrecipe/:id' 
            render={(props) => <EditRecipe {...props} fetchRecipes={this.fetchRecipes} />}
          />

        </div>
      </ApiContext.Provider>
    );
  }
}
export default App;
