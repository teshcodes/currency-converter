var amountInput = document.getElementById("amount"); 
var fromCurrency = document.getElementById("fromCurrency"); 
var toCurrency = document.getElementById("toCurrency"); 
var convertButton = document.getElementById("convertButton"); 
var resultDiv = document.getElementById("result"); 

var enableButton = function() { 
    if (amountInput.value !== '' && fromCurrency.value && toCurrency.value) { 
        convertButton.disabled = false; 
    } else { 
        convertButton.disabled = true; 
    } 

}; 

amountInput.addEventListener("input", enableButton); 
fromCurrency.addEventListener("change", enableButton); 
toCurrency.addEventListener("change", enableButton); 

var convertCurrency = function() { 
    var amount = parseFloat(amountInput.value); 
    var from = fromCurrency.value; 
    var to = toCurrency.value; 
    var result;
    
    console.log("Amount: " + amount);
    console.log("From Currency: " + from);
    console.log("To Currency: " + to);
    
    if (isNaN(amount)) { 
        resultDiv.textContent = "Please enter a valid amount!"; 
        resultDiv.style.display = "block"; 
        return; 
    } 
    
  var exchangeRates = { 
    usd: { cfa: 619.73, ngn: 1597.28, cny: 7.27 }, 
    cfa: { usd: 0.0016, ngn: 2.58, cny: 0.01168 }, 
    ngn: { usd: 0.00063, cfa: 0.39, cny: 0.0045 }, 
    cny: { usd: 0.14, cfa: 85.32, ngn: 220.84 } 
}; 

if (from === to) { 
    result = amount; 
} else { 
    result = amount * exchangeRates[from][to]; 
} 

console.log("Result: " + result);

resultDiv.textContent = amount.toFixed(2) + " " + from.toUpperCase() + " is " + result.toFixed(2) + " " + to.toUpperCase();
resultDiv.style.display = "block";

};