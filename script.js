const api = "https://api.exchangerate-api.com/v4/latest/USD";
// Inclui a api para cálculo da conversão entre as moedas.

var search = document.querySelector(".money-value");
var convert = document.querySelector(".convert");
var fromCurrency = document.querySelector(".from");
var toCurrency = document.querySelector(".to");
var fromMoney = document.querySelector(".fromCoin");
var toMoney = document.querySelector(".toCoin");
var finalValue = document.querySelector(".finalValue");
var finalAmount = document.getElementById("valueToConverter");
var finalAmount = document.getElementById("finalAmount");
var resultFrom;
var resultTo;
var coinFrom;
var coinTo;
var searchValue;
 
// Evento quando o valor atual de origem é alterado
fromCurrency.addEventListener('change', (event) => {
    resultFrom = `${event.target.value}`;
});
  
// Evento quando o valor atual de destino é alterado
toCurrency.addEventListener('change', (event) => {
    resultTo = `${event.target.value}`;
});

fromMoney.addEventListener('change', (event) => {
    coinFrom = `${event.target.value}`;
});

toMoney.addEventListener('change', (event) => {
    coinTo = `${event.target.value}`;
});
  
search.addEventListener('input', updateValue);
  
// Função para atualizar o valor
function updateValue(e) {
    searchValue = e.target.value;
}
  
// Quando usar o clique, chama os resultados
convert.addEventListener("click", getResults);
  
// Função getresults
function getResults() {
    fetch(`${api}`)
        .then(currency => {
            return currency.json();
        }).then(displayResults);
}
  
// Mostra os resultados depois da conversão
function displayResults(currency) {
    let fromRate = currency.rates[resultFrom];
    let toRate = currency.rates[resultTo];
    finalValue.innerHTML = 
       ((toRate / fromRate) * searchValue).toFixed(2);
    finalAmount.style.display = "block";

    const valueMoney = document.getElementById('moneyToConverter')
    const valueCoinToConverter = document.getElementById('coinToConverter')
    const valueCoinConverted = document.getElementById('coinTo')
    const valueFinalMoney = document.getElementById('finalMoney')
    

    //valueMoney.innerHTML = searchValue

    valueMoney.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: sel1.value,
    }).format(searchValue);

    valueCoinToConverter.innerHTML = sel1.value
    valueCoinConverted.innerHTML = sel2.value

    valueFinalMoney.innerHTML = new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: sel2.value,
    }).format((toRate / fromRate) * searchValue);

    
}

button.addEventListener("click, displayResults")

