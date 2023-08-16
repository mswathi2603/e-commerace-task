const cartCountElement = document.querySelector(".cart-count");
const cartPriceElement = document.querySelector(".cart-price");
const addToCartButtons = document.querySelectorAll(".add-to-cart");
const removeFromCartButtons = document.querySelectorAll(".remove-from-cart");
let cartCount = 0;
let cartPrice = 0;

addToCartButtons.forEach((button) => {
button.addEventListener("click", (event) => {
const product = event.target.parentElement;
const productName = product.querySelector("h2").textContent;
const productPrice = parseFloat(product.querySelector("p").textContent.slice(1));

 cartCount++;
 cartPrice += productPrice;

  cartCountElement.textContent = cartCount;
  cartPriceElement.textContent = "$" + cartPrice.toFixed(2);

  });

 });

  removeFromCartButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
  const product = event.target.parentElement;
  const productPrice = parseFloat(product.querySelector("p").textContent.slice(1));

  if (cartCount > 0) {
    cartCount--;
    cartPrice -= productPrice;
    cartCountElement.textContent = cartCount;
    cartPriceElement.textContent = "$" + cartPrice.toFixed(2);

     }

    });
    
  });
