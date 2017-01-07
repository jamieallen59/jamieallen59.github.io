import animateIcons from './iconAnimation.js'

let lastScrollPosition = 0
let ticking = false

window.addEventListener('scroll', () => {
	lastScrollPosition = window.pageYOffset

	if (!ticking) {
		window.requestAnimationFrame(() => {
			if (lastScrollPosition > 600) {
				animateIcons()
				window.removeEventListener('scroll', false)
			}
			ticking = false
		})
	}
	ticking = true
})
