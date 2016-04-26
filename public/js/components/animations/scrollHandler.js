'use strict'

import animateIcons from './icons.js'

let lastScrollPosition = 0;
let ticking = false;

window.addEventListener('scroll', function(e){
	lastScrollPosition = window.scrollY

	if (!ticking) {
		window.requestAnimationFrame(function() {
			if (lastScrollPosition > 600) {
				animateIcons()
				window.removeEventListener('scroll', false)
			}
			ticking = false;
		});
	}
	ticking = true;
})
