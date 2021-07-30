// Agora inverta o lado do triângulo. Por exemplo:

// n = 5

//     *
//    **
//   ***
//  ****
// *****
// Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.

const n = 5;
const space = " ";
const joker = '*';
let spaceIndex = n - 1;

for(i = 1; i <= n; i++){
    console.log(space.repeat(spaceIndex) + joker.repeat(i));
    spaceIndex --;
}