// Nike Advertisement

// select the advertisement
const advertisement = document.querySelector("#advertisement")

// select the main sneaker image
const mainsneaker = document.querySelector("#mainsneaker")

// select the price
const price = document.querySelector("#price")

// select the product name
const productname = document.querySelector("#productname")


// // select the thumbnails
const sneaker01 = document.querySelector("#sneaker01")
const sneaker02 = document.querySelector("#sneaker02")
const sneaker03 = document.querySelector("#sneaker03")


// First sneaker
sneaker01.addEventListener("click", () => {
    advertisement.style.setProperty("background","linear-gradient(135deg, #ff0000, #8b0000)", "important")
        price.textContent = "$120"
        productname.textContent = " NIKE AIR MAX RED"


 mainsneaker.src = "IMAGES/Nike_shoe (01).png"
})


// Second sneaker
sneaker02.addEventListener("click", () => {
    advertisement.style.setProperty("background", "linear-gradient(135deg, #4a606f, #263746)", "important")
    price.textContent = "$140"
      productname.textContent = " NIKE AIR MAX CREAM"

 mainsneaker.src = "IMAGES/Nike_shoe (02).png"
})


// third sneaker
sneaker03.addEventListener("click", () => {
 advertisement.style.setProperty("background", "linear-gradient(135deg, #000000, #808080)", "important")
     price.textContent = "$160"
     productname.textContent = " NIKE AIR MAX BLACK"


 mainsneaker.src = "IMAGES/Nike_shoe (03).png"
})

// 135deg, #000000, #808080






