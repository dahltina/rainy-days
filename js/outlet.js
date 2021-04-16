const url = "https://rainydays.tinadahl.no/wp-json/wc/store/products?per_page=100";
const outletContainer = document.querySelector(".container-3-outlet");

async function getProducts() {
    try {
        const response = await fetch(url);
        const results = await response.json();
        console.log(results);

        for (let i = 0; i < results.length; i++) {

            if (results[i].on_sale) {
                continue;
            }

            outletContainer.innerHTML += `<a href="product.html?id=${results[i].id}">
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
        outletContainer.innerHTML = displayError("An error occured while trying to fetch the products");
    }
}

getProducts();

