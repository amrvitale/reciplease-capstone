import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Login from './components/login/Login'
import Signup from './components/signup/Signup';
import PostRecipe from './components/postrecipe/PostRecipe';
import Nav from './components/nav/Nav';
import Dash from './components/dash/Dash';
import Search from './components/search/Search'
import MyRecipes from './components/myrecipes/MyRecipes'
import SearchResults from './components/searchresults/SearchResults'
import ViewRecipe from './components/viewrecipe/ViewRecipe';
import Edit from './components/editrecipe/EditRecipe'
import EditRecipe from './components/editrecipe/EditRecipe';


function App() {
  return (
    <div className="App">
    <Nav />
    <Route exact path = '/' component={Signup}/>
    <Route path= '/login' component={Login} />
    <Route path= '/mydash' component={Dash} />
    <Route path= '/postrecipe' component={PostRecipe} />
    <Route path= '/search' component={Search} />
    <Route path='/results' component={SearchResults} />
    <Route path= '/myrecipes' component={MyRecipes} />
    <Route path= '/viewrecipe' component={ViewRecipe} />
    <Route path='/editrecipe' component={EditRecipe} />
    </div>
  );
}

export default App;
