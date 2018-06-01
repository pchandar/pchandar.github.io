import React from 'react'
import styled, { css } from 'styled-components'
import FaGithub from 'react-icons/lib/fa/github'
import FaTwiiter from 'react-icons/lib/fa/twitter'
import FaLinkedIn from 'react-icons/lib/fa/linkedin'
import FaEnvelope from 'react-icons/lib/fa/envelope'


const Base = styled.div`
  margin: 0px 0;
  text-align: right;
  & a {
    display: inline-block;
    margin 8px;
    color: #0f1900;
  }
  & a span {
    transition: color .2s ease-in;
  }
  & a:hover {
    text-decoration: none;
  }
  & a:hover span.fa-linkedin {
    color: #4875b4;
  }
  & a:hover span.fa-twitter {
    color: #3cf;
  }
  & a:hover span.fa-github-alt {
    color: #fc6d26;
  }
`

class SocialIcons extends React.Component {

  render() {
    const github = 'https://github.com/pchandar'
    const linkedin = 'https://au.linkedin.com/in/praveenchandar'
    const twitter = 'https://twitter.com/pchandarr'
    const mailto = 'mailto:pcr@udel.edu'
    return (
      <Base>
        <a href={github}><FaGithub size="15"/>  </a>
        <a href={twitter}><FaTwiiter size="15"/>  </a>
        <a href={linkedin}><FaLinkedIn size="15"/>  </a>
        <a href={mailto}><FaEnvelope size="15"/>  </a>
      </Base>
    );
  }
}

export default SocialIcons
