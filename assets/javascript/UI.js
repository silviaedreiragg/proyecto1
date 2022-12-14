class UserInterface {
    initUI(game) {
       
        const btnAttack1 = document.getElementById('attack-1')
        btnAttack1.innerText = game.player.getAttackNames()[0]

        const btnAttack2 = document.getElementById('attack-2')
        btnAttack2.innerText = game.player.getAttackNames()[1]

        const btnAttack3 = document.getElementById('attack-3')
        btnAttack3.innerText = game.player.getAttackNames()[2]

        const btnAttack4 = document.getElementById('attack-4')
        btnAttack4.innerText = game.player.getAttackNames()[3]


        btnAttack1.addEventListener('click', () => {
            game.player.attacks[0].execute(game, game.enemy)
            game.whatIsHappening(game.player, game.player.attacks[0])
            
        })

        btnAttack2.addEventListener('click', () => {
            game.player.attacks[1].execute(game, game.enemy)
            game.whatIsHappening(game.player, game.player.attacks[1])
        })

        btnAttack3.addEventListener('click', () => {
            game.player.attacks[2].execute(game, game.enemy)
            game.whatIsHappening(game.player, game.player.attacks[2])
        })

        btnAttack4.addEventListener('click', () => {
            game.player.attacks[3].execute(game, game.enemy)
            game.whatIsHappening(game.player, game.player.attacks[3])
        })

        this.start();
    }

    gameOver() {
        const gameOver = document.getElementById(`gameOver`);
        gameOver.style.display = 'block'
 
        const canvas = document.getElementById('game');
        const ctx = canvas.getContext('2d')
        ctx.fillStyle = 'red'
        ctx.fillRect(0, 0, 600, 350)
        const playerLife = document.getElementById('player-life')
        playerLife.style.display = 'none'
        const enemyLife = document.getElementById('enemy-life')
        enemyLife.style.display = 'none'
        const playerAttacks = document.getElementById('player-attacks')
        playerAttacks.style.display = 'none'

        const playAgain = document.getElementById('playAgain');
        playAgain.style.display = 'block'

    }


    youWin() {
        const youWin = document.getElementById(`youWin`);
        youWin.style.display = 'block'

        const ctx = canvas.getContext('2d')
        ctx.fillStyle = 'green'
        ctx.fillRect(0, 0, 600, 350)
        const playerLife = document.getElementById('player-life');
        playerLife.style.display = 'none'
        const enemyLife = document.getElementById('enemy-life');
        enemyLife.style.display = 'none'
        const playerAttacks = document.getElementById('player-attacks');
        playerAttacks.style.display = 'none'

        const playAgain = document.getElementById('playAgain');
        playAgain.style.display = 'block'

    }

    start() {
        const youWin = document.getElementById(`youWin`);
        const gameOver  = document.getElementById('gameOver')
        const canvas = document.getElementById('game');
        const playerLife = document.getElementById('player-life');
        const enemyLife = document.getElementById('enemy-life');
        const playerAttacks = document.getElementById('player-attacks');

        gameOver.style.display = "none";
        youWin.style.display = "none";        
        canvas.style.display ='block'
        playerLife.style.display = 'block'
        enemyLife.style.display = 'block'
        playerAttacks.style.display = 'grid'
    }
}


