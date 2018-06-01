import React from 'react'
import Link from 'gatsby-link'
import { Flex, Box } from 'grid-styled'
import PublicationItem from '../components/publication'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './publication.css'

class PublicationPage extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.renderList = this.renderList.bind(this);

    this.state = {
      dropdownOpen: false,
      pubFilterType: ["INPROCEEDINGS", "PHDTHESIS", "WORKSHOP", "ARTICLE", "TECHREPORT"],
      publicURLMap: this.props.data.allFile.edges.reduce(function (map, obj) {
        map[obj.node.name.toLowerCase() + '.pdf'] = obj.node.publicURL;
        return map;
      }, {})

    };
  }

  toggle() {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  }

  comparePubItems(a, b) {
    if (a.node.year < b.node.year)
      return 1;
    if (a.node.year > b.node.year)
      return -1;
    if (a.node.year == b.node.year)
      return (a.node.month < b.node.month) ? 1 : -1;
    return 0;
  }

  setFilter(ptype) {
    if (ptype == "all") {
      this.setState({
        pubFilterType: ["INPROCEEDINGS", "PHDTHESIS", "WORKSHOP", "ARTICLE", "TECHREPORT"]
      })
    }
    else {
      console.log(ptype)
      this.setState({
        pubFilterType: [ptype]
      })
    }
  }

  renderList() {
    return <div>
      {this.props.data.allPubMetaJson.edges
        .filter(({ node }, index) => this.state.pubFilterType.indexOf(node.ptype) != -1)
        .sort(this.comparePubItems)
        .map(({ node }, index) =>
          <PublicationItem
            key={index}
            title={node.title}
            authors={node.authors}
            details={node.details}
            year={node.year}
            pubType={node.ptype}
            pdf={this.state.publicURLMap[node.pdf]}
            bib={node.bib}
            abstract={node.abstract}
          />
        )}
    </div>;
  }

  render() {
    console.log(this.state.publicURLMap)
    return (
      <div>
        <ButtonDropdown className="pubsfilter" size="sm" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            Filter By Type
        </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={this.setFilter.bind(this, "all")}>All Types</DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={this.setFilter.bind(this, "INPROCEEDINGS")}>Conference</DropdownItem>
            <DropdownItem onClick={this.setFilter.bind(this, "WORKSHOP")}>Workshop</DropdownItem>
            <DropdownItem onClick={this.setFilter.bind(this, "ARTICLE")}>Journal</DropdownItem>
            <DropdownItem onClick={this.setFilter.bind(this, "TECHREPORT")}>Tech. Report</DropdownItem>
            <DropdownItem onClick={this.setFilter.bind(this, "PHDTHESIS")}>Thesis</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
        {this.renderList()}
      </div>
    )
  }
}

export default PublicationPage


export const query = graphql`
  query pubData{
          allPubMetaJson {
        edges {
          node {
        title
        details
        authors
        year
        ptype
        pdf
        bib
        abstract
       }
     }
   }
    allFile(filter: {extension: {eq: "pdf" }}) {
          edges {
        node {
          name
          publicURL
        }
      }
    }
  }
`