const productId = parseInt(getParameterByName("id"));
const errorBox = document.querySelector(".error-box");


fetch(`${getRestApiData().url}products/${productId}?consumer_key=${getRestApiData().clientKey}&consumer_secret=${getRestApiData().clientSecret}`)
  .then((resp) => {
    return resp.json()
  })
  .then((product) => {
    
    const mainEl = document.querySelector(".main");
    const productBox = document.createElement("div");
    productBox.classList.add("product-box");
    const featureImage = product.images[0].src;

    productBox.innerHTML = `

                        <div class="product-box-jacket">
                          <div class="product-col-left men">
                            <img class="women-jacket-cart" src="${featureImage}" alt="mens jacket">
                          </div>
                          <div class="product-col-right">
                            <h1>${product.name}</h1>
                            <div>${product.description}</div>
                          <div class="size-select">
                            <h6>SIZE</h6>
                            <input id="size-m" type="radio" name="SIZE" value="M"><label for="size-m">M</label>
                            <input id="size-l" type="radio" name="SIZE" value="L"><label for="size-l">L</label>
                            <input id="size-xl" type="radio" name="SIZE" value="XL"><label for="size-xl">XL</label>
                          </div>
                          <div class="color-select">
                            <h6>COLOR</h6>
                            <input id="red" type="radio" name="COLOR" value="red"><label class="color-red color" for="red"></label>
                            <input id="green" type="radio" name="COLOR" value="green"><label class="color-green color"
                            for="green"></label>
                            <input id="yellow" type="radio" name="COLOR" value="yellow"><label class="color-yellow color"
                            for="yellow"></label>
                          </div>
                          <div class="bottom-box">
                            <p class="price-paragraph">PRICE: ${product.price}$</p>
                            <a class="add-btn  btn btn-jacket js-add-to-cart" data-product-id="${product.id}" href="/pages/cart.html">ADD TO CART</a>
                          </div>
                          </div>
                        </div>
                        </div>`;


    mainEl.appendChild(productBox);

    const addToCart = document.querySelector(".js-add-to-cart");

    addToCart.addEventListener("click", (ev) => {
      
      if (ev.target.classList.contains("js-add-to-cart")) {
        const messageAdded = document.querySelector(".product-added-info-fixed");
        messageAdded.classList.remove("hidden");

        setTimeout(() => {
          messageAdded.classList.add("hidden");
        }, 2000);
      }
    })
  })
  .catch(() => errorBox.style.display = "block");
  




