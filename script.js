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
    usd: { cfa: 550, ngn: 380, cny: 6.5 }, 
    cfa: { usd: 0.0018, ngn: 2.70, cny: 0.012 }, 
    ngn: { usd: 0.0026, cfa: 1.45, cny: 0.017 }, 
    cny: { usd: 0.15, cfa: 82.5, ngn: 59 } 
}; 

if (from === to) { 
    result = amount; 
} else { 
    result = amount * exchangeRates[from][to]; 
} 

resultDiv.textContent = amount.toFixed(2) + " " + from.toUpperCase() + " is " + result.toFixed(2) + " " + to.toUpperCase();
resultDiv.style.display = "block";

};