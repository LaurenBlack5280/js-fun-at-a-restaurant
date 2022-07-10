function createRestaurant(name) {
var pizzaRestaurant = {
  name,
  menus: {breakfast: [], lunch: [], dinner: []}
  }
return pizzaRestaurant
}

function addMenuItem(pizzaRestaurant, menuItem) {
  if (menuItem.type === "lunch" && !pizzaRestaurant.menus.lunch.includes(menuItem)) {
    pizzaRestaurant.menus.lunch.push(menuItem)
  } else if (menuItem.type === "breakfast" && !pizzaRestaurant.menus.breakfast.includes(menuItem)) {
    pizzaRestaurant.menus.breakfast.push(menuItem)
  } else if (menuItem.type === "dinner"  && !pizzaRestaurant.menus.dinner.includes(menuItem)) {
    pizzaRestaurant.menus.dinner.push(menuItem)
  }
}

function removeMenuItem(pizzaRestaurant, menuItem, type) {
  var menuItemType = pizzaRestaurant.menus[type]
  for (var i = 0; i < menuItemType.length; i ++) {
     if (menuItemType) {
      pizzaRestaurant.menus[type].splice(0, 1)
    return `No one is eating our ${menuItem} - it has been removed from the ${type} menu!`
    }
  }return `Sorry, we don't sell ${menuItem}, try adding a new recipe!`
}



module.exports = {
   createRestaurant,
   addMenuItem,
   removeMenuItem
}
