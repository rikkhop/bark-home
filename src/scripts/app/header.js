export default class Header {
	constructor(el) {
		this.el = el
		this.burger = this.el.querySelector('.burger')
		this.close = this.el.querySelector('.nav_close')

		console.log('header')

		this._init()
	}

	_init() {
		this._init_events()
	}

	_init_events() {
		this.burger.addEventListener('click', (e)=>{
			e.preventDefault()
			console.log('click')
			this._open_nav()
		})

		window.addEventListener('scroll', ()=>{
			let pos = window.scrollY

			if(pos > 200) {
				this.el.classList.add('header-sticky')
			} else {
				this.el.classList.remove('header-sticky')
			}
		})
	}

	_open_nav() {
		if(this.el.classList.contains('nav-active')) {
			this._close_nav()
		} else {
			this.el.classList.add('nav-active')
		}
	}

	_close_nav() {
		this.el.classList.remove('nav-active')
	}
}