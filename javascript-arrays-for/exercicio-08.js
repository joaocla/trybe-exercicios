// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let lista = [];
let valorLista = 0;

for(cont = 0; cont < 25; cont ++){
    valorLista ++;
    lista.push(valorLista);
}

//Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
for(i = 0; i < lista.length; i ++){
    console.log(lista[i], '/ 2 =', lista[i] / 2);
}