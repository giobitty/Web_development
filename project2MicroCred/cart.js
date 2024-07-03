// create a variable to contain the cart elements
let cartItems = []
let cartbtn = document.querySelector(".cartbtn")


function addToCart(element){
    // parent element
    let cardBody = element.closest('.card');

    // Extract product details from the card body
    let productName = cardBody.querySelector('.productname').innerText.trim();
    let productPrice = parseFloat(cardBody.querySelector('.productprice').innerText.replace('$', '').trim());
    let quantity = parseInt(cardBody.querySelector('.itmqnt').value.trim());

    // Create an object for the cart item
    let cartItem = {
        productName: productName,
        productPrice: productPrice,
        quantity: quantity
    };

    // Add the cart item to the cartItems array
    cartItems.push(cartItem);

}

cartbtn.addEventListener('click',function(event) {
    event.preventDefault(); // Prevent default form submission

    let productName = $(this).closest('.card-body').find('.productname').text();
    let productPrice = parseFloat($(this).closest('.card-body').find('.productprice').text().replace('$', ''));
    let quantity = parseInt($(this).closest('.card-body').find('.itmqnt').val());

    // Call addToCart function to add the product to the cart
    addToCart(productName, productPrice, quantity);
});