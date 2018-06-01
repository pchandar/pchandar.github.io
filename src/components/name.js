import React from 'react'
import styled, { css } from 'styled-components'

const Base = styled.a`
  font-size: 20pt;
  font-family: 'Pacifico', cursive;
  color: #fff;
  margin: 20px 0;
  width: fit-content;
  white-space: nowrap;
  transition-property: transform;
  transition-duration: 0.8s;

  ${props => props.dark && css`
    color: #444;
  `}

  ${props => props.block && css`
    display: block;
  `}

  ${props => props.small && css`
    text-decoration: None;
    font-size: 1.1em;
  `}

  ${props => props.header && css`
  text-decoration: None;
  color: #0f1900;
  font-size: 1.1em;
`}

  ${props => props.big && css`
    font-size: 2em;
  `}
`

class Name extends React.Component {
  render() {
    return (
      <Base {...this.props} href='/'>
        Praveen Chandar
      </Base>
    );
  }
}

export default Name
