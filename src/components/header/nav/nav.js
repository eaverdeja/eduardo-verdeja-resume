import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { Container } from './nav.css'

const Nav = ({ onDownloadResume }) => (
  <Container>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <a href="/#" onClick={onDownloadResume}>
          Resume (PDF)
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/eduardo-verdeja-b3372288/"
        >
          LinkedIn
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/eaverdeja"
        >
          GitHub
        </a>
      </li>
    </ul>
  </Container>
)

Nav.propTypes = {
  onDownloadResume: PropTypes.func.isRequired,
}

export default Nav
