import Head from 'next/head'

import styles from './index.styles.scss'

const Helmet = () => {
  return (
    <Head>
      <title>Gummi</title>
      <meta 
        name="viewport" 
        content="initial-scale=1.0, width=device-width"
      />
      <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
      <link rel="manifest" href="/static/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#da532c"></meta>
      <meta name="theme-color" content="#ffffff"></meta>
    </Head>
  )
}

const Homepage = () => {
  return(
    <>
      <Helmet />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          TEST
        </div>
      </div>
    </>
  )
}

export default Homepage