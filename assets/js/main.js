let buyButtons = document.querySelectorAll(".buying");

const localCartItems = JSON.parse(localStorage.getItem("cart"));
if (!localCartItems) {

    localStorage.setItem("cart", JSON.stringify([]));
}
buyButtons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        const prodName = e.target.parentElement.parentElement.children[1].textContent;        
        const prodPrice = Number(e.target.parentElement.parentElement.children[2].textContent);
        const prodSrc = e.target.parentElement.parentElement.children[0].getAttribute("src");
        const prodId = e.target.parentElement.parentElement.getAttribute("data-id");
        console.log(prodName);
        console.log(prodPrice);
        console.log(prodSrc);
        console.log(prodId);
        const product = {
            id: prodId,
            name: prodName,
            price: prodPrice,
            src: prodSrc,
            AddDate: new Date(),
            count: 1,
        }
        
        
       
        const localCartItems=JSON.parse(localStorage.getItem("cart"))
        const foundedElement = localCartItems.find((prod) => prod.id == product.id)
        console.log(foundedElement);
        
    })
})


