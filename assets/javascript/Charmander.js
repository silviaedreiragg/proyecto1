class Charmander extends Pokemon {
    constructor() {
        const lanzallamas = new Attack('LANZALLAMAS', 'FIRE', 10, 'assets/images/efectos/lanzallamas.png');
        const ascuas = new Attack('ASCUAS', 'FIRE', 15, 'assets/images/efectos/ascuas.png');
        const puñetazo = new Attack('PUÑETAZO', 'NORMAL', 25, 'assets/images/efectos/puño-delado.png');
        const dobleEquipo = new Attack('DOBLE EQUIPO', 'DEFENSE', 20, 'assets/images/efectos/dobleequipo.png');


        super('Charmander', 'FIRE', 100, 'https://img.pokemondb.net/sprites/diamond-pearl/normal/charmander.png', './assets/sounds/charmander.mp3', [
            ascuas,
            puñetazo,
            lanzallamas,
            dobleEquipo,
        ])
    }
}