
   
document.addEventListener("DOMContentLoaded", function() {
    let savedProducts = JSON.parse(localStorage.getItem('products')) || [];
    savedProducts.forEach(product => {
        displayProduct(product.name, product.quantity);
    });
});

document.querySelector("#prod-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    addProduct();
});

function addProduct() {
    let prodName = document.querySelector("#name").value;
    let prodQuantity = parseInt(document.querySelector("#quantity").value);
    
    let result_el = document.querySelector("#itm-results");
    let template = document.querySelector("#results_template");
    let clone = template.content.cloneNode(true);

    let products = JSON.parse(localStorage.getItem('products')) || []; 

    if (!prodName) {
        alert("Error: you must introduce an item")
        return ;
    } else if (isNaN(prodQuantity) || prodQuantity < 0) {
        alert("Error: introduce valid number") ;
        return;
    }


    clone.querySelector(".item-name").textContent = `Name: ${prodName}`;
    clone.querySelector(".item-quantity").textContent = `Quantity: ${prodQuantity}`;
 
 
    let quantityDisplay = clone.querySelector(".item-quantity");
   
    clone.querySelector(".add-quantity").addEventListener("click", function() {
        prodQuantity++; 
        quantityDisplay.textContent = `Quantity: ${prodQuantity}`;    
    });


    clone.querySelector(".subtract-quantity").addEventListener("click", function() {
        if(prodQuantity>0){
            prodQuantity--; 
        quantityDisplay.textContent = `Quantity: ${prodQuantity}`; 
    }});

        
    clone.querySelector(".delete-product").addEventListener("click", function() {
        this.closest("li").remove()}); 
    
        
    products.push({ name: prodName, quantity: prodQuantity });
    localStorage.setItem('products', JSON.stringify(products));
  
    result_el.appendChild(clone);
}


function displayProduct(prodName, prodQuantity) {
    let result_el = document.querySelector("#itm-results");
    let template = document.querySelector("#results_template");
    let clone = template.content.cloneNode(true);

    clone.querySelector(".item-name").textContent = `Name: ${prodName}`;
    clone.querySelector(".item-quantity").textContent = `Quantity: ${prodQuantity}`;

   // window.localStorage.clear();

    result_el.appendChild(clone);
}




