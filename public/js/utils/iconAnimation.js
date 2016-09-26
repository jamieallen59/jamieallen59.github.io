// Animation for the icons near the footer.

const staggeredAdding = (e, i) => {
	setTimeout(() => {
		e.className += ' show-link' // eslint-disable-line no-param-reassign
	}, i * 200)
}

export default () => {
	const iconsCollection = document.getElementsByClassName('link')
	const icons = [].slice.call(iconsCollection)

	icons.map((result, index) => staggeredAdding(result, index))
}
