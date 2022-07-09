function nameMenuItem(menuItemName) {
  return "Delicious " + menuItemName
}

function createMenuItem(name, price, type) {
  var menuItem = {
    name: name,
    price: price,
    type: type
  }
  return menuItem
}

function addIngredients(newIngredient, ingredients) {
  if (!ingredients.includes(newIngredient)) {
    ingredients.push(newIngredient)
  }
}

function formatPrice(initialPrice) {
  return "$" + initialPrice
}

function decreasePrice(price) {
  var percentage = price * .10
  return price - percentage
}

function createRecipe(title, ingredients, type) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: type
  }
  return recipe
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
