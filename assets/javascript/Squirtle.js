class Squirtle extends Pokemon {
    constructor() {
        const pistolaAgua = new Attack('PISTOLA AGUA', 'WATER', 15, 'assets/images/efectos/pistolagua.png');
        const surf = new Attack('SURF', 'WATER', 5, 'assets/images/efectos/surf2.png');
        const placaje = new Attack('PLACAJE', 'NORMAL', 15, 'assets/images/efectos/placaje.png');
        const latigo = new Attack('LÁTIGO', 'DEFENSE', 20, 'assets/images/efectos/latigo.png');


        super('Squirtle', 'WATER', 100, 'https://img.pokemondb.net/sprites/diamond-pearl/normal/squirtle.png', './assets/sounds/squirtle.mp3', [
            pistolaAgua,
            surf,
            latigo,
            placaje,

        ])
    }
}