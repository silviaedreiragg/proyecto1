class UserInterface {

    draw(player) {
        const attack1 = document.getElementById('attack-1')
        attack1.innerText = player.getAttackNames()[0]

        const attack2 = document.getElementById('attack-2')
        attack2.innerText = player.getAttackNames()[1]

        const attack3 = document.getElementById('attack-3')
        attack3.innerText = player.getAttackNames()[2]

        const attack4 = document.getElementById('attack-4')
        attack4.innerText = player.getAttackNames()[3]
    
        // 4. Añadir callbacks a cada boton
    }
}