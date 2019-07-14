import Divide from '../Divide'

import styles from './index.styles.scss'

const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
          <a className={styles.link} href="mailto: jamieallen59@gmail.com">
              <i class="fa fa-envelope fa-lg"></i>
              <div>Gmail</div>
          </a>
          <a className={styles.link} href="www.linkedin.com/in/j-allen">
              <i class="fa fa-linkedin fa-lg"></i>
              <div>LinkedIn</div>
          </a>
          <a className={styles.link} href="https://github.com/jamieallen59">
              <i class="fa fa-github fa-lg"></i>
              <div>Github</div>
          </a>
      </div>

      <Divide />

      <div className={styles.copyright}>
        {`© ${new Date().getFullYear()} Jamie Allen`}
      </div>
      {/* <div class="attribution">
          Icons made by 
          <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">
              Eucalyp
          </a> 
          and is licensed by 
          <a 
              href="http://creativecommons.org/licenses/by/3.0/" 
              title="Creative Commons BY 3.0" target="_blank">
              CC 3.0 BY
          </a>
      </div> */}
  </footer>
  )
}

export default Footer