import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image";
import wordcloudImg from "../data/img/wordcloud.png";
import spotifyLogoImg from "../data/img/spotify_logo.png";
import ibmLogoImg from "../data/img/ibm_logo.jpeg";
import xaiLogoImg from "../data/img/xai_logo.png";
import columbiaLogoImg from "../data/img/columbia_logo.png";
import udLogoImg from "../data/img/ud_logo.png";
import pdfImg from "../data/img/pdf.jpeg";


class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      publicURLMap: this.props.data.allFile.edges.reduce(function (map, obj) {
        map[obj.node.name.toLowerCase()] = obj.node.publicURL;
        return map;
      }, {})

    };
  }
  render() {
    return (
      <main className="main" role="main">

        <div className="text">

          <center><img src={wordcloudImg} width="600" /></center>
          <h3>About Me</h3>
          <p>I'm a Research Scientist at <a href="http://www.spotify.com">Spotify</a>. My interets are in the field of information retrieval, natural language processing and machine learning. More specifically, I am interested in the study and development of effective and efficient evaluation techniques that help measure how well retrieval systems satisfy user's information needs. I have worked on research problems including evaluation of retrieval and  question answering systems, web search, recommendation systems, and dialogue system for healthcare and scheduling. As a result of this work, I have created open-source tools, contributed to commercial software and published in leading academic conferences</p>


          <div className="mini-cv table-responsive">
            <h3> Mini CV </h3>
            <hr />
            <table className="table">
              <tbody>
                <tr>
                  <td width="70%">Research Scientist at Spotify</td>
                  <td width="30%"><center><img src={spotifyLogoImg} width="30px" /></center></td>
                </tr>
                <tr>
                  <td width="70%">Research Staff Member at IBM Research</td>
                  <td width="30%"><center><img src={ibmLogoImg} width="40px" /></center></td>
                </tr>
                <tr>
                  <td width="70%">Data Scientiest at X.AI</td>
                  <td width="30%"><center><img src={xaiLogoImg} width="30px" /></center></td>
                </tr>
                <tr>
                  <td width="70%">Postdoctorial Research Scientiest at Columbia University</td>
                  <td width="30%"><center><img src={columbiaLogoImg} width="40px" /></center></td>
                </tr>
                <tr>
                  <td width="70%">PhD program in Computer Science at University of Delaware</td>
                  <td width="30%"><center><img src={udLogoImg} width="30px" /></center></td>
                </tr>
                <tr>
                  <td colSpan="2">A pdf version of my full CV <a href={this.state.publicURLMap["cv"]}>
                    <img className="mini-cv" src={pdfImg} width="20px" /></a></td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <p>More information about my research projects can be found here. Please take a look around to learn more about my work and email me if you have any questions or comments!
      </p> */}

        </div>
      </main >
    )
  }
}

export default IndexPage

export const query = graphql`
query cvQuery{
  allFile(filter: { name: { eq: "cv" }}) {
    edges {
      node {
        id
        name
        relativePath
        publicURL
      }
    }
  }
}
`
