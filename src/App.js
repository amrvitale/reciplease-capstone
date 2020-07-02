import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Login from './components/login/Login'
import Signup from './components/signup/Signup';
import PostRecipe from './components/postrecipe/PostRecipe';
import Nav from './components/nav/Nav';
import Kitchen from './components/kitchen/Kitchen';
import Search from './components/search/Search'
import MyRecipes from './components/myrecipes/MyRecipes'
import SearchResults from './components/searchresults/SearchResults'
import ViewRecipe from './components/viewrecipe/ViewRecipe';
import Edit from './components/editrecipe/EditRecipe'
import EditRecipe from './components/editrecipe/EditRecipe';
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
      this.setState( {recipes} )
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
      }

    return (
      <ApiContext.Provider value={providerValue}>
        <div className="App">
        <Nav />
        <Route exact path = '/' component={Signup}/>
        <Route path= '/login' component={Login} />
        <Route path= '/mykitchen' component={Kitchen} />
        <Route path= '/postrecipe' component={PostRecipe} />
        <Route path= '/search' component={Search} />
        <Route path='/results' component={SearchResults} />

        <Route 
          path= '/myrecipes' 
          render={(props) => <MyRecipes {...props} recipes={this.state.recipes} />} 
        />

        <Route path= '/viewrecipe' component={ViewRecipe} />
        <Route path='/editrecipe' component={EditRecipe} />
        </div>
      </ApiContext.Provider>
    );
  }
}
export default App;
