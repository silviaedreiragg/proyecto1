const playerLife = document.getElementById('player-life')
playerLife.style.display = 'none'

const enemyLife = document.getElementById('enemy-life')
enemyLife.style.display = 'none'

const playerAttacks = document.getElementById('player-attacks')
playerAttacks.style.display = 'none'

const youWin = document.getElementById(`youWin`);
youWin.style.display = 'none'

const gameOver = document.getElementById(`gameOver`);
gameOver.style.display = 'none'

const playAgain = document.getElementById('playAgain');
playAgain.style.display = 'none'

const latigoCepa = new Attack('LÁTIGO CEPA', 'GRASS', 25, '', 'assets/images/efectos/latigocepa.png');
const dobleEquipo = new Attack('DOBLE EQUIPO', 'DEFENSE', 20, '', 'assets/images/efectos/dobleequipo.png');
const hojaAfilada = new Attack('HOJA AFILADA', 'GRASS', 10, '', 'assets/images/efectos/hojaafilada.png', 300, 150, 2, 1.5);
const placaje = new Attack('PLACAJE', 'NORMAL', 15, '', 'assets/images/efectos/placaje.png');
const pistolaAgua = new Attack('PISTOLA AGUA', 'WATER', 15, '', 'assets/images/efectos/pistolagua.png');
const surf = new Attack('SURF', 'WATER', 5, '', 'assets/images/efectos/surf2.png');
const puñetazo = new Attack('PUÑETAZO', 'NORMAL', 25, '', 'assets/images/efectos/puño-delado.png');
const latigo = new Attack('LÁTIGO', 'DEFENSE', 20, '', 'assets/images/efectos/latigo.png');
const impactrueno = new Attack('IMPACTRUENO', 'ELECTRIC', 15, '', 'assets/images/efectos/impactrueno.png');
const rayo = new Attack('RAYO', 'ELECTRIC', 5, '', 'assets/images/efectos/rayo.png');
const lanzallamas = new Attack('LANZALLAMAS', 'FIRE', 10, '', 'assets/images/efectos/lanzallamas.png');
const ascuas = new Attack('ASCUAS', 'FIRE', 15, '', 'assets/images/efectos/ascuas.png');

const pokemons = [
    new Pokemon('Bulbasaur', 'GRASS', 100, 'https://img.pokemondb.net/sprites/diamond-pearl/normal/bulbasaur.png', './assets/sounds/bulbasaur.mp3', [
        latigoCepa,
        dobleEquipo,
        hojaAfilada,
        placaje,
    ]),
    new Pokemon('Squirtle', 'WATER', 100, 'https://img.pokemondb.net/sprites/diamond-pearl/normal/squirtle.png', './assets/sounds/squirtle.mp3', [
        pistolaAgua,
        surf,
        latigo,
        puñetazo,

    ]),
    new Pokemon('Pikachu', 'ELECTRIC', 100, 'https://img.pokemondb.net/sprites/diamond-pearl/normal/pikachu-f.png', './assets/sounds/pika-pika.mp3', [
        placaje,
        impactrueno,
        latigo,
        rayo,

    ]),
    new Pokemon('Charmander', 'FIRE', 100, 'https://img.pokemondb.net/sprites/diamond-pearl/normal/charmander.png', './assets/sounds/charmander.mp3', [
        ascuas,
        puñetazo,
        lanzallamas,
        dobleEquipo,
    ]),
];

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d')

const game = new Game(ctx, pokemons);

const startbtn = document.getElementById('start-btn');
startbtn.addEventListener('click', () => {
    const welcome = document.getElementById('welcome');
    welcome.remove()
    canvas.style.display = 'block'
    game.start()
    playerLife.style.display = 'block'
    enemyLife.style.display = 'block'
    playerAttacks.style.display = 'block'
}) 

playAgain.addEventListener('click', () => {
    game.start()
    playerLife.style.display = 'block'
    enemyLife.style.display = 'block'
    playerAttacks.style.display = 'block'
})
