function handleAddToCart() {
    document.body.addEventListener("click", (e) => {

        if (!e.target.classList.contains("js-add-to-cart")) {
            return;
        }
        e.preventDefault();
        const productId = e.target.dataset.productId;

        let cartObject = JSON.parse(localStorage.getItem("cart"));

        if (!cartObject) {
            cartObject = {
                "items": [
                    {
                        "productId": productId,
                        "quantity": 1,
                    }
                ]
            }
        } else {
            const productExist = cartObject.items.find((item) => {
                return item.productId === productId;
            })

            if (productExist) {
                productExist.quantity++;
            } else {
                cartObject.items.push({
                    "productId": productId,
                    "quantity": 1,
                })
            }
        }

        localStorage.setItem("cart", JSON.stringify(cartObject));
        const cartIcon = document.querySelector(".cart-total-items");
        const newIcon = cartIcon.cloneNode(true);
        cartIcon.parentNode.replaceChild(newIcon, cartIcon);
        newIcon.innerHTML = getCartTotalItems();
        newIcon.classList.add("animate");
    })
}

function displayCardTotals() {
    if (document.querySelector(".cart-total-items") && typeof getCartTotalItems !== 'undefined') {
        document.querySelector(".cart-total-items").innerHTML = getCartTotalItems();
    }
}

function handleRemoveFromCart() {

    document.body.addEventListener("click", (e) => {
        if (!e.target.classList.contains("js-remove-product")) {
            return;
        }
        const productId = e.target.dataset.productId;
        let cartObject = JSON.parse(localStorage.getItem("cart"));

        const updatedItems = cartObject.items.filter((item) => {
            return item.productId !== productId;
        })

        const updatedCartObject = {
            "items": updatedItems
        }

        localStorage.setItem("cart", JSON.stringify(updatedCartObject));
        window.location.reload();
        return;
    })
}

function handleEmptyCart() {
    document.body.addEventListener("click", (e) => {
        if (!e.target.classList.contains("js-clear-cart")) {
            return;
        }

        localStorage.removeItem("cart")
        window.location.reload();
        return;
    })
}

function handleCurrentMenu() {

    const currentPagePath = window.location.pathname;
    if (currentPagePath.includes("shop")) {

        const category = getParameterByName("sex");
        if (category == "male") {
            document.querySelector("header ul li.men").classList.add("current-page")
        } else if (category == "female") {
            document.querySelector("header ul li.women").classList.add("current-page")
        }
    } else {
        const menuItems = document.querySelectorAll("header nav ul li");
        for (let item of menuItems) {

            if (currentPagePath.includes(item.dataset.pageName)) {
                item.classList.add("current-page");
            }
        }
    }
}


window.addEventListener("DOMContentLoaded", () => {
    handleAddToCart();
    displayCardTotals();
    handleRemoveFromCart();
    handleEmptyCart();
    handleCurrentMenu();
})
