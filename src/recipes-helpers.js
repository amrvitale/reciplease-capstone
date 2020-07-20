export const findRecipe = (recipes = [], recipe_id) =>
    recipes.find(recipe => recipe.id === recipe_id)