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

const choose = document.getElementById('choose');
choose.style.display = 'none'

const latigoCepa = new Attack('LÁTIGO CEPA', 'GRASS', 25, 'assets/images/efectos/latigocepa.png');
const dobleEquipo = new Attack('DOBLE EQUIPO', 'DEFENSE', 20, 'assets/images/efectos/dobleequipo.png');
const hojaAfilada = new Attack('HOJA AFILADA', 'GRASS', 10, 'assets/images/efectos/hojaafilada.png', 300, 150, 2, 1.5);
const placaje = new Attack('PLACAJE', 'NORMAL', 15, 'assets/images/efectos/placaje.png');
const pistolaAgua = new Attack('PISTOLA AGUA', 'WATER', 15, 'assets/images/efectos/pistolagua.png');
const surf = new Attack('SURF', 'WATER', 5, 'assets/images/efectos/surf2.png');
const latigo = new Attack('LÁTIGO', 'DEFENSE', 20, 'assets/images/efectos/latigo.png');
const impactrueno = new Attack('IMPACTRUENO', 'ELECTRIC', 15, 'assets/images/efectos/impactrueno.png');
const rayo = new Attack('RAYO', 'ELECTRIC', 5, 'assets/images/efectos/rayo.png');
const lanzallamas = new Attack('LANZALLAMAS', 'FIRE', 10, 'assets/images/efectos/lanzallamas.png');
const ascuas = new Attack('ASCUAS', 'FIRE', 15, 'assets/images/efectos/ascuas.png');

const pokemons = [
    new Bulbasaur(),
    new Squirtle(),
    new Pikachu(),
    new Charmander(),
];


const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d')

const game = new Game(ctx, pokemons);

const startbtn = document.getElementById('start-btn');

startbtn.addEventListener('click', () => {
    const welcome = document.getElementById('welcome');
    welcome.remove()
    canvas.style.display = 'block'
    choose.style.display = 'block'

})

const bulbasaurbtn = document.getElementById('bulbasaurbtn');
bulbasaurbtn.addEventListener('click', () => {
    choose.style.display = 'none'
    game.start(new Bulbasaur())

})

const squirtlebtn = document.getElementById('squirtlebtn');
squirtlebtn.addEventListener('click', () => {
    choose.style.display = 'none'
    game.start(new Squirtle())

})


const pikachubtn = document.getElementById('pikachubtn');
pikachubtn.addEventListener('click', () => {
    choose.style.display = 'none'
    game.start(new Pikachu())

})

const charmanderbtn = document.getElementById('charmanderbtn');
charmanderbtn.addEventListener('click', () => {
    choose.style.display = 'none'
    game.start(new Charmander())
})



playAgain.addEventListener('click', () => {
    choose.style.display = "block";
    const playAgain = document.getElementById('playAgain');
    playAgain.style.display = 'none'
    console.log(playAgain.style.display)

})
