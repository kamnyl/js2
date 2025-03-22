// let userInput = prompt("Enter the product price:");

// let price = parseFloat(userInput.replace("$",""));

// let discount = price * 0.9;
// let discountAmount = price * 0.1;

// console.log(`Your new price is: $${discount.toFixed(2)}`);
// console.log(`You will save: $${discountAmount.toFixed(2)}`);



function calculateFunction() {
    let userInput = prompt ("Enter the product price:");
    
    let price = parseFloat(userInput.replace("$",""));

        let discount = price * 0.9; 
        let discountAmount = price * 0.1;
        
        document.getElementById("new-price").innerHTML = `Your new price is $${discount.toFixed(2)}`;
        document.getElementById("discount-amount").innerHTML = `You will save $${discountAmount.toFixed(2)}`; 

}
