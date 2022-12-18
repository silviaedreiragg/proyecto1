class Background {
	constructor(ctx) {
		this.ctx = ctx
		this.x = 0
		this.y = 0
		this.w = ctx.canvas.width
		this.h = ctx.canvas.height
		this.bgImage = new Image()
		this.bgImage.src = './assets/images/batalla-campo.png' 
	}

	draw() {
		this.ctx.drawImage(this.bgImage, this.x, this.y)
	}
}