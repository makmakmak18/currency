const currencyFrom = document.getElementById('currency-one');
const currencyTo = document.getElementById('currency-two');
const amountFrom = document.getElementById('amount-one');
const amountTo = document.getElementById('amount-two');
const spaw = document.getElementById('swap');
const rate = document.getElementById('rate');

currencyFrom.addEventListener("change", calculate);
currencyTo.addEventListener("change", calculate);
amountFrom.addEventListener('input', calculate);
amountTo.addEventListener('input', calculate);

function calculate() {
const currencyFromValue = currencyFrom.value
const currencyToValue = currencyTo.value
fetch(`https://api.exchangerate-api.com/v4/latest/${currencyFromValue}`)
.then(res => res.json())
.then(data => {const rateValue = data.rates[currencyToValue]
rate.innerText = `1 ${currencyFromValue} = ${rateValue} ${currencyToValue}`
amountTo.value = (amountFrom.value * rateValue).toFixed(2)
})
}

swap.addEventListener('click', () => {
const temp = currencyFrom.value
currencyFrom.value = currencyTo.value
currencyTo.value = temp;
calculate()    
} )