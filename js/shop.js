const productsWrap = document.querySelector(".products-wrap");
const currentSex = getParameterByName("sex");
const errorBox = document.querySelector(".error-box");


fetch(`${getRestApiData().url}products?consumer_key=${getRestApiData().clientKey}&consumer_secret=${getRestApiData().clientSecret}`)
    .then((response) => {
        return response.json()
    })
    .then((products) => {

        productsWrap.innerHTML = "";

        for (let product of products) {

            const featureImage = product.images[0].src;
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                            <p class="details">more <span class="header-break">details</p>
                            <a href="./single-product.html?id=${product.id}"><img src="${featureImage}"alt="jacket"></a>
                            <h4 class="cards-headers-small">PRICE:${product.price}$</h4>
                            <a class="btn btn-jacket js-add-to-cart" data-product-id="${product.id}" href="/pages/cart.html">ADD TO CART</a>
                            
                         `;

            productsWrap.appendChild(card);
            let title;

            if (currentSex === "male") {
                title = "Men"
            } else {
                title = "Women"
            }
            document.querySelector(".js-page-title").innerHTML = title;
        }
    })
    .catch(() => errorBox.style.display = "block");

document.body.addEventListener("click", (ev) => {
    if (ev.target.classList.contains("js-add-to-cart")) {
        const messageAdded = document.querySelector(".product-added-info-fixed");
        messageAdded.classList.remove("hidden");

        setTimeout(() => {
            messageAdded.classList.add("hidden");
        }, 2000);

    }
})


