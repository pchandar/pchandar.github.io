import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image";
import wordcloudImg from "../data/img/wordcloud.png";


const IndexPage = () => (
  <main className="main" role="main">

    <div className="text">

      <center><img src={wordcloudImg} width="600" /></center>
      <h3>About Me</h3>
      <p>I'm a Data Scientist  at <a href="http://www.x.ai">X.AI Inc.</a> building a AI personal assistant that automatically schedules meetings. Previously, I was a Postdoctoral Research Scientist at <a href="http://www.columbia.edu/">Columbia University</a> working with <a href="http://people.dbmi.columbia.edu/~chw7007/">Dr. Chunhua Weng</a> at the <a href="https://www.dbmi.columbia.edu/">Biomedical Informatics Department</a>. I was a Research Assistant at the <a href="http://ir.cis.udel.edu/">Information Retrieval Lab</a> supervised by <a href="http://ir.cis.udel.edu/~carteret/">Dr. Ben Carterette</a> where I completed my Ph.D. in Computer and Information Science at <a href="http://www.udel.edu"> University of Delaware</a>.
      </p>

      <p>I am interested in the field of information retrieval, natural language processing and machine learning. More specifically, I am interested in the study and development of effective and efficient evaluation techniques that help measure how well retrieval systems satisfy user's information needs. I have worked on research problems including evaluation of retrieval and  question answering systems, web search, recommendation systems, and dialogue system for healthcare and scheduling. As a result of this work, I have created open-source tools, contributed to commercial software and published in leading academic conferences
      </p>

      <p>A pdf version of my CV can be found <a href="/cv.pdf">here</a>.
      </p>

      <p>More information about my research projects can be found here. Please take a look around to learn more about my work and email me if you have any questions or comments!
      </p>

    </div>
  </main >
)

export default IndexPage
