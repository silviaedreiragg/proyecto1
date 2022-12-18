const pokemons = [
    'Pikachu',
    'Charmander',
    'Squirtle',
    'Bubasaour',
];

const battlebtn = document.getElementById('battle');
battlebtn.style.display = 'none'

const pikachuattacksbtn = document.getElementById('pikachuAttacks');
pikachuattacksbtn.style.display = 'none'

const charmanderattacksbtn = document.getElementById('charmanderAttacks');
charmanderattacksbtn.style.display = 'none'

const bulbasaurattacksbtn = document.getElementById('bulbasaurAttacks');
bulbasaurattacksbtn.style.display = 'none'

const squirtleattacksbtn = document.getElementById('squirtleAttacks');
squirtleattacksbtn.style.display = 'none'

battlebtn.addEventListener ('click', () => {
    battlebtn.remove()
    pikachuattacksbtn.style.display = 'block'
})


const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d')

const game = new Game(ctx);

const startbtn = document.getElementById('start-btn');
startbtn.addEventListener('click', () => {
    const welcome = document.getElementById('welcome');
    welcome.remove()
    canvas.style.display = 'block'
    game.start()
    battlebtn.style.display = 'block'

}) 
