import FontFaceObserver from 'fontfaceobserver'

const Fonts = () => {
  const link = document.createElement('link')
  link.href = 'https://fonts.googleapis.com/css?family=PT+Serif&display=swap'
  link.rel = 'stylesheet'

  document.head.appendChild(link)

  const roboto = new FontFaceObserver('Roboto')

  roboto.load().then(() => {
    document.documentElement.classList.add('roboto')
  })
}

export default Fonts