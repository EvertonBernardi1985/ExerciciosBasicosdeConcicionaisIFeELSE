/* Calculadora de média escolar: Faça um programa que solicite ao usuário as notas de três provas e, em seguida, 
calcule e exiba a média. Se a média for maior ou igual a 7, exiba "Aprovado"; senão, exiba "Reprovado"*/

let nota1
let nota2
let nota3
let media

nota1 = Number(prompt('A primeira nota foi? '))

nota2 = Number(prompt('\nA segunda nota foi?'))

nota3 = Number(prompt('\nA terceira nota foi? '))

media = (nota1 + nota2 + nota3)/3

alert(`\nA média total é de ${media.toFixed(2)}`)

if(media >= 7){
    alert(`\n Parabéns você foi aprovado ${media.toFixed(2)}`)

}
else if(media >5 && media < 7){
    alert(`\nVocê está em recuperação ${media.toFixed(2)}`)

}
else{
    alert(`\nReprovado!! ${media.toFixed(2)}`)
}