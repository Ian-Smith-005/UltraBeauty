    // Function to load cart data from localStorage
function loadCartFromStorage() {
    var storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
        cartItems = JSON.parse(storedCartItems);
    }
}

// Function to calculate total price from the cart items
function calculateTotal() {
    var total = 0;
    cartItems.forEach(function (item) {
        total += item.price * item.quantity;
    });
    return total;
}

// Function to display the receipt summary
function displayReceiptSummary() {
    var subtotalElement = document.getElementById("subtotal");
    var totalElement = document.getElementById("total");

    var subtotal = calculateTotal();
    var shippingCost = 200; // Fixed shipping cost
    var total = subtotal + shippingCost;

    subtotalElement.textContent = `KSH ${subtotal.toFixed(2)}`;
    totalElement.textContent = `KSH ${total.toFixed(2)}`;
}

// Load cart data from localStorage
loadCartFromStorage();

// Display receipt summary
displayReceiptSummary();





