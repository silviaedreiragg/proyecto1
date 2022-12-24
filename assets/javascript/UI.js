class UserInterface {

initUI(game) {
    const btnAttack1 = document.getElementById('attack-1')
        btnAttack1.innerText = game.player.getAttackNames()[0]

        const btnAttack2 = document.getElementById('attack-2')
        btnAttack2.innerText = game.player.getAttackNames()[1]

        const btnAttack3 = document.getElementById('attack-3')
        btnAttack3.innerText = game.player.getAttackNames()[2]

        const btnAttack4 = document.getElementById('attack-4')
        btnAttack4.innerText =game.player.getAttackNames()[3]


        btnAttack1.addEventListener('click', () => {
            game.player.attacks[0].execute(game, game.enemy)

        })

        btnAttack2.addEventListener('click', () => {
            game.player.attacks[1].execute(game, game.enemy)
        })

        btnAttack3.addEventListener('click', () => {
            game.player.attacks[2].execute(game, game.enemy)

        })

        btnAttack4.addEventListener('click', () => {
            game.player.attacks[3].execute(game, game.enemy)

        })
}
}