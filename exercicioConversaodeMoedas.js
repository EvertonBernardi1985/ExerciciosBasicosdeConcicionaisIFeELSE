/* Conversor de moedas: Escreva um programa que converta uma quantidade de dólares em reais. 
Se o valor do dólar estiver acima de 5 reais, exiba uma mensagem informando que está caro, 
senão exiba uma mensagem de que está barato.*/

let valordolar 
let cotacaoDolar
let valorreais


cotacaoDolar = Number(prompt('Qual é a cotação do dolar em Reais? R$ '))

valordolar = Number(prompt('\nQuanto você tem ao toal em dólares? $ '))

valorreais = valordolar * cotacaoDolar
alert(`\nValor total em Reais ${valorreais.toFixed(3)}`)


if(cotacaoDolar < 5.00){
    alert(`\nA cotação em Reais está com um bom preço! ${cotacaoDolar}`)


}
else if(cotacaoDolar == 5.00){
    alert(`\nA cotação esta dentro da média! ${cotacaoDolar}`)
}
else{
    alert('\nO valor está muito acima!! ')
}





