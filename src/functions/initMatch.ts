import * as readline from "readline";
import CreatePlayer from "./objects/createPlayer";
import initRound from "./match/initRound";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function inputNameAdversary(callback: (adversary: CreatePlayer) => void) {
    rl.question("Digite o nome do seu adversário: ", (name) => {
        const adversary = new CreatePlayer(name, true);
        callback(adversary);
    });
}

export default function initMatch() {
    rl.question("Digite seu nome: ", (name) => {
        const player = new CreatePlayer(name, false);
        inputNameAdversary((adversary) => {
            console.log("Jogadores criados:");
            console.log("Você:", player.name);
            console.log("Adversário:", adversary.name);

            initRound(player, adversary);
        });
    });
}
