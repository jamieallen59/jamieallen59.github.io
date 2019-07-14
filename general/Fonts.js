import FontFaceObserver from 'fontfaceobserver'


const Fonts = () => {
  const link = document.createElement('link')
  link.href = 'https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap'
  link.rel = 'stylesheet'

  document.head.appendChild(link)

  const roboto = new FontFaceObserver('Source Sans Pro')

  roboto.load().then(() => {
    document.documentElement.classList.add('source-sans-pro')
  })
}

export default Fonts