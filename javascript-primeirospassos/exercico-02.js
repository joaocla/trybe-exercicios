//Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.

// Declara variaves
const a = 10; 
const b = 5;

// Condicao 1 : Se 'a' for MAIOR que 'b'
if ( a > b){
    console.log(a, 'Maior que', b);
}

// Condicao 2 : Se 'a' for MENOR que 'b'
else if ( a < b){
    console.log(b, 'Maior que', a);
}

// Caso nao ocorra nenhuma das condicoes acima :
else {
    console.log('Numeros Iguais')
}