// Write your Pizza Builder JavaScript in this file.



// Constants 
var basePrice = 10
var ingredients = {
  pepperonni: {name: 'Pepperonni', price: 1},
  mushrooms: {name: 'Mushrooms', price: 1},
  greenPeppers: {name: 'Green Peppers', price: 1},
  whiteSauce: {name: 'White sauce', price: 3},
  glutenFreeCrust: {name: 'Gluten-free crust', price: 5}
}

// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
}

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni()
  renderMushrooms()
  renderGreenPeppers()
  renderWhiteSauce()
  renderGlutenFreeCrust()

  renderButtons()
  renderPrice()
}

function renderPepperonni() {
  document.querySelectorAll('.pep').forEach(function($pep){
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    }
    else {
      $pep.style.visibility = "hidden";
    }
  })
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(function($mushroom){
    if (state.mushrooms) {
      $mushroom.style.visibility = "visible";
    }
    else {
      $mushroom.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(function($greenPepper){
    if (state.greenPeppers) {
      $greenPepper.style.visibility = "visible";
    }
    else {
      $greenPepper.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">
  document.querySelectorAll('.sauce-white').forEach(function($whiteSauce){
    if (state.whiteSauce) {
      $whiteSauce.style.visibility = "visible";
    }
    else {
      $whiteSauce.style.visibility = "hidden";
    }
  })
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let $crust = document.querySelector('.crust')
    if (state.glutenFreeCrust) {
      $crust.classList.add('crust-gluten-free');
    } else {
      $crust.classList.remove('crust-gluten-free');
    }
  };

  /*
  object.onclick = function(){myScript};
function renderButtons() {
    // Iteration 3: add/remove the class "active" of each `<button class="btn">`
    let $buttons = document.querySelectorAll('.btn')
    for (let i = 0; i < $buttons.length; i++){
     //if (this[i].state )
     $button.classList.add('active')} 
    else {
      $button.classList.remove('active');
    }
*/

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  $priceList.innerHTML = "" // Clear the content
  let totalPrice = basePrice
  for (const key in ingredients) {
    // If the ingredient is on the pizza
    if (state[key]) {
      let name = ingredients[key].name
      let price = ingredients[key].price
      $priceList.innerHTML += `<li>$${price} ${name}</li>`
      totalPrice += price
    }
  }
  $totalPrice.innerText = "$"+totalPrice
}


function renderButtons() {

  //better solution
  //if (state.pepperonni)$btnPpperonni.classList.add('active')
  //else $btnPepperonni.classList.remove

    let $buttonp = document.querySelector('.btn-pepperonni')
    if (state.pepperonni === true) {
      $buttonp.classList.add('active')} 
    else {
      $buttonp.classList.remove('active');
    }

    let $buttonm = document.querySelector('.btn-mushrooms')
    if (state.mushrooms === true) {
      $buttonm.classList.add('active')} 
    else {
      $buttonm.classList.remove('active');
    }

    let $buttongp = document.querySelector('.btn-green-peppers')
    if (state.greenPeppers === true) {
      $buttongp.classList.add('active')} 
    else {
      $buttongp.classList.remove('active');
    }

    let $buttonws = document.querySelector('.btn-sauce')
    if (state.whiteSauce === true) {
      $buttonws.classList.add('active')} 
    else {
      $buttonws.classList.remove('active');
    }

    let $buttongf = document.querySelector('.btn-crust')
    if (state.glutenFreeCrust === true) {
      $buttongf.classList.add('active')} 
    else {
      $buttongf.classList.remove('active');
    }
}



function renderPrice() {

let $totalPrice = document.querySelector('.price strong');
let $priceList = document.querySelector('.price ul');
$priceList.innerHTML = "";
let totalPrice = basePrice;
for (const key in ingredients) {
  if (state[key]) {
    let name = ingredients[key].name
    let price = ingredients[key].price
    $priceList.innerHTML += `<li>$${price} ${name}</li>`
    totalPrice += price
  }
}
$totalPrice.innerText = "$"+ totalPrice
}
renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function() {
  state.mushrooms = !state.mushrooms
  renderEverything()
}
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function() {
  state.greenPeppers = !state.greenPeppers
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function() {
  state.whiteSauce = !state.whiteSauce 
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust 
  renderEverything()
}