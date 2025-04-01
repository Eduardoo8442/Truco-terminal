import randomLetter from "./randomLetter";
import Player from "../../interfaces/playerInterface";

function showLetters(player: Player) {
    if(!player.bot) console.log('Suas cartas sao: ', player.letters.letter1, ' ', 
        player.letters.letter2, ' ', player.letters.letter3
    );
}
export default function initRound(playerInitial: Player, player: Player) {
    randomLetter(playerInitial, player);
    randomLetter(player, playerInitial);
    showLetters(player);
    showLetters(playerInitial);
    console.log('Rodada 1');
    //fazer as funções das rodadas
}    