// //Instruções para entrega}
// # 1️ Desafio Classificador de nível de Herói

// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões

// ## Objetivo

// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, 
// depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 6.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói de nome **{nome}** está no nível de **{nivel}**"

class Heroi {
    constructor(nome, xp) {
        this.nome = nome;
        this.xp = xp;
    }

    calcular_elo() {
        let elo_atual = "";

        switch (true) {
            case this.xp <= 1000:
                elo_atual = "Ferro";
                break;

            case this.xp <= 2000:
                elo_atual = "Bronze";
                break;

            case this.xp <= 5000:
                elo_atual = "Prata";
                break;

            case this.xp <= 8000:
                elo_atual = "Platina";
                break;

            case this.xp <= 9000:
                elo_atual = "Ascendente";
                break;

            case this.xp <= 10000:
                elo_atual = "Imortal";
                break;

            default:
                elo_atual = "Radiante";
        }

        console.log(`O Herói de nome ${this.nome} está no nível de ${elo_atual}`);
    }
}


const heroi1 = new Heroi("Superman", 7500);
heroi1.calcular_elo();