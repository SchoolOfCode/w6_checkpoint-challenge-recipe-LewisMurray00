const appId = "cc3547a6";
const appKey = "5f291e4e74b80618f864b4ca0c647341";
//const requestURL = `https://api.edamam.com/search?q=kale&app_id=${appId}&app_key=${appKey}`;
//const recipeLink = document.querySelector("#recipe-label");

const results = document.querySelector("#results");
const recipeSection = document.querySelector("#recipe-section");

//Query selecting the articles and assigning them to the DOM
const article1 = document.querySelector("#card1");
const article2 = document.querySelector("#card2");
const article3 = document.querySelector("#card3");
const article4 = document.querySelector("#card4");
const article5 = document.querySelector("#card5");

//Query selcting all the links and assigning them to the DOM
const recipeLink1 = document.querySelector("#recipeLink1");
const recipeLink2 = document.querySelector("#recipeLink2");
const recipeLink3 = document.querySelector("#recipeLink3");
const recipeLink4 = document.querySelector("#recipeLink4");
const recipeLink5 = document.querySelector("#recipeLink5");

//Query selecting all the recipe <h4> and assigning them to the DOM
const recipeHeader1 = document.querySelector("#recipe1");
const recipeHeader2 = document.querySelector("#recipe2");
const recipeHeader3 = document.querySelector("#recipe3");
const recipeHeader4 = document.querySelector("#recipe4");
const recipeHeader5 = document.querySelector("#recipe5");

//Query selecting all the images and assigning them to the DOM
const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");
const img4 = document.querySelector("#img4");
const img5 = document.querySelector("#img5");

//Adding the DOM elements into an array to be called upon
let recipes = [recipeLink1, recipeLink2, recipeLink3, recipeLink4, recipeLink5];
let articles = [article1, article2, article3, article4, article5];
let foodToSearch = null;
let images = [img1, img2, img3, img4, img5];
let articleTitles = [
  recipeHeader1,
  recipeHeader2,
  recipeHeader3,
  recipeHeader4,
  recipeHeader5
];

function handleRecipeClick(){
  fetchRecipe(foodToSearch);
}

function handleFoodChange(){
  foodToSearch = document.querySelector("#food-input").value;
}

async function fetchRecipe(food) {
  //--- write your code below ---
  let requestUrl = `https://api.edamam.com/search?q=${food}&app_id=${appId}&app_key=${appKey}`;
  const response = await fetch(requestUrl);
  const data = await response.json();

  for (i=0; i < recipes.length; i++){
    recipes[i].innerHTML = data.hits[i].recipe.label;
    recipes[i].href = data.hits[i].recipe.url;
    images[i].src = data.hits[i].recipe.image;
  }
  results.innerHTML = `Showing results for: ${food}`;
  //--- write your code above ---
};
