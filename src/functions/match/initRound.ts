import randomLetter from "./randomLetter";
import Player from "../../interfaces/playerInterface";
import * as readline from "readline";
import letters from "../../config/letters";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showLetters(player: Player) {
    if (!player.bot) {
        console.log('Suas cartas são:', player.letters.letter1, 
                    player.letters.letter2, 
                    player.letters.letter3);
    }
}

function selectLetter(player: Player) {
    if (!player.bot) {
        rl.question("Digite o número da carta que você quer jogar (1 a 3): ", (numberLetter) => {
            if (numberLetter !== '1' && numberLetter !== '2' && numberLetter !== '3') {
                return selectLetter(player); 
            }

            console.log('Você jogou a carta:', player.letters[`letter${numberLetter}`]);
            console.log('Aguardando o adversário...');
            
        });
    } else {
        // Inteligência artificial do bot para escolher a carta
    }
}

export default function initRound(playerInitial: Player, player: Player) {
    randomLetter(playerInitial, player);
    randomLetter(player, playerInitial);
    showLetters(player);
    showLetters(playerInitial);

    const randomIndex = Math.floor(Math.random() * letters.length);
    const viraLetter = letters[randomIndex];

    console.log('Rodada 1, a vira do jogo é:', viraLetter);

    selectLetter(playerInitial);
}
