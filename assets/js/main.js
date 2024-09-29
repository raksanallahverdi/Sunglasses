let buyButtons = document.querySelectorAll(".buying");
let wishButtons = document.querySelectorAll(".wish");
let glassCount = document.querySelector(".glassCount");
let localCartItems = JSON.parse(localStorage.getItem("cart")) || [];

glassCount.innerHTML = ` (${localCartItems.length})`;


buyButtons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        const glassCard = e.target.closest(".glassCard");
        const prodName = glassCard.querySelector("h4").textContent;
        const prodPrice = glassCard.querySelector("h5").textContent.replace("$", "").trim();
        const prodSrc = glassCard.querySelector("img").getAttribute("src");
        const prodId = glassCard.getAttribute("data-id");
        const product = {
            id: prodId,
            name: prodName,
            price: prodPrice,
            src: prodSrc,
            AddDate: new Date(),
            count: 1,
        }

        const foundedElement = localCartItems.find((prod) => prod.id == product.id)
        if (foundedElement) {
            foundedElement.count++;
            console.log("found element count:", foundedElement.count);
        }
        else {
            localCartItems.push(product);
            
        }
        Swal.fire({
            title: "Sunglasses Added!",
            text: "",
            icon: "success"
          });

        localStorage.setItem("cart", JSON.stringify(localCartItems));
        console.log(localCartItems);
        glassCount.innerHTML = ` (${localCartItems.length})`;





    })
})



let localWishItems = JSON.parse(localStorage.getItem("wish")) || [];
const wrapper=document.querySelectorAll(".glassCard");
wrapper.forEach(function(glassCard){
    const cardId=glassCard.getAttribute("data-id");
    const wishedElement=localWishItems.find((element)=>element.id==cardId);
    if (wishedElement){
        console.log(glassCard.children[3].children[1].classList.add("fa-solid"));
        
    }

    
})
    


wishButtons.forEach((wishBtn) => {
    wishBtn.addEventListener("click", function (e) {
        const glassCard = e.target.closest(".glassCard");
        if (e.target.classList.contains("fa-regular") ) {       
            e.target.classList.remove("fa-regular");
            e.target.classList.add("fa-solid");
            const prodName = glassCard.querySelector("h4").textContent;
            const prodPrice = glassCard.querySelector("h5").textContent.replace("$", "").trim();
            const prodSrc = glassCard.querySelector("img").getAttribute("src");
            const prodId = glassCard.getAttribute("data-id");
            const product = {
                id: prodId,
                name: prodName,
                price: prodPrice,
                src: prodSrc,
                AddDate: new Date(),
                wished: true,
            }
            localWishItems.push(product);
            localStorage.setItem("wish", JSON.stringify(localWishItems));
            console.log(localWishItems);

        }
        else{
            e.target.classList.replace("fa-solid", "fa-regular");
                
        }

    })

})




