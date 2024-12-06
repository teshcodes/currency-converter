var amountInput = document.getElementById("amount"); 
var fromCurrency = document.getElementById("fromCurrency"); 
var toCurrency = document.getElementById("toCurrency"); 
var convertButton = document.getElementById("convertButton"); 
var resultDiv = document.getElementById("result"); 

var enableButton = function() { 
    if (amountInput.value !== '' && fromCurrency.value && toCurrency.value) { 
        convertButton.disabled = false; 
    } else { convertButton.disabled = true; } 

}; 

amountInput.addEventListener("input", enableButton); 
fromCurrency.addEventListener("change", enableButton); 
toCurrency.addEventListener("change", enableButton); 

var convertCurrency = function() { 
    var amount = parseFloat(amountInput.value); 
    var from = fromCurrency.value; 
    var to = toCurrency.value; 
    var result; 
    
    if (isNaN(amount)) { 
        resultDiv.textContent = "Please enter a valid amount!"; 
        resultDiv.style.display = "block"; 
        return; 
    } 
    
  var exchangeRates = { 
    usd: { cfa: 620.41, ngn: 780, cny: 6.93 }, 
    cfa: { usd: 0.0016, ngn: 2.41, cny: 0.1375 }, 
    ngn: { usd: 0.00064, cfa: 0.40, cny: 0.06 }, 
    cny: { usd: 0.14, cfa: 85.31, ngn: 164.45 } 
}; 

if (from === to) { 
    result = amount; 
} else { 
    result = amount * exchangeRates[from][to]; 
} 

resultDiv.textContent = amount.toFixed(2) + " " + from.toUpperCase() + " is " + result.toFixed(2) + " " + to.toUpperCase();
resultDiv.style.display = "block";

};