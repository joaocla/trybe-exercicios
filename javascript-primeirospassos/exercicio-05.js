//Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

// Declara variaveis
const ang1 = 100;
const ang2 = 50;
const ang3 = 30;
const verifica = ang1 + ang2 + ang3;

// Condicao 1 : Conferir se sao angulos de um triangulo
if (verifica == 180){
    console.log(true);
}

// Condicao 2 : Verifica se os angulos sao validos (positivos)
else if (ang1 <= 0 || ang2 <= 0 || ang3 <= 0){
    console.log('Algum angulo possui valor negativo, verifique!!');
}

// Caso nao ocorra nenhuma das condicoes acima
else{
    console.log(false)
}