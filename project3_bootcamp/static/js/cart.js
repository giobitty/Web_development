// document.addEventListener('DOMContentLoaded', function() {
//     // Selecting elements
//     let productName = document.querySelector("#productname").textContent.trim();
//     let productQuantity = parseInt(document.querySelector("#quantity").value);
//     let productPrice = parseFloat(document.querySelector(".productprice").textContent.replace('$', ''));
//     let listContainer = document.querySelector('.list-container');
//     let cartbtn = document.querySelector('.cartbtn');

//     // Event listener for Add to Cart button
//     cartbtn.addEventListener('click', addItemToCart);

//     function addItemToCart() {
//         // Validate product quantity
//         if (isNaN(productQuantity) || productQuantity <= 0) {
//             alert('Please enter a valid quantity.');
//             return;
//         }

//         // Prepare item object
//         let item = {
//             name: productName,
//             quantity: productQuantity,
//             price: productPrice
//         };

//         // Update UI with added item
//         let tr = document.createElement('tr');

//         // Name
//         let tdName = document.createElement('td');
//         tdName.textContent = productName;
//         tr.appendChild(tdName);

//         // Quantity
//         let tdQuantity = document.createElement('td');
//         tdQuantity.textContent = productQuantity;
//         tr.appendChild(tdQuantity);

//         // Price
//         let tdPrice = document.createElement('td');
//         tdPrice.textContent = '$' + productPrice.toFixed(2);  // Format price
//         tr.appendChild(tdPrice);

//         // Append row to list container
//         listContainer.appendChild(tr);

//         // Retrieve existing cart from sessionStorage or initialize an empty array
//         let cart = JSON.parse(sessionStorage.getItem('cart')) || [];

//         // Add item to cart
//         cart.push(item);

//         // Store updated cart back in sessionStorage
//         sessionStorage.setItem('cart', JSON.stringify(cart));

//         // Optionally, update UI to indicate item added to cart (e.g., change button text, disable button)
//         alert('Item added to cart!');

//         // For demonstration, log cart contents to console
//         console.log('Cart Contents:', cart);

//         // Clear form fields or perform any other necessary actions
//         document.querySelector("#quantity").value = '';

//         // You can update the UI further if needed, like showing a cart summary or updating a cart icon

//     }
// });
let buybtn = document.querySelector(".buybtn")

buybtn.addEventListener('click',function(){
    checkoutForm.style.display = 'block';
})