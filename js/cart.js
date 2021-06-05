function displayCart() {

    let cartTotal = 0;

    const itemsWrap = document.querySelector(".cart .items-wrap");

    if (!itemsWrap) {
        return;
    }

    let cartObject = JSON.parse(localStorage.getItem("cart"));

    if (!cartObject) {

        itemsWrap.innerHTML = `<h3 class="empty">Cart is empty</h3>`;

    } else {

        const productsIds = cartObject.items.map((item) => {
            return parseInt(item.productId);

        })

        fetch(`${getRestApiData().url}products?consumer_key=${getRestApiData().clientKey}&consumer_secret=${getRestApiData().clientSecret}&include=${productsIds.join(",")}`)
            .then((res) => {
                return res.json();
            })
            .then((productsArr) => {
                for (let product of productsArr) {

                    const productId = product.id;
                    const productQuantity = cartObject.items.find((item) => {
                        return item.productId == productId

                    }).quantity;

                    const productTotal = productQuantity * parseInt(product.price);
                    cartTotal += productTotal;

                    const featureImage = product.images[0].src;
                    const itemBox = document.createElement("div");
                    itemBox.classList.add("item-box");
                    itemBox.innerHTML = ` 
                                   
                                    <img class="cart-product-image" src="${featureImage}" alt="">
                                    <p class="product-title cart-text">${product.name}</p>
                                    <p class="quantity cart-text">${productQuantity}</p>
                                    <p class="cart-product-price cart-text">${product.price}$</p>
                                    <p class="cart-product-total cart-text">${productTotal}$</p>
                                    <button class="btn-remove-cart js-remove-product" data-product-id="${product.id}">Remove</button>
 `;

                    itemsWrap.appendChild(itemBox);
                }

                document.querySelector(".js-total-cart").innerHTML = cartTotal + "$";

            })
    }
}
window.addEventListener("DOMContentLoaded", () => {
    displayCart();
})

