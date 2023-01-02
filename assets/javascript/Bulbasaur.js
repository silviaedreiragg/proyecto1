class Bulbasaur extends Pokemon {
    constructor() {
        const latigoCepa = new Attack('LÁTIGO CEPA', 'GRASS', 25, 'assets/images/efectos/latigocepa.png');
        const dobleEquipo = new Attack('DOBLE EQUIPO', 'DEFENSE', 20, 'assets/images/efectos/dobleequipo.png');
        const hojaAfilada = new Attack('HOJA AFILADA', 'GRASS', 10, 'assets/images/efectos/hojaafilada.png', 300, 150, 2, 1.5);
        const placaje = new Attack('PLACAJE', 'NORMAL', 15, 'assets/images/efectos/placaje.png');

        super('Bulbasaur', 'GRASS', 100, 'https://img.pokemondb.net/sprites/diamond-pearl/normal/bulbasaur.png', './assets/sounds/bulbasaur.mp3', [
            latigoCepa,
            dobleEquipo,
            hojaAfilada,
            placaje,
        ])
    }
}