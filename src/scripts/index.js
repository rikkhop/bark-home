/*
 * @title App
 * @description Application entry point
 */
import Header from './app/header'
import Carousel from './app/carousel'
import Overlay from './app/overlay'
import Flexibility from 'flexibility'

window.addEventListener('load', function () {

	// flexbox polyfill for internet explorer
	// Flexibility(document.querySelector('main'));

	const header = document.querySelector('.header')
	const carousels = document.querySelectorAll('.carousel')
	const overlays = document.querySelectorAll('.overlay')

	if(header) {
		new Header(header)
	}

	if(carousels.length > 0) {
		for(let i = 0; i < carousels.length; i++) {
			new Carousel(carousels[i])
		}
	}

	if(overlays.length > 0) {
		for(let i = 0; i < overlays.length; i++) {
			new Overlay(overlays[i])
		}
	}
})
