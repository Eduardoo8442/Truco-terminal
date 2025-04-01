export default class CreatePlayer {
    readonly name: string;
    bot: boolean;
    points: number;
    letters = {
    letter1: null,
    letter2: null,
    letter3: null
    }; 
    constructor(name: string, bot: boolean) {
        this.name = name;
        this.points = 0;
        this.bot = bot;
    }

    public victory() {
        this.points += 1;
        if(this.points === 11) console.log('O jogador ', this.name, 'esta agora com 11 pontos');
        if(this.points === 12) return console.log('Vencedor da partida:', this.name);
    } 
}