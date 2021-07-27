const appId = "cc3547a6";
const appKey = "5f291e4e74b80618f864b4ca0c647341";
//const requestURL = `https://api.edamam.com/search?q=kale&app_id=${appId}&app_key=${appKey}`;
//const recipeLink = document.querySelector("#recipe-label");

//Query selecting the articles and assigning them to the DOM
const article1 = document.querySelector("card1");
const article2 = document.querySelector("card2");
const article3 = document.querySelector("card3");
const article4 = document.querySelector("card4");
const article5 = document.querySelector("card5");

//Query selcting all the links and assigning them to the DOM
const recipeLink1 = document.querySelector("recipeLink1");
const recipeLink2 = document.querySelector("recipeLink2");
const recipeLink3 = document.querySelector("recipeLink3");
const recipeLink4 = document.querySelector("recipeLink4");
const recipeLink5 = document.querySelector("recipeLink5");

//Query selecting all the recipe <h4> and assigning them to the DOM
const recipeHeader1 = document.querySelector("recipe1");
const recipeHeader2 = document.querySelector("recipe2");
const recipeHeader3 = document.querySelector("recipe3");
const recipeHeader4 = document.querySelector("recipe4");
const recipeHeader5 = document.querySelector("recipe5");

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
  console.log(recipe);
  recipeLink.innerHTML = recipe.hits;

};
