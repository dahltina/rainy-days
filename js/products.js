
const baseUrl = "https://rainydays.tinadahl.no/wp-json/wc/store/products";
// ?per_page=100

// FEATURED PRODUCTS INDEX PAGE

const featuredUrl = baseUrl + "?featured=true";
const featuredContainer = document.querySelector(".container-3-index");

async function getFeaturedJackets() {

    try {
        const response = await fetch(featuredUrl);
        const results = await response.json();
        console.log(results);

        for (let i = 0; i < results.length; i++) {

            featuredContainer.innerHTML += `<a href="product.html?id=${results[i].id}">
                                                <div class="box-1">
                                                    <img class="img small" src="${results[i].images[0].src}" alt="${results[i].name}">
                                                    <div class="jacket-title"><h3>${results[i].name}</h3></div>
                                                    <img class="like-icon" src="images/icons/like.svg" alt="add to favorites">
                                                    <div class="rating"><img class="rating" src="images/buttons/rating.svg" alt="rating"></div>
                                                    <div class="colors"><img src="images/buttons/colors.svg" alt="available colors"></div>
                                                    <div class="price">USD: ${results[i].prices.regular_price}</p></div>
                                                </div>
                                            </a>`
        }
    }
    catch (error) {
        featuredContainer.innerHTML = displayError("An error occured while trying to fetch the products");
    }
}

getFeaturedJackets();


// MENS JACKETS PAGE

const mensUrl = baseUrl + "?category=16";
const productContainer = document.querySelector(".container-3");

async function getMensJackets() {

    try {
        const response = await fetch(mensUrl);
        const results = await response.json();
        console.log(results);

        for (let i = 0; i < results.length; i++) {

            productContainer.innerHTML += `<a href="product.html?id=${results[i].id}">
                                                <div class="box-1">
                                                    <img class="img small" src="${results[i].images[0].src}" alt="${results[i].name}">
                                                    <div class="jacket-title"><h3>${results[i].name}</h3></div>
                                                    <div class="like-icon"><img src="images/icons/like.svg" alt="add to favorites"></div>
                                                    <div class="rating"><img src="images/buttons/rating.svg" alt="rating"></div>
                                                    <div class="colors"><img src="images/buttons/colors.svg" alt="available colors"></div>
                                                    <div class="price"> USD: ${results[i].prices.regular_price}</div>
                                                </div>
                                            </a>`
        }
    }
    catch (error) {
        productContainer.innerHTML = displayError("An error occured while trying to fetch the products");
    }
}

getMensJackets();


// WOMENS JACKETS PAGE

const womensUrl = baseUrl + "?category=19";
const womensContainer = document.querySelector(".container-3-womens");

async function getWomensJackets() {

    try {
        const response = await fetch(womensUrl);
        const results = await response.json();
        console.log(results);

        for (let i = 0; i < results.length; i++) {

            womensContainer.innerHTML += `<a href="product.html?id=${results[i].id}">
                                                <div class="box-1">
                                                    <img class="img small" src="${results[i].images[0].src}" alt="${results[i].name}">
                                                    <div class="jacket-title"><h3>${results[i].name}</h3></div>
                                                    <div class="like-icon"><img src="images/icons/like.svg" alt="add to favorites"></div>
                                                    <div class="rating"><img src="images/buttons/rating.svg" alt="rating"></div>
                                                    <div class="colors"><img src="images/buttons/colors.svg" alt="available colors"></div>
                                                    <div class="price"> USD: ${results[i].prices.regular_price}</div>
                                                </div>
                                            </a>`
        }
    }
    catch (error) {
        womensContainer.innerHTML = displayError("An error occured while trying to fetch the products");
        console.log(error);
    }
}

getWomensJackets();


// NEW IN JACKET PAGE

const newsUrl = baseUrl + "?category=17";
const newsContainer = document.querySelector(".container-3-news");

async function getNewJackets() {

    try {
        const response = await fetch(newsUrl);
        const results = await response.json();
        console.log(results);

        for (let i = 0; i < results.length; i++) {

            newsContainer.innerHTML += `<a href="product.html?id=${results[i].id}">
                                                <div class="box-1">
                                                    <img class="img small" src="${results[i].images[0].src}" alt="${results[i].name}">
                                                    <div class="jacket-title"><h3>${results[i].name}</h3></div>
                                                    <div class="like-icon"><img src="images/icons/like.svg" alt="add to favorites"></div>
                                                    <div class="rating"><img src="images/buttons/rating.svg" alt="rating"></div>
                                                    <div class="colors"><img src="images/buttons/colors.svg" alt="available colors"></div>
                                                    <div class="price"> USD: ${results[i].prices.regular_price}</div>
                                                </div>
                                            </a>`
        }
    }
    catch (error) {
        newsContainer.innerHTML = displayError("An error occured while trying to fetch the products");
    }
}

getNewJackets();


// OUTLET JACKET PAGE

const outletUrl = baseUrl + "?category=18";
const outletContainer = document.querySelector(".container-3-outlet");

async function getOutletProducts() {
    try {
        const response = await fetch(outletUrl);
        const results = await response.json();
        console.log(results);

        for (let i = 0; i < results.length; i++) {

            outletContainer.innerHTML += `<a href="product.html?id=${results[i].id}">
                                            <div class="box-1">
                                                <img class="img small" src="${results[i].images[0].src}" alt="${results[i].name}">
                                                <div class="jacket-title"><h3>${results[i].name}</h3></div>
                                                <div class="like-icon"><img src="images/icons/like.svg" alt="add to favorites"></div>
                                                <div class="rating"><img src="images/buttons/rating.svg" alt="rating"></div>
                                                <div class="colors"><img src="images/buttons/colors.svg" alt="available colors"></div>
                                                <div class="price dropped"> USD: ${results[i].prices.sale_price}<s class="price">USD ${results[i].prices.regular_price}</s></div>
                                            </div>
                                        </a>`
        }
    }
    catch (error) {
        outletContainer.innerHTML = displayError("An error occured while trying to fetch the products");
    }
}

getOutletProducts();

