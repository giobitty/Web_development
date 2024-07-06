// document.addEventListener('DOMContentLoaded', function() {
//   // Selecting elements
// let productName = document.querySelector(".productname").textContent.trim();
// let productQuantity = parseInt(document.querySelector(".itmqnt").value);
// let productPrice = parseFloat(document.querySelector(".productprice").textContent.replace('$', ''));
// let listContainer = document.querySelector('.list-container');
// let cartbtn = document.querySelector('.cartbtn');

//    // Event listener for Add to Cart button
//   cartbtn.addEventListener('click', addItemToCart);

//     function addItemToCart() {
//        // Validate product quantity
//        if (isNaN(productQuantity) || productQuantity <= 0) {
//            alert('Please enter a valid quantity.');
//            return;
//     }
//       // Prepare item object
//        let item = {
//            name: productName,
//           quantity: productQuantity,
//           price: productPrice
//       };
//      // Update UI with added item
//        let tr = document.createElement('tr');
//       // Name
//       let tdName = document.createElement('td');
//       tdName.textContent = productName;
//        tr.appendChild(tdName);
//        // Quantity
//        let tdQuantity = document.createElement('td');
//        tdQuantity.textContent = productQuantity;
//        tr.appendChild(tdQuantity);

// //         // Price
//        let tdPrice = document.createElement('td');
//         tdPrice.textContent = '$' + productPrice.toFixed(2);  // Format price
//         tr.appendChild(tdPrice);

// //         // Append row to list container
//       listContainer.appendChild(tr);

// //         // Retrieve existing cart from sessionStorage or initialize an empty array
//        let cart = JSON.parse(sessionStorage.getItem('cart')) || [];

// //         // Add item to cart
//       cart.push(item);

// //         // Store updated cart back in sessionStorage
//        sessionStorage.setItem('cart', JSON.stringify(cart));

// //         // Optionally, update UI to indicate item added to cart (e.g., change button text, disable button)
//        alert('Item added to cart!');

// //         // For demonstration, log cart contents to console
//       console.log('Cart Contents:', cart);

// //         // Clear form fields or perform any other necessary actions
//        document.querySelector("#quantity").value = '';

//         // You can update the UI further if needed, like showing a cart summary or updating a cart icon
//     }
//  });


// Function to toggle form container visibility
// function toggleFormContainer() {
//     var formContainer = document.getElementById('formcontainer');
//     if (formContainer.style.display === 'none') {
//         formContainer.style.display = 'block';
//     } else {
//         formContainer.style.display = 'none';
//     }
// }

// // Event listener to handle button click for "Buy" button
// document.addEventListener('DOMContentLoaded', function() {
//     var buyButton = document.getElementById('buybtn');
//     if (buyButton) {
//         buyButton.addEventListener('click', function(event) {
//             event.preventDefault(); // Prevent default action (if any)
//             toggleFormContainer(); // Call toggleFormContainer function
//         });
//     }
// });
// // buybtn form
// document.addEventListener('DOMContentLoaded', function() {
//     // Wait for the DOM to fully load
//     var buyButton = document.getElementById('buybtn');
//     var formContainer = document.getElementById('formcontainer');

//     if (buyButton) {
//         buyButton.addEventListener('click', function(event) {
//             event.preventDefault();  // Prevent the default form submission behavior (if any)
//             formContainer.style.display = 'block';  // Show the form container
//         });
//     }
// });
// document.addEventListener('DOMContentLoaded', function() {
//     // Add event listener to the empty cart button
//     document.getElementById('emptyCartBtn').addEventListener('click', function() {
//         // Perform AJAX request or form submission to empty the cart
//         fetch('/emptyCart', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ action: 'emptyCart' }), // Include any data needed for your server
//         })
//         .then(response => {
//             if (response.ok) {
//                 // Optionally handle success, such as updating UI or showing a message
//                 console.log('Cart emptied successfully');
//                 // Optionally clear input fields or perform other UI updates
//             } else {
//                 console.error('Failed to empty cart');
//             }
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
//     });
// });