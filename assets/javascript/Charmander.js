class Charmander extends Pokemon {
    constructor() {
        const lanzallamas = new Attack('LANZALLAMAS', 'FIRE', 10, 'assets/images/efectos/lanzallamas.png');
        const ascuas = new Attack('ASCUAS', 'FIRE', 15, 'assets/images/efectos/ascuas.png');
        const placaje = new Attack('PLACAJE', 'NORMAL', 15, 'assets/images/efectos/placaje.png');
        const dobleEquipo = new Attack('DOBLE EQUIPO', 'DEFENSE', 20, 'assets/images/efectos/dobleequipo.png');


        super('Charmander', 'FIRE', 100, 'https://img.pokemondb.net/sprites/diamond-pearl/normal/charmander.png', './assets/sounds/charmander.mp3', [
            ascuas,
            placaje,
            lanzallamas,
            dobleEquipo,
        ])
    }
}