// Animation for the labels on load.
import styles from '../Label.less'

export default () => {
	const labelsCollection = document.getElementsByClassName(styles.label)
	const labels = [].slice.call(labelsCollection)

	const staggeredAdding = (e, i) => {
		setTimeout(() => {
			e.className += ' show-label' // eslint-disable-line no-param-reassign
		}, i * 300)
	}

	labels.map((result, index) => staggeredAdding(result, index))
}
