import Player from "../../interfaces/playerInterface";
import letters from "../../config/letters";

export default function randomLetter(player: Player, adversary: Player) {
    const usedLetters = new Set<string | null>();

    Object.values(adversary.letters).forEach(letter => {
        if (letter === null) usedLetters.add(letter);
    });

    Object.values(player.letters).forEach(letter => {
        if (letter) usedLetters.add(letter);
    });
    const availableLetters = letters.filter(letter => !usedLetters.has(letter));

    const shuffledLetters = availableLetters.sort(() => Math.random() - 0.5);

    player.letters.letter1 = shuffledLetters[0] || null;
    player.letters.letter2 = shuffledLetters[1] || null;
    player.letters.letter3 = shuffledLetters[2] || null;
}
