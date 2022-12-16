const pokemons = [
    'Pikachu', 
    'Charizard',
    'Blastoise', 
    'Combusken',
    'Chikorita',
    'Magikarp',
    'Breloom',
    'Viplume',
    'Vaporeon',
    'Venosour',
    'Dewgong'];

    const canvas = document.getElementById('game');
    const ctx = canvas.getContext('2d')

    const game = new Game(ctx);

    const startbtn = document.getElementById('start-btn');
    startbtn.addEventListener ('click',  () => {
       const welcome = document.getElementById('welcome');
        welcome.remove()
        canvas.style.display = 'block'
        game.start() 
    }) 