// Animation for the icons near the footer.

const staggeredAdding = (e, i) => {
	setTimeout(() => {
		e.className += ' show-link' // eslint-disable-line no-param-reassign
	}, i * 200)
}

export default () => {
	const shownIconsCollection = document.getElementsByClassName('show-link')

	if (shownIconsCollection.length < 1) {
		const hiddenIconsCollection = document.getElementsByClassName('link')
		const icons = [].slice.call(hiddenIconsCollection)

		icons.map((result, index) => staggeredAdding(result, index))
	}
	return false
}
