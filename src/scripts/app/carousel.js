import Glide from '@glidejs/glide'

export default class Carousel {
	constructor(el) {
		this.el = el
		this.container = this.el.querySelector('.glide')
		this.prev = this.el.querySelector('.glide_prev')
		this.next = this.el.querySelector('.glide_next')

		this._init()
	}

	_init() {
		this._start_carousel()

		this._init_events()
	}

	_init_events() {
		let self = this

		// custom carousel controls
		this.prev.addEventListener('click', function(){
			self.carousel.go('<');
		});

		this.next.addEventListener('click', function(){
			self.carousel.go('>');
		});
	}

	_start_carousel() {
		this.carousel = new Glide(this.container, {
			type: 'carousel',
			startAt: 0,
			perView: 3,
			gap: 35,
			focusAt: 1,
			perTouch: 1,
			breakpoints: {
				1200: {
					perView: 2
				},
				991: {
					perView: 2
				},
			    768: {
			    	perView: 1
			    }
			  }
		})

		this.carousel.mount()
	}
}