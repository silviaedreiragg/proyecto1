class Placaje {
    constructor(ctx, bulbasaurAttacks, onAttack) {
        this.ctx = ctx
        this.sound = new Audio(URL='https://www.myinstants.com/es/instant/pikachu-slap-64516/?utm_source=copy&utm_medium=share')
        this.type = 'normal'
        this.istamine = 20
        this.bulbasaurAttacks = document.getElementById('bulbasaurAttacks');
        this.onAttack = onAttack
        this.btn = document.createNodeIterator('button') 
        this.btn.addEventListener('click', this.perform)
    }
}