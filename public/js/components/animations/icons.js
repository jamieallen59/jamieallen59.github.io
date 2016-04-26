'use strict'

export default function() {
    const iconsCollection = document.getElementsByClassName('link')
    const icons = [].slice.call(iconsCollection)

    let staggeredAdding = (e, i) => {
        setTimeout(function() {
            e.className += ' show-link'
        }, i * 200)
    }

    icons.map((result, index) => {
        staggeredAdding(result, index)
    })
}
