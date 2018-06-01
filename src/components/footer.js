import React from 'react'
import Link from 'gatsby-link'
import styled, { css } from 'styled-components'
import { Flex, Box } from 'grid-styled'
import SocialIcons from './social'
import Name from './name'
import Button from './button'
import FontAwesome from 'react-fontawesome'
import './footer.css'


class Footer extends React.Component {
  render() {
    return (
      <Flex className="footer cf" justifyContent="space-around" alignItems="start">
        <Box className="copyright" flex='1 1 auto' >
          @ 2018&#160;<a href="mailto:pcr@udel.edu">Praveen Chandar</a>

        </Box>
        <Box className="colophon" flex='1 1 auto' >
          <SocialIcons icons={[
            {
              name: 'twitter',
              href: 'https://twitter.com/pchandarr'
            }, {
              name: 'github-alt',
              href: 'https://github.com/pchandar'
            }, {
              name: 'linkedin',
              href: 'https://ie.linkedin.com/in/praveenchandar'
            }
          ]} />

        </Box>
      </Flex>
    );
  }
}


export default Footer
