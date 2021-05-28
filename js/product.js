
const productContainer = document.querySelector(".container-jacket");
const breadcrumb = document.querySelector(".breadcrumb");
const pageTitle = document.querySelector("title");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://rainydays.tinadahl.no/wp-json/wc/store/products/" + id;

console.log(url);

async function getProduct() {

    try {
        const response = await fetch(url);
        const results = await response.json();

        console.log(results);

        pageTitle.innerHTML +=  `${results.name}`;

        breadcrumb.innerHTML += `<a href="index.html" class="breadcrumb">Home ></a>
                                <a href="mens.html" class="breadcrumb"> Mens ></a> <b>${results.name}</b>`

        productContainer.innerHTML += `<div class="box-2">
                                            <img class="medium-square" src="${results.images[0].src}" alt="${results.name}">
                                            <div class="thumb-images">
                                            <img class="thumb" src="images/jacket_1-1.jpg" alt="forest jacket seen from front">
                                            <img class="thumb" src="images/jacket_1-3.jpg" alt="forest jacket seen from side">
                                            <img class="thumb" src="images/jacket_1-2.jpg" alt="forest jacket seen from back">
                                        </div>
                                        </div>
                                        <div class="box-3">
                                        <h2 class="forest">${results.name}</h2>
                                        <img class="favorite-icon" src="images/icons/like.svg" alt="add to favorites">
                                        <p>USD ${results.prices.regular_price}</p>
                                        <div><img src="images/buttons/rating2.svg" alt="rating"></div>

                                            <ul class="jacket-specs">
                                            <li>Waterproof</li>
                                            <li>Windproof</li>
                                            <li>Breathing material</li>
                                            <li>Lightweight</li>
                                            </ul>
                                            <p>${results.description}</p>
                                            <label for="color-select">Color</label>
                                            <select name="color" id="color-select">
                                                <option value="black">Black</option>
                                                <option value="olive">Olive</option>
                                                <option value="brown">Brown</option>
                                                <option value="blue">Blue</option>
                                            </select>
                                            <label for="size-select">Size</label>
                                            <select name="size" id="size-select">
                                                <option value="xs">XS</option>
                                                <option value="s">S</option>
                                                <option value="m">M</option>
                                                <option value="l">L</option>
                                                <option value="xl">XL</option>
                                                <option value="xxl">XXL</option>
                                            </select>
                                        </div>
                                        </div>`

    }
    catch (error) {
        console.log(error);
    }
}


// add to cart
const addToCartbutton = document.querySelector("#add");
const buyNowbutton = document.querySelector("#buyNow");
const addedToCart = document.querySelector("#cart-add");

getProduct().then(() => {
    addToCartbutton.onclick = function () {
        addedToCart.innerHTML = `<p>Added to cart!</p>
                                <a href="mens.html">Keep shopping?</a>
                                or <a href="checkout.html">Go to checkout</a>`;
        addedToCart.classList.add("addedToCart");
        console.log("button click");
    }

    buyNowbutton.onclick = function () {
        window.location.href = "checkout.html";
    }
});



