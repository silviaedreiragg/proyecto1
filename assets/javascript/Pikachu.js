class Pikachu extends Pokemon {
    constructor() {

        const placaje = new Attack('PLACAJE', 'NORMAL', 15, 'assets/images/efectos/placaje.png');
        const latigo = new Attack('LÁTIGO', 'DEFENSE', 20, 'assets/images/efectos/latigo.png');
        const impactrueno = new Attack('IMPACTRUENO', 'ELECTRIC', 15, 'assets/images/efectos/impactrueno.png');
        const rayo = new Attack('RAYO', 'ELECTRIC', 5, 'assets/images/efectos/rayo.png');

        super('Pikachu', 'ELECTRIC', 100, 'https://img.pokemondb.net/sprites/diamond-pearl/normal/pikachu-f.png', './assets/sounds/pika-pika.mp3', [
            placaje,
            impactrueno,
            latigo,
            rayo,
        ]);
    }
}