import React from 'react'
import styled, { css } from 'styled-components'
import { Flex, Box } from 'grid-styled'
import FaFilePdfO from 'react-icons/lib/fa/file-pdf-o'
import FaBold from 'react-icons/lib/fa/bold'
import FaChevronDown from 'react-icons/lib/fa/chevron-down'

import './publication.css'



function getAuthors(props) {
  return props.authors.map((a, index) => {
    if (a == 'P. Chandar' && index == 0) {
      return <strong key={index}>{a}</strong>;
    } else if (a == 'P. Chandar' && index > 0) {
      return <strong key={index}>, {"   "} {a}</strong>;
    } else if (index > 0) {
      return ",  " + a;
    } else {
      return a;
    }
  })
}
function getPubType(props) {
  if (props.pubType == 'INPROCEEDINGS') {
    return <span className="ptype label label-conf">Conference</span>;
  } else if (props.pubType == 'ARTICLE') {
    return <span className="ptype label label-journal">Journal Paper</span>;
  } else if (props.pubType == 'PHDTHESIS') {
    return <span className="ptype label label-thesis">Thesis</span>;
  } else if (props.pubType == 'TECHREPORT') {
    return <span className="ptype label label-report">Tech. Report</span>;
  } else if (props.pubType == 'WORKSHOP') {
    return <span className="ptype label label-workshop">Workshop</span>;
  }

}

class PublicationItem extends React.Component {
  constructor() {
    super()
    this.state = {
      showAbstract: false
    }
  }
  toggleAbstract() {
    this.setState({
      showAbstract: !this.state.showAbstract
    })
  }
  render() {
    

    return (
      <div className="shadow-lg mb-3 p-2 bg-white rounded pitem">
        <Flex>
          <Box>
            <span className="ptitle">
              {this.props.title}
            </span>
            <span className="pdetails">{this.props.details}</span>
            <span className="pauthor">
              {getAuthors(this.props)}
            </span>
          </Box>
        </Flex>
        <hr className="pfooter" />
        <Flex justifyContent="space-around" alignItems="start">
          <Box flex='1 1 auto' >
            {getPubType(this.props)}
          </Box>
          <Box flex='1 2 3' px={3} className="passets">
            <a href={this.props.pdf}><FaFilePdfO size={15} color="#dc3545" />  </a>
            <a href={this.props.pib}><FaBold size={15} color="#dc3545" />  </a>
            <a onClick={this.toggleAbstract.bind(this)}><FaChevronDown size={15} color="#343a40" />  </a>
          </Box>
        </Flex>
        {this.state.showAbstract ? <div className="pabstract"> {this.props.abstract} </div> : null}

      </div>
    );
  }
}

export default PublicationItem
