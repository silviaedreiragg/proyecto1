const playerLife = document.getElementById('player-life')
playerLife.style.display = 'none'

const enemyLife = document.getElementById('enemy-life')
enemyLife.style.display = 'none'

const battlebtn = document.getElementById('battle');
battlebtn.style.display = 'none'


battlebtn.addEventListener('click', () => {
    battlebtn.remove()
})

const latigoCepa = new Attack('LÁTIGO CEPA', 'GRASS', 25, '', '');
const dobleEquipo = new Attack('DOBLE EQUIPO', 'DEFENSE', 20, '', '');
const hojaAfilada = new Attack('HOJA AFILADA', 'GRASS', 10, '', '');
const Placaje = new Attack('PLACAJE', 'NORMAL', 15, '', '');
const pistolaAgua = new Attack('PISTOLA AGUA', 'WATER', 15, '', '');
const surf = new Attack('SURF', 'WATER', 5, '', '');
const ataqueRapido = new Attack('ATAQUE RÁPIDO', 'NORMAL', 25, '', '');
const latigo = new Attack('LÁTIGO', 'DEFENSE', 20, '', '');
const impactrueno = new Attack('IMPACTRUENO', 'ELECTRIC', 15, '', '');
const rayo = new Attack('RAYO', 'ELECTRIC', 5, '', '');
const lanzallamas = new Attack('LANZALLAMAS', 'FIRE', 10, '', '');
const ascuas = new Attack('ASCUAS', 'FIRE', 15, '', '');
const mordisco = new Attack('MORDISCO', 'NORMAL', 15, '', '');


const pokemons = [
    new Pokemon('Bulbasaur', 'GRASS', 100, 'https://img.pokemondb.net/sprites/diamond-pearl/normal/bulbasaur.png', './assets/sounds/bulbasaur.mp3', [
        latigoCepa,
        dobleEquipo,
        hojaAfilada,
        Placaje,
    ]),
    new Pokemon('Squirtle', 'WATER', 100, 'https://img.pokemondb.net/sprites/diamond-pearl/normal/squirtle.png', './assets/sounds/squirtle.mp3', [
        pistolaAgua,
        surf,
        latigo,
        ataqueRapido,

    ]),
    new Pokemon('Pikachu', 'ELECTRIC', 100, 'https://img.pokemondb.net/sprites/diamond-pearl/normal/pikachu-f.png', './assets/sounds/pika-pika.mp3', [
        ataqueRapido,
        impactrueno,
        latigo,
        rayo,

    ]),
    new Pokemon('Charmander', 'FIRE', 100, 'https://img.pokemondb.net/sprites/diamond-pearl/normal/charmander.png', './assets/sounds/charmander.mp3', [
        ascuas,
        mordisco,
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
    battlebtn.style.display = 'block'
    playerLife.style.display = 'block'
    enemyLife.style.display = 'block'



}) 
