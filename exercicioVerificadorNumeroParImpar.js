/*5) Verificador de número par ou ímpar: Faça um programa que peça ao usuário para inserir um número e determine se par ou ímpar.*/

let numero = Number(prompt('Digite o número:'))

if(numero % 2 == 0){
    alert(`\nO número ${numero} é par`)
}
else{
    alert(`\nO número ${numero} é impar`)
}