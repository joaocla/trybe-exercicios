// Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

// Declara variaveis
const valor = 1;

// Condicao 1 : Caso 'valor' ser MAIOR que 0(zero)
if (valor > 0){
    console.log('positive');
}

// Condicao 2 : Caso 'valor' ser MENOR que 0(zero)
else if (valor < 0){
    console.log('negative');
}

// Caso nao ocorra nenhuma das condicoes acima:
else {
    console.log('zero');
}