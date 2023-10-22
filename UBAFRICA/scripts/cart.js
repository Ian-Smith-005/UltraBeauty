// Function to save cart data to localStorage
function saveCartToStorage() {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

// Function to load cart data from localStorage
function loadCartFromStorage() {
    var storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
        cartItems = JSON.parse(storedCartItems);
        updateCart();
    }
}

var cartItems = [];

// Initial product count
var productCount = 0;

// Function to update and display the product count
function updateProductCount() {
    var productCountElement = document.getElementById("product-counter");
    productCountElement.textContent = productCount;
}

// Function to increment the product count
function addToCart() {
    // Logic to add a product to the cart
    productCount++;
    updateProductCount();
}

// Function to decrement the product count (for example, when removing a product from the cart)
function removeFromCart() {
    // Logic to remove a product from the cart
    if (productCount > 0) {
        productCount--;
        updateProductCount();
    }
}

// Example usage
addToCart(); // Adds a product to the cart
addToCart(); // Adds another product to the cart
removeFromCart(); // Removes a product from the cart

// Call the function to initially display the product count
countProductsInCart();

// Update the cart and product count whenever the cart changes
function updateCart() {
    var cartDiv = document.querySelector(".cart");
    var subtotal = 0;

    // Clear the cart
    cartDiv.innerHTML = "";

    // Iterate through the cart items
    cartItems.forEach(function (item, index) {
        var cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");

        cartItem.innerHTML = `
        <div class="row d-flex justify-content-center border-top">
<div class="col-5">
    <div class="row d-flex">
        <div class="book">
            <img src="${item.image}" class="book-img">
        </div>
        <div class="my-auto flex-column d-flex pad-left">
            <h6 class="mob-text">${item.title}</h6>
            <p class="mob-text">${item.description}</p>
        </div>
    </div>
</div>
<div class="my-auto col-7">
    <div class="row text-right">
        <div class="col-4">
            <p class="mob-text">${item.currency} ${item.price.toFixed(2)}</p>
        </div>
        <div class="col-4">
            <div class="row d-flex justify-content-end px-3">
                <p class="mb-0" id="center-text">${item.quantity}</p>
                <div class="d-flex flex-column plus-minus">
                    <span class="vsm-text plus" onclick="increaseQuantity(${index}, ${item.price})">+</span>
                    <span class="vsm-text minus" onclick="decreaseQuantity(${index}, ${item.price})">-</span>
                </div>
            </div>
        </div>
        <div class="col-4">
            <h6 class="mob-text">${item.currency} ${(item.price * item.quantity).toFixed(2)}</h6>
            <i class="fa-solid fa-xmark" onclick="toggleCartItem(${index})"></i>
        </div>
    </div>
</div>
</div>
        `;

        cartDiv.appendChild(cartItem);
        subtotal += item.price * item.quantity;

    });

    // Update the subtotal, tax, total, and checkout button
    var subtotalElement = document.getElementById("subtotal");
    var totalElement = document.getElementById("total");
    var checkoutAmount = document.getElementById("check-amt");
    var outputPriceElement = document.getElementById("output_price"); // New line added

    var tax = 200; // Assuming a 6% tax rate
    var total = subtotal + tax;

    subtotalElement.textContent = `KSH ${subtotal.toFixed(2)}`;
    totalElement.textContent = `KSH ${total.toFixed(2)}`;
    checkoutAmount.textContent = `KSH ${total.toFixed(2)}`;
    outputPriceElement.textContent = `${total.toFixed(2)}`; // Set the inner text of output_price
    // Save the cart data to localStorage
    saveCartToStorage();

    // Call the product counter function to update the product count
    countProductsInCart();
}
// Function to toggle the visibility of a cart item
function toggleCartItem(index) {
// Remove the product from the cartItems array
cartItems.splice(index, 1);
// Update the cart display
updateCart();
}

// Function to add a product to the cart
function addToCart(button) {
var productDetails = button.parentElement;
var title = productDetails.querySelector(".title").textContent;
var description = productDetails.querySelector(".description").textContent;
var price = parseFloat(productDetails.querySelector(".price").textContent);
var currency = productDetails.querySelector(".currency").textContent;
var image = productDetails.parentElement.querySelector(".image img").src;
var selectedQuantity = parseInt(productDetails.querySelector(".prices span.active").textContent); // Get the selected quantity

var existingItemIndex = cartItems.findIndex(item => item.title === title);

if (existingItemIndex !== -1) {
cartItems[existingItemIndex].quantity += selectedQuantity; // Add the selected quantity
} else {
cartItems.push({
    title: title,
    description: description,
    price: price,
    quantity: selectedQuantity, // Set the quantity to the selected quantity
    currency: currency,
    image: image
});
}

updateCart();
}

// Function to increase quantity
function increaseQuantity(index, price) {
    if (index >= 0 && index < cartItems.length) {
        cartItems[index].quantity++;
    }

    updateCart();
}

// Function to decrease quantity
function decreaseQuantity(index, price) {
    if (index >= 0 && index < cartItems.length && cartItems[index].quantity > 1) {
        cartItems[index].quantity--;
    }

    updateCart();
}

// Function to select quantity
function selectPrice(span) {
var selectedQuantity = parseInt(span.textContent);
var priceSpan = span.parentElement.parentElement.querySelector(".price");
var price = parseFloat(priceSpan.textContent);
var currencySpan = span.parentElement.parentElement.querySelector(".currency");
var currency = currencySpan.textContent;

// Set the selected quantity
var selectedQuantitySpan = span.parentElement.parentElement.querySelector(".selected-quantity");
selectedQuantitySpan.textContent = selectedQuantity;

// Update the total price
var totalSpan = span.parentElement.parentElement.querySelector(".total-price");
var totalPrice = selectedQuantity * price;
totalSpan.textContent = `${currency} ${totalPrice.toFixed(2)}`;
}



loadCartFromStorage();
// Initialize the cart
updateCart();

