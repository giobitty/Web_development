var addtocartBtn = document.querySelector('.cartbtn')
let name = document.querySelector('.productname').innerText
let quantity = document.querySelector('.itmqnt').innerText
let price = document.querySelector('.productprice span')

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select all add-to-cart buttons
    var addToCartBtns = document.querySelectorAll('.cartbtn');

    // Function to get cart items from localStorage
    function getCart() {
        return JSON.parse(localStorage.getItem('cart')) || [];
    }

    // Function to save cart items to localStorage
    function saveCart(cart) {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Loop through each add-to-cart button
    addToCartBtns.forEach(function(btn) {
        btn.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default form submission

            // Find related elements within the same card
            var card = btn.closest('.card');
            var name = card.querySelector('.productname').innerText;
            var quantity = card.querySelector('.itmqnt').value;
            var price = parseFloat(card.querySelector('.productprice b').innerText.replace('$', '')); // Assuming product price is in a <b> tag

            // Validate quantity (optional)
            quantity = parseInt(quantity);
            if (isNaN(quantity) || quantity <= 0) {
                alert('Please enter a valid quantity.');
                return;
            }

            // Prepare the item to add to cart
            var item = {
                name: name,
                quantity: quantity,
                price: price,
                total: quantity * price
            };

            // Display a confirmation or update UI (e.g., show a mini cart preview)
            console.log('Added to cart:', item);

            // You can redirect or update UI as needed after adding to cart
            // Example: window.location.href = '/cart.html';
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Function to render cart items
    // Function to render cart items
function renderCartItems() {
    let cartTableBody = document.querySelector('.cart-items');

    // Clear existing table rows
    cartTableBody.innerHTML = '';

    // Iterate through each item in the cart
    cartItems.forEach(item => {
        // Create a new table row
        let row = document.createElement('tr');

        // Set innerHTML of the row using template literals
        row.innerHTML = `
            <td class="product-name">${item.name}</td>
            <td class="product-price">${item.price}</td>
            <td class="product-quantity">${item.quantity}</td>
        `;

        // Append the row to the table body
        cartTableBody.appendChild(row);
        console.log(row)
    });
}

// Function call to render cart items initially
renderCartItems();

    
});