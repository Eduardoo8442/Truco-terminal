import * as readline from "readline";
import CreatePlayer from "./objects/createPlayer";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function inputNameAdversary() {
    rl.question("Digite o nome do seu adversario: ", (name) => {
        const adversary = new CreatePlayer(name, true);
        rl.close(); 
        return adversary;
    });
}
export default function initMatch() {
    rl.question("Digite seu nome: ", (name) => {
        const player = new CreatePlayer(name, false);
        const adversary = inputNameAdversary();
               
        rl.close(); 
    });
}