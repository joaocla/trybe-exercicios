// Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
for(i = 0; i < (numbers.length); i ++){
    console.log(numbers[i]);
}

// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let resultado = 0
for(i = 0; i < (numbers.length); i ++){
    resultado = resultado + numbers[i];
}
console.log('A soma dos valores dessa Array e =', resultado);

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
const media = resultado / numbers.length;
console.log('A media aritimetica desta Array e =', media);

//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
if (media > 20){
    console.log('valor da media maior que 20');
}
else{
    console.log('valor da media menor ou igual a 20')
}

// Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let maior = 0;
for(i = 0; i < (numbers.length); i ++){
    if(numbers[i] > maior){
        maior = numbers[i];
    }
    else{
        maior = maior;
    }
}
console.log(maior, 'e o MAIOR numero desta Array');

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let somaImpar = 0
for(i = 0; i < (numbers.length); i ++){
    if ((numbers[i] % 2) != 0){
        somaImpar ++;
    }
    else{
        somaImpar = somaImpar;
    }
}
if(somaImpar > 0){
    console.log('Existem', somaImpar, 'numero(s) impar nessa Array');
}
else{
    console.log('Nenhum valor impar encontrado')
}

// Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let menor = maior;
for(i = 0; i < (numbers.length); i ++){
    if(numbers[i] < menor){
        menor = numbers[i];
    }
    else{
        menor = menor;
    }
}
console.log(menor, 'e o MENOR numero desta Array');