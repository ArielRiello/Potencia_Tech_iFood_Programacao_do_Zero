// Descrição
// No mundo dos jogos Pokémon, os treinadores começam sua jornada escolhendo um dos três Pokémons iniciais:
// Bulbasaur, Charmander e Mewtwo. Cada treinador escolhe um dos quatro pokemons. 
// Seu desafio é criar uma solução que permita ao jogador escolher um dos Pokémons iniciais e exibir uma 
// mensagem de boas-vindas e o Pokémon escolhido.

// Entrada
// Você receberá um número inteiro que representa a escolha do treinador: 1 para Bulbasaur,
// 2 para Charmander, 4 Pikachu e 5 para Mewtwo.

// Saída
// A saída deve ser uma mensagem de boas-vindas que inclua o nome do Pokémon escolhido.

// Exemplos
// A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. 
// Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

// Entrada	Saída
// Escolha o seu Pokemon: 1	Voce escolheu o Bulbasaur como seu Pokemon inicial.
// Escolha o seu Pokemon: 2	Voce escolheu o Charmander como seu Pokemon inicial.
// Escolha o seu Pokemon: 4	Voce escolheu o Pikachu como seu Pokemon inicial.
// Escolha o seu Pokemon: 5	Voce escolheu o Mewtwocomo seu Pokemon inicial.

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.


let escolhaDoTreinador = parseInt(gets());
let pokemonEscolhido; 

if ( escolhaDoTreinador === 1) {
    pokemonEscolhido = "Bulbasaur";
} else if ( escolhaDoTreinador ===  2) {
    pokemonEscolhido = "Charmander";
} else if ( escolhaDoTreinador === 4) {
    pokemonEscolhido = "Pikachu";
} else{
    pokemonEscolhido = "Mewtwo";
}

if (pokemonEscolhido) {
    print("Voce escolheu o " + pokemonEscolhido + " como seu Pokemon inicial.");
}