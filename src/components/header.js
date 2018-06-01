import React from 'react'
import Link from 'gatsby-link'
import styled, { css } from 'styled-components'
import { Flex, Box } from 'grid-styled'
import Name from './name'
import './header.css'

class HeaderNav extends React.Component {
  render() {

    return (
      <header className="header cf" role="banner">

        <nav role="navigation">
          <span><b><big>Praveen Chandar</big></b></span>
          <ul className="menu cf">
            <li>
              <Link activeClassName="active" exact to="/">Home</Link>
            </li>

            <li>
              <Link activeClassName="active" to="/research">Research</Link>
            </li>

            <li>
              <Link activeClassName="active" to="/publication">Publication</Link>
            </li>

            <li>
              <Link activeClassName="active" to="/toolkits">Toolkits</Link>

            </li>

          </ul>
        </nav>
      </header>
    )
  }
}

export default HeaderNav
