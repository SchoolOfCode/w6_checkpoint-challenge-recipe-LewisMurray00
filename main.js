const appId = "cc3547a6";
const appKey = "5f291e4e74b80618f864b4ca0c647341";
const requestURL = `https://api.edamam.com/search?q=kale&app_id=${appId}&app_key=${appKey}`;
const recipeLink = document.querySelector("#recipe-label");

let foodToSearch = null;

function handleRecipeClick() {
  fetchRecipe(foodToSearch);
}

function handleFoodChange() {
  foodToSearch = document.querySelector("#food-input").value;
}

async function fetchRecipe(food) {
  //--- write your code below ---
  //--- write your code above ---
  const response = await fetch(`https://api.edamam.com/search?q=${food}&app_id=cc3547a6&app_key=5f291e4e74b80618f864b4ca0c647341`);
  const recipe = await response.json();
  //console.log(recipe);
  recipeLink.innerHTML = recipe; 

};
