import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styles from "../styles/nav.module.css"

const Header = ({ siteTitle }) => (
  <header className={styles.header}>

    <h1 className={styles.logo}>
      <Link className="logo-link" to="/">Laura McCartney</Link>
    </h1>


    <nav className={styles.navigation}>
      <Link to="/gallery" activeClassName={styles.active} partiallyActive={true}>
        Gallery
      </Link>
      <Link to="/projects" activeClassName={styles.active} partiallyActive={true}>
        Projects
      </Link>
      <Link to="/about" activeClassName={styles.active} partiallyActive={true}>
        About
      </Link>
      <Link to="/shop" activeClassName={styles.active} partiallyActive={true}>
        Shop
      </Link>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
