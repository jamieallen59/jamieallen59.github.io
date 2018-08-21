import animateIcons from './iconAnimation.js'

let lastScrollPosition = 0
let ticking = false

const handleScroll = () => {
	lastScrollPosition = window.pageYOffset

	if (!ticking) {
		window.requestAnimationFrame(() => {
			if (lastScrollPosition > 600) {
				animateIcons()
				window.removeEventListener('scroll', handleScroll)
			}
			ticking = false
		})
	}
	ticking = true
}

window.addEventListener('scroll', handleScroll)
