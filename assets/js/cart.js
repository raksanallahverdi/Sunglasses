let showCartItems = JSON.parse(localStorage.getItem("cart")) || [];
let wishedElementsContainer = document.querySelector(".wishedElements");
console.log(showCartItems);

showCartItems.forEach((element) => {
    console.log(element);
    let wishedElement = document.createElement("div");
    wishedElement.classList.add("wishedElement");
     wishedElement.innerHTML += `<div><img src="${element.src}" alt=""></div>
       <h3>${element.name}</h3>
       <h3>${element.price} $</h3>
       <p>${element.AddDate}</p>
       <h3>${element.count}x</h3>
        <h3>${element.price*element.count}$</h3>
      

       `
       ;
       
       
       wishedElementsContainer.appendChild(wishedElement);
    })
       
