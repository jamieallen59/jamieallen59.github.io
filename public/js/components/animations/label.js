'use strict'

export default function() {
    const labelsCollection = document.getElementsByClassName('label')
    const labels = [].slice.call(labelsCollection)

    let staggeredAdding = (e, i) => {
        setTimeout(function() {
            e.className += ' show-label'
        }, i * 300)
    }

    labels.map((result, index) => {
        staggeredAdding(result, index)
    })
}
