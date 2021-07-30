// Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
// n = 5

// *
// **
// ***
// ****
// *****

const n = 5;
const joker = '*';
let contador = 1;

for(i = 1; i <= n; i ++){
    console.log(joker.repeat(i))
}