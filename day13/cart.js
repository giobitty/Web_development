const priceitem_display = document.querySelector(".priceitem_display")
const quantity_display = document.querySelector(".quantity_display")
const totalprice_display = document.querySelector(".totalprice_display")
const item_img = document.querySelector(".itmimg")
const itemdescription = document.querySelector(".itemdescription")

// get values for qt
const priceitem = sessionStorage.getItem('sale_price')
const quantityitem1 = sessionStorage.getItem('quantityitem1')
const itemimg = sessionStorage.getItem('item_img')

//calculate total
const totalprice = (priceitem*quantityitem1).toFixed(2)
priceitem.innerHTML = `$ ${priceitem}`
quantity_display.innerHTML = `$ ${quantityitem1}`
totalprice_display.innerHTML = `$ ${totalprice}`

//append img and item description
let image = document.createElement('img')
image.src = sessionStorage.getItem('item_img')
image.style.width = "30px"

item_img.append(image)