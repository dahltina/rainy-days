"use strict"

// add to cart

const addToCartbutton = document.querySelector("#add");
const buyNowbutton = document.querySelector("#buyNow");
const addedToCart = document.querySelector("#cart-add");
const cartContainer = document.querySelector(".cart");
const searchContainer = document.querySelector(".search");
let itemsInCart = document.querySelector("#itemsInCart");

let counter = 0;
itemsInCart = counter;


addToCartbutton.onclick = function () {
    addedToCart.innerHTML = `<p>Added to cart!</p>
                            <a href="mens.html">Keep shopping?</a>
                            or <a href="checkout.html">Go to checkout</a>`;
    addedToCart.classList.add("addedToCart");
    addedToCart.classList.add("item-cart");
    itemsInCart.classList.add("itemsInCart");
    counter++;
    //cartContainer.style.marginRight = "0px";
    //searchContainer.style.marginLeft = "0px";
}

buyNowbutton.onclick = function () {
    window.location.href = "checkout.html";
}

function addItemToCart() {
    counter++;
}

// checkout login form

// const username = document.querySelector("#userName");
// const usernameError = document.querySelector("#userNameError");
// const password = document.querySelector("#password");
// const passwordError = document.querySelector("#passwordError");
const loginBtn = document.querySelector("#loginBtn");

loginBtn.onclick = function () {
    window.location.href = "checkout-2.html";
}