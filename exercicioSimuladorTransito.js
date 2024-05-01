/*Simulador de trânsito: Crie um programa que pergunte a idade do usuário e, 
se ele tiver idade suficiente para dirigir (por exemplo, 18 anos), exiba "Você pode dirigir"; 
caso contrário, exiba "Você ainda não pode dirigir".*/

let idadeUsuario

idadeUsuario = Number(prompt('Qual é a idade do usuário? '))

if(idadeUsuario > 18){
    alert('\nVocê esta apto a dirigir!')
}
else if(idadeUsuario == 18){
    alert('\nVocê esta no limite de idade, parabéns você esta apto!')
   
}
else{
    alert('\nVocê ainda não está apto a dirigir! ')
}