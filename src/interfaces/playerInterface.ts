export default interface Player {
    readonly name: string;
    points: number;
    bot: boolean;
    letters: {
        letter1: string | null;
        letter2: string | null;
        letter3: string | null;
    };
}
