const { default: axios } = require("axios")

let addToCart = document.querySelectorAll(".add-to-cart")
let cartCounter = document.querySelector("#cartCounter")
const updateCart = (pizza) => {

    axios.post('/updateCart', pizza).then((res) => {
        console.log(res);
        cartCounter.innerText = res.data.totalQty
    })


}
addToCart.forEach((btn) => {
    btn.addEventListener('click', () => {
        let pizza = JSON.parse(btn.dataset.pizza)
        updateCart(pizza)

    })
})