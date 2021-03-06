import Buyable from './interface';

export default class Movie implements Buyable {
    constructor(
        readonly id: number,
        readonly nameRus: string,
        readonly name: string,
        readonly year: number,
        readonly country: string,
        readonly slogan: string,
        readonly genre: string[],
        readonly duration: number,
        readonly price: number,

    ) {}
}