import React from 'react'
import Link from 'gatsby-link'

const ResearchPage = () => (
  <div className="text">
    <h1>Research Projects</h1>

    <h3>Models and Measures for Novel And Diverse Search results</h3>

    <p> Traditional models of information retrieval assume documents are independently relevant. But modeling documents as independently relevant is more likely to produce a ranking with a high degree of redundancy; the amount of novel information available to the user may be minimal as they traverse down a ranked list. This research project attempts to remedy this with new models of document interdependence and new evaluation measures. There are three threads running through this work: (1) the models of diversity, novelty, and redundancy that will be needed to implement ranking algorithms; (2) measurements of diversity, novelty, and redundancy in a ranking of documents; and (3) optimizing model structures and parameters to the measures. As part of this project, we developed statistical models to reduce the degree of redundancy in a rank list, analyzed various evaluation frameworks, designed and conducted user studies to better understand user’s need and proposed a novel preference based evaluation framework. This project resulted in various conference publications and a thesis. </p>


    <h3>Predicting Assessor Disagreement in Information Retrieval</h3>
    <p>Assessors are well known to disagree frequently on the relevance of documents to a topic, but the factors leading to assessor disagreement are still poorly understood. As part of this project, we studied the relationship between assessor disagreement and various factors such as readability, cohesiveness, and rank at which a document is returned by a set of retrieval systems (meta-rank). To this end, we proposed a logistic regression predictive model of second assessor disagreement given meta-rank and initially-assessed relevance. This project is resulted in various conference publications.</p>

    <h3>Evaluation of Answer Snippet Clusters</h3>
    <p>Intelligence analysts are often confronted with informal sources of text including blogs and forums, and would like to study relationships among people involved in the discussion, and points of view expressed regarding a specific event. The problem involves a deep analysis of the large amounts of text. A typical system build for this problem returns a list of relevant answer snippets for a given natural language question and it is often a good idea to cluster (group) the returned answer snippets based on some criteria. In this project, our focus was on developing a novel approach to evaluate the snippet cluster returned by the system. This project resulted in a novel user interface to annotate snippet clusters.</p>

  </div>
)

export default ResearchPage
