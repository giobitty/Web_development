// create a variable to contain the cart elements
let cartItems = []

function addToCart(productName, productPrice, quantity){
    cartItems.push({
        productName: productName,
        productPrice: productPrice,
        quantity: quantity
    });

    console.log(`Added ${quantity} ${productName}(s) to cart.`);

}

$('.cartbtn').click(function(event) {
    event.preventDefault(); // Prevent default form submission

    // Example: Retrieving product details from nearby elements
    let productName = $(this).closest('.card-body').find('.card-title').text();
    let productPrice = parseFloat($(this).closest('.card-body').find('.product-price').text().replace('$', ''));
    let quantity = parseInt($(this).closest('.card-body').find('.itmqnt').val());

    // Call addToCart function to add the product to the cart
    addToCart(productName, productPrice, quantity);
});