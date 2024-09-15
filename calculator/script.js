
function calc(operation){

     
     val1 = parseFloat(document.getElementById('numb').value)
     val2 = parseFloat(document.getElementById('numb2').value)
     let result_el = document.getElementById("results")

     let operation_map = {
          add: val1+val2,
          subtract: val1-val2,
          divide: val2 !== 0? val1/val2: "Error, cannot divide by 0 .",
          multiply: val1*val2
     }

    if(isNaN(val1)){
     result_el.innerText = "Error:Please insert first number";
     result_el.style.color = "red";
     return;
}

   if(isNaN(val2) && val2 !== 0){
     result_el.innerText = "Error:Please insert seconde number";
     result_el.style.color = "red";
     return;
 }

   
    if (operation === 'divide' && val2 === 0) {
          result_el.innerText = "Error, cannot divide by 0.";
          result_el.style.color = "red";
      } else {
          result_el.innerText = "Results: " + operation_map[operation];
          result_el.style.color = "green"; 
      }
     
      


    }


