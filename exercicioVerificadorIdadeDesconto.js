/*Verificador de idade para desconto no cinema: Escreva um programa que pergunte a idade do usuário e, 
se ele tiver menos de 12 anos, conceda um desconto de 50% no ingresso do cinema; 
se ele tiver entre 12 e 18 anos, conceda um desconto de 25%; caso contrário, não conceda nenhum desconto.*/

let idadeUsuario
let desconto

idadeUsuario = Number(prompt('Qual é a idade do usuáerio? '))

if(idadeUsuario < 12){
    desconto = 0.50
    alert(`\nO desconto será de ${desconto*100} %`)
}
else if(idadeUsuario >=12 && idadeUsuario <= 18){
    desconto = 0.25
    alert(`\nO desconto será de ${desconto*100} %`)

}
else{
    alert(`\nO valor será pago no valor comum!!`)
}