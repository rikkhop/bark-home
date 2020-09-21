export default class Overlay {
	constructor(el) {
		this.el = el
		this.open = document.querySelector('.overlay_open')
		this.close = this.el.querySelector('.overlay_close')

		this._init()
	}

	_init() {
		this._init_events()
	}

	_init_events() {
		this.open.addEventListener('click', (e)=>{
			e.preventDefault()
			this._open_overlay()
		})

		this.close.addEventListener('click', ()=>{
			this._close_overlay()
		})
	}

	_open_overlay() {
		this.el.classList.add('overlay_active')
	}

	_close_overlay() {
		this.el.classList.remove('overlay_active')
	}
}