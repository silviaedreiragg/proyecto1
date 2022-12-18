class AtaqueRapido {
    constructor(ctx, squirtleAttacks, onAttack) {
        this.ctx = ctx
        this.type = 'normal'
        this.stamine = 20
        this.sound = new Audio(URL='https://www.myinstants.com/es/instant/pikachu-slap-64516/?utm_source=copy&utm_medium=share')
        this.squirtleAttacks = document.getElementById('squirtleAttacks');
        this.onAttack = onAttack
        this.btn = document.createNodeIterator('button') 
        this.btn.addEventListener('click', this.perform)
    
    }
}