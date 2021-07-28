// Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

// Declara variaves
const a = 10; 
const b = 5;
const c = 7;

// Condicao 1 : Se 'a' for MAIOR que 'b' e 'c'
if ( a > b && a > c){
    console.log(a, 'Maior que', b, 'e', c);
}

// Condicao 2 : Se 'b' for MAIOR que 'a' e 'c'
else if ( b > a && b > c){
    console.log(b, 'Maior que', a, 'e', c);
}

// Condicao 3 : Se 'c' for MAIOR que 'a' e 'b'
else if ( c > a && c > b){
    console.log(c, 'Maior que', a, 'e', b);
}

// Caso nao ocorra nenhuma das condicoes acima :
else {
    console.log('Numeros Iguais')
}