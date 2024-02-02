
 let escolhaDoTreinador = 5;

 function pokemon () {
     if (escolhaDoTreinador === 1) {
        return pokemonEscolhido = 'Bulbasaur'; 
     } else if (escolhaDoTreinador === 2) {
       return pokemonEscolhido = 'Charmander';
     } else if (escolhaDoTreinador === 3) {
        return pokemonEscolhido = 'Pikachu';
     } else {
        return pokemonEscolhido = 'Mewtow';
     }
 }

 console.log(`Você escolheu o ${pokemon()} como seu pokemon inicial!`);