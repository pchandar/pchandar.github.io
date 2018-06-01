webpackJsonp([0x8114ed4d1118],{284:function(e,t){e.exports={data:{allPubMetaJson:{edges:[{node:{title:"Udel @ NTCIR-11 IMine Track",details:"Proceedings of the 11th NTCIR Conference, December 2014, Pages 80-83",authors:["A. Bah","B. Carterette","P. Chandar"],year:"2014",ptype:"TECHREPORT",pdf:"bah2014.pdf",bib:"bah2014.bib",abstract:"This paper describes our participation in the Intent Mining track\nof NTCIR-11. We present our methods and results for both\ndocument ranking and subtopic mining. Our ranking methods are\nbased on several data fusion techniques with some variations. Our\nsubtopic mining method is a very simple technique that uses query\ndimensions' items to form a subtopic."}},{node:{title:"Document Comprehensiveness and User Preferences in Novelty Search Tasks",details:"Proceedings of the 38th International ACM SIGIR Conference on Research and Development in Information Retrieval, July 2015, Pages 735-738",authors:["A. Bah","P. Chandar","B. Carterette"],year:"2015",ptype:"INPROCEEDINGS",pdf:"bah2015.pdf",bib:"bah2015.bib",abstract:'Different users may be attempting to satisfy different information needs while providing the same query to a search engine. Addressing that issue is addressing Novelty and Diversity in information retrieval. Novelty and Diversity search task models the task wherein users are interested in seeing more and more documents that are not only relevant, but also cover more aspects (or subtopics) related to the topic of interest. This is in contrast with the traditional IR task where topical relevance is the only factor in evaluating search results. In this paper, we conduct a user study where users are asked to give a preference between one of two documents B and C given a query and also given that they have already seen a document A. We then test a total of ten hypotheses pertaining to the relationship between the "comprehensiveness" of documents (i.e. the number of subtopics a document is relevant to) and real users\' preference judgments. Our results show that users are inclined to prefer documents with higher comprehensiveness, even when the prior document A already covers more aspects than the two documents being compared, and even when the least preferred has a higher relevance grade. In fact, users are inclined to prefer documents with higher overall aspect-coverage even in cases where B and C are relevant to the same number of novel subtopics.'}},{node:{title:"Probabilistic Models of Ranking Novel Documents for Faceted Topic Retrieval",details:"Proceedings of the 18th ACM Conference on Information and Knowledge Management, November 2009, Pages 1287-1296",authors:["B. Carterette","P. Chandar"],year:"2009",ptype:"INPROCEEDINGS",pdf:"carterette2009.pdf",bib:"carterette2009.bib",abstract:"Traditional models of information retrieval assume documents are independently relevant. But when the goal is retrieving diverse or novel information about a topic, retrieval models need to capture dependencies between documents. Such tasks require alternative evaluation and optimization methods that operate on different types of relevance judgments. We define faceted topic retrieval as a particular novelty-driven task with the goal of finding a set of documents that cover the different facets of an information need. A faceted topic retrieval system must be able to cover as many facets as possible with the smallest number of documents. We introduce two novel models for faceted topic retrieval, one based on pruning a set of retrieved documents and one based on retrieving sets of documents through direct optimization of evaluation measures. We compare the performance of our models to MMR and the probabilistic model due to Zhai et al. on a set of 60 topics annotated with facets, showing that our models are competitive."}},{node:{title:"Minimal Test Collections for Relevance Feedback",details:"Proceedings of The Eighteenth Text REtrieval Conference, TREC 2009, Gaithersburg, Maryland, USA, November 2009, Pages 1-6",authors:["B. Carterette","P. Chandar","A. Kailasam","D. Muppaneni","L. Thota"],year:"2009",ptype:"TECHREPORT",pdf:"carterette2009b.pdf",bib:"carterette2009b.bib",abstract:'The Information Retrieval Lab at the University of Delaware participated in the Relevance Feedback track at TREC 2009. We used only the Category B subset of the ClueWeb collection; our preprocessing and indexing steps are described in our paper on ad hoc and diversity runs. The second year of the Relevance Feedback track focused on selection of documents for feedback. Our hypothesis is that documents that are good at distinguishing systems in terms of their effectiveness by mean average precision will also be good documents for relevance feedback. Thus we have applied the document selection algorithm MTC (Minimal Test Collections) developed by Carterette et al.  that is used in the Million Query Track for selecting documents to be judged to find the right ranking of systems. Our approach can therefore be described as "MTC for Relevance Feedback".'}},{node:{title:"Sessions, Diversity, and Ad Hoc Retrieval",details:"Proceedings of The Ninth Text REtrieval Conference, TREC 2010, Gaithersburg, Maryland, USA, November 2010, Pages 1-6",authors:["B. Carterette","P. Chandar"],year:"2010",ptype:"TECHREPORT",pdf:"carterette2010.pdf",bib:"carterette2010.bib",abstract:""}},{node:{title:"Implicit Feedback and Document Filtering for Retrieval Over Query Sessions",details:"Proceedings of The Twentieth Text REtrieval Conference, TREC 2011, Gaithersburg, Maryland, USA, November 2011, Pages 1-3",authors:["B. Carterette","P. Chandar"],year:"2011",ptype:"TECHREPORT",pdf:"carterette2011b.pdf",bib:"carterette2011b.bib",abstract:""}},{node:{title:"Analysis of Various Evaluation Measures for Diversity",details:"Proceedings of the 1st International Workshop on Diversity in Document Retrieval at European Conference on Information Retrieval, April 2011, Pages 21-28",authors:["P. Chandar","B. Carterette"],year:"2011",ptype:"WORKSHOP",pdf:"chandar2011.pdf",bib:"chandar2011.bib",abstract:"Evaluation measures play a vital role in analyzing the performance of a system, comparing two or more systems, and optimizing systems to perform some task. In this paper, we analyze and highlight the strengths and weaknesses of commonly used measures for evaluating the diversity in search results. We compare MAP-IA, alpha-nDCG, and ERR-IA using data from TREC'09 web track diversity runs and simulated data. We describe a class of test sets that could be used to compare evaluation measure and systems used for diversifying search results."}},{node:{title:"Diversification of Search Results Using Webgraphs",details:"Proceedings of the 33rd International ACM SIGIR Conference on Research and Development in Information Retrieval, July 2010, Pages 869-870",authors:["P. Chandar","B. Carterette"],year:"2010",ptype:"INPROCEEDINGS",pdf:"chandar2010.pdf",bib:"chandar2010.bib",abstract:"A set of words is often insufficient to express a user's information need. In order to account for various information needs associated with a query, diversification seems to be a reasonable strategy. By diversifying the result set, we increase the probability of results being relevant to the user's information needs when the given query is ambiguous. A diverse result set must contain a set of documents that cover various subtopics for a given query. We propose a graph based method which exploits the link structure of the web to return a ranked list that provides complete coverage for a query. Our method not only provides diversity to the results set, but also avoids excessive redundancy. Moreover, the probability of relevance of a document is conditioned on the documents that appear before it in the result list. We show the effectiveness of our method by comparing it with a query-likelihood model as the baseline."}},{node:{title:"Using PageRank to Infer User Preferences",details:"Proceedings of the 35th International ACM SIGIR Conference on Research and Development in Information Retrieval, July 2012, Pages 1167-1168",authors:["P. Chandar","B. Carterette"],year:"2012",ptype:"INPROCEEDINGS",pdf:"chandar2012.pdf",bib:"chandar2012.bib",abstract:"Recently, researchers have shown interest in the use of preference judgments for evaluation in IR literature. Although preference judgments have several advantages over absolute judgment, one of the major disadvantages is that the number of judgments needed increases polynomially as the number of documents in the pool increases. We propose a novel method using PageRank to minimize the number of judgments required to evaluate systems using preference judgments. We test the proposed hypotheses using the TREC 2004 to 2006 Terabyte dataset to show that it is possible to reduce the evaluation cost considerably. Further, we study the susceptibility of the methods due to assessor errors."}},{node:{title:"Using Preference Judgments for Novel Document Retrieval",details:"Proceedings of the 35th International ACM SIGIR Conference on Research and Development in Information Retrieval, July 2012, Pages 861-870",authors:["P. Chandar","B. Carterette"],year:"2012",ptype:"INPROCEEDINGS",pdf:"chandar2012a.pdf",bib:"chandar2012a.bib",abstract:"There has been considerable interest in incorporating diversity in search results to account for redundancy and the space of possible user needs. Most work on this problem is based on subtopics: diversity rankers score documents against a set of hypothesized subtopics, and diversity rankings are evaluated by assigning a value to each ranked document based on the number of novel (and redundant) subtopics it is relevant to. This can be seen as modeling a user who is always interested in seeing more novel subtopics, with progressively decreasing interest in seeing the same subtopic multiple times. We put this model to test: if it is correct, then users, when given a choice, should prefer to see a document that has more value to the evaluation. We formulate some specific hypotheses from this model and test them with actual users in a novel preference-based design in which users express a preference for document A or document B given document C. We argue that while the user study shows the subtopic model is good, there are many other factors apart from novelty and redundancy that may be influencing user preferences. From this, we introduce a new framework to construct an ideal diversity ranking using only preference judgments, with no explicit subtopic judgments whatsoever."}},{node:{title:"What Qualities Do Users Prefer in Diversity Rankings?",details:"Proceedings of the 2nd International Workshop on Diversity in Document Retrieval at Web Search and Data Mining Conference, February 2012, Pages 10-16",authors:["P. Chandar","B. Carterette"],year:"2012",ptype:"WORKSHOP",pdf:"chandar2012b.pdf",bib:"chandar2012b.bib",abstract:""}},{node:{title:"Document Features Predicting Assessor Disagreement",details:"Proceedings of the 36th International ACM SIGIR Conference on Research and Development in Information Retrieval, July 2013, Pages 745-748",authors:["P. Chandar","W. Webber","B. Carterette"],year:"2013",ptype:"INPROCEEDINGS",pdf:"chandar2013.pdf",bib:"chandar2013.bib",abstract:"The notion of relevance differs between assessors, thus giving rise to assessor disagreement. Although assessor disagreement has been frequently observed, the factors leading to disagreement are still an open problem. In this paper we study the relationship between assessor disagreement and various topic independent factors such as readability and cohesiveness. We build a logistic model using reading level and other simple document features to predict assessor disagreement and rank documents by decreasing probability of disagreement. We compare the predictive power of these document-level features with that of a meta-search feature that aggregates a document's ranking across multiple retrieval runs. Our features are shown to be on a par with the meta-search feature, without requiring a large and diverse set of retrieval runs to calcu- late. Surprisingly, however, we find that the reading level features are negatively correlated with disagreement, suggesting that they are detecting some other aspect of document content."}},{node:{title:"Preference Based Evaluation Measures for Novelty and Diversity",details:"Proceedings of the 36th International ACM SIGIR Conference on Research and Development in Information Retrieval, July 2013, Pages 413-422",authors:["P. Chandar","B. Carterette"],year:"2013",ptype:"INPROCEEDINGS",pdf:"chandar2013a.pdf",bib:"chandar2013a.bib",abstract:"Novel and diverse document ranking is an effective strategy that involves reducing redundancy in a ranked list to maximize the amount of novel and relevant information available to users. Evaluation for novelty and diversity typically involves an assessor judging each document for relevance against a set of pre-identified subtopics, which may be disambiguations of the query, facets of an information need, or nuggets of information. Alternately, when expressing a preference for document A or document B, users may implicitly take subtopics into account, but may also take into account other factors such as recency, readability, length, and so on, each of which may have more or less importance depending on user. A user profile contains information about the extent to which each factor, including subtopic relevance, plays a role in the user's preference for one document over another. A preference-based evaluation can then take this user profile information into account to better model utility to the space of users.\nIn this work, we propose an evaluation framework that not only can consider implicit factors but also handles differences in user preference due to varying underlying information need. Our proposed framework is based on the idea that a user scanning a ranked list from top to bottom and stopping at rank k gains some utility from every document that is relevant their information need. Thus, we model the expected utility of a ranked list by estimating the utility of a document at a given rank using preference judgments and define evaluation measures based on the same. We validate our framework by comparing it to existing measures such as alpha-nDCG, ERR-IA, and subtopic recall that require explicit subtopic judgments We show that our proposed measures correlate well with existing measures while having the potential to capture various other factors when real data is used. We also show that the proposed measures can easily handle relevance assessments against multiple user profiles, and that they are robust to noisy and incomplete judgments."}},{node:{title:"Similarity-based Recommendation of New Concepts to a Terminology",details:"Proceedings of AMIA 2015 Annual Symposium, November 2015, Pages 386-395",authors:["P. Chandar","A. Yaman","J. Hoxha","Z. He","C. Weng"],year:"2015",ptype:"INPROCEEDINGS",pdf:"chandar2015.pdf",bib:"chandar2015.bib",abstract:"Terminologies can suffer from poor concept coverage due to delays in new concept insertion. This study tests a similarity-based approach to recommending concepts from a text corpus to a terminology. Our approach involves extraction of candidate concepts from a given text corpus, which are represented using a set of features. The model learns the important features to characterize a concept and recommends new concepts to a terminology. Further, we propose a cost-effect evaluation methodology to estimate the effectiveness of terminology enrichment methods. To test our methodology, we use the clinical trial eligibility criteria free-text as an example text corpus to recommend concepts for SNOMED CT. We computed precision at various rank intervals to measure the performance of the methods. Results indicate that our automated algorithm is an effective method for concept recommendation."}},{node:{title:"Novelty and Diversity in Search Results",details:"University of Delaware, August 2014, Pages 1-175",authors:["P. Chandar"],year:"2014",ptype:"PHDTHESIS",pdf:"chandarthesis2014.pdf",bib:"chandarthesis2014.bib",abstract:"Information retrieval (IR) is the process of obtaining relevant information for a given information need. The concept of relevance and its relation to information needs is of central concern to IR researchers. Until recently, much work in IR settled with a notion of relevance that is topical -- that is, containing information about a specified topic -- and in which the relevance of a document in a ranking is independent of the relevance of other documents in the ranking. But such an approach is more likely to produce a ranking with a high degree of redundancy; the amount of novel information available to the user may be minimal as they traverse down a ranked list.\n\n\nIn this work, we focus on the novelty and diversity problem that models relevance of a document taking into account the inter-document effects in a ranked list and diverse information needs for a given query. Existing approaches to this problem mostly rely on identifying subtopics (disambiguation, facets, or other component parts) of an information need, then estimating a document's relevance independently w.r.t each subtopic. Users are treated as being satisfied by a ranking of documents that covers the space of subtopics as well as covering each individual subtopic sufficiently.\n\nWe propose a novel approach that models novelty implicitly while retaining the ability to capture other important factors affecting user satisfaction.\nWe formulate a set of hypotheses based on the existing subtopic approach and test them with actual users using a simple conditional preference design: users express a preference for document A or document B given document C.\nFollowing this, we introduce a novel triplet framework for collecting such preference judgments and using them to estimate the total utility of a document while taking inter-document effects into account.\nFinally, a set of utility-based metrics are proposed and validated to measure the effectiveness of a system for the novelty and diversity task. "}},{node:{title:"Simulation-based Evaluation of the Generalizability Index for Study Traits",details:"Proceedings of AMIA 2015 Annual Symposium, November 2015, Pages 593-602",authors:["Z. He","P. Chandar","P. Ryan","C. Weng"],year:"2015",ptype:"INPROCEEDINGS",pdf:"he2015_draft.pdf",bib:"he2015_draft.bib",abstract:"The Generalizability Index for Study Traits (GIST) has been proposed recently for assessing the population representativeness of a set of related clinical trials using eligibility features (e.g., age or BMI), one each time. However, GIST has not yet been evaluated. To bridge this knowledge gap, this paper reports a simulation-based validation study for GIST. Using the National Health and Nutrition Examination Survey (NHANES) data, we demonstrated the effectiveness of GIST at quantifying the population representativeness of a set of related trials that differ in disease domains, study phases, sponsor types, and study designs, respectively. We also showed that among seven example medical conditions, the GIST of age increases from Phase I trials to Phase III trials in the seven disease domains and is the lowest in asthma trials. We concluded that GIST correlates with simulation-based generalizability results and is a valid metric for quantifying population representativeness of related clinical trials."}},{node:{title:"DREAM: Classification scheme for dialog acts in clinical research query mediation",details:"Journal of Biomedical Informatics, Volume 59, Issue 1, February 2016, Pages 89-101",authors:["J. Hoxha","P. Chandar","Z. He","J. Cimino","D. Hanauer","C. Weng"],year:"2016",ptype:"ARTICLE",pdf:"hoxha2016.pdf",bib:"hoxha2016.bib",abstract:"Clinical data access involves complex, but opaque communication between medical researchers and query analysts. Understanding such communication is indispensable for designing intelligent human-machine dialog systems that automate query formulation. This study investigates email communication and proposes a novel scheme for classifying dialog acts in clinical research query mediation. We analyzed 315 email messages exchanged in the communication for 20 data requests obtained from three institutions. The messages were segmented into 1333 utterance units. Through a rigorous process, we developed a classification scheme and applied it for dialog act annotation of the extracted utterances. Evaluation results with high inter-annotator agreement demonstrate the reliability of this scheme. This dataset is used to contribute preliminary understanding of dialog acts distribution and conversation flow in this dialog space."}},{node:{title:"Offline Comparative Evaluation with Incremental, Minimally-Invasive Online Feedback",details:"Proceedings of the 41st International ACM SIGIR Conference on Research & Development in Information Retrieval, July 8-12, 2018.",authors:["B. Carterette","P. Chandar"],year:"2018",ptype:"conference",pdf:"sigir18.pdf",bib:"sigir18.bib",abstract:"We investigate the use of logged user interaction data---queries and clicks---for offline evaluation of new search systems in the context of counterfactual analysis.  The challenge of evaluating a new ranker against log data collected from a static production ranker is that new rankers may retrieve documents that have never been seen in the logs before, and thus lack any logged feedback from users.  Additionally, the ranker itself could bias user actions such that even  documents that have been seen in the logs would have exhibited different interaction patterns had they been retrieved and ranked by the new ranker.  We present a methodology for incrementally logging interactions on previously-unseen documents for use in computation of an unbiased estimator of a new ranker's effectiveness.  Our method is very lightly invasive with respect to the production ranker results to insure against users becoming dissatisfied if the new ranker is poor. We demonstrate how well our methods work in a simulation environment designed to be challenging for such methods to argue that they are likely to work in a wide variety of scenarios."}},{node:{title:"Alternative Assessor Disagreement and Retrieval Depth",details:"Proceedings of the 21st ACM International Conference on Information and Knowledge Management, November 2012, Pages 125-134",authors:["W. Webber","P. Chandar","B. Carterette"],year:"2012",ptype:"INPROCEEDINGS",pdf:"webber2012.pdf",bib:"webber2012.bib",abstract:"Assessors are well known to disagree frequently on the relevance of documents to a topic, but the factors leading to assessor disagreement are still poorly understood. In this paper, we examine the relationship between the rank at which a document is returned by a set of retrieval systems and the likelihood that assessors will disagree on its relevance, and find that there is a strong and consistent correlation between the two. We adopt a meta-rank method of summarizing a document's rank across multiple runs, and propose a logistic regression predictive model of assessor disagreement given meta-rank and initially-assessed relevance. The consistency of the model parameters across different topics, assessor pairs, and collections is considered. The model gives comparatively accurate predictions of absolute scores, but less consistent predictions of relative scores than a simpler rank-insensitive model. We demonstrate that the logistic regression model is robust to using sampled, rather than exhaustive, dual assessment. We demonstrate the use of the sampled predictive model to incorporate assessor disagreement into tests of statistical significance."}},{node:{title:"Ad hoc and diversity retrieval at the University of Delaware",details:"Proceedings of The Eighteenth Text REtrieval Conference, TREC 2009, Gaithersburg, Maryland, USA, November 2009, Pages 1-8",authors:["P. Chandar","A. Kailasam","D. Muppaneni","S. Thota","B. Carterette"],year:"2009",ptype:"TECHREPORT",pdf:"chandar2009.pdf",bib:"chandar2009.bib",abstract:"This is the report on the University of Delaware Information Retrieval Lab's participation in the TREC 2009 Web and Million Query tracks. Our report on the Relevance Feedback track is in a separate document titled Minimal test collections for relevance feedback."}},{node:{title:"An Information Retrieval Framework for Contextual Suggestion Based on Heterogeneous Information Network Embeddings",details:"Proceedings of the 41st International ACM SIGIR Conference on Research & Development in Information Retrieval, July 8-12 2018",authors:["D. Seyler","P. Chandar","M. Davis"],year:"2018",ptype:"conference",pdf:"sigir18b.pdf",bib:"",abstract:"We present an Information Retrieval framework that leverages Heterogeneous Information Network (HIN) embeddings for contextual suggestion. Our method represents users, documents and other context-related documents as heterogeneous objects in a HIN. Using meta-paths, selected based on domain knowledge, we create graph embeddings from this network, thereby learning a representation of users and objects in the same semantic vector space. This allows inferences of user interest on unseen objects based on distance in the embedding space. These object distances are then incorporated as features in a well-established learning to rank (LTR) framework. We make use of the 2016 TREC Contextual Suggestion (TRECCS) dataset, which contains user profiles in the form of relevance-rated documents, and demonstrate the competitiveness of our approach by comparing our system to the best performing systems of the TRECCS task."}}]},allFile:{edges:[{node:{name:"Chandar2012",publicURL:"/static/Chandar2012-3b0f3697366d46256cab02306a993751.pdf"}},{node:{name:"Chandar2011",publicURL:"/static/Chandar2011-ad54a4e6b62c94d7bd44b350b37fca40.pdf"}},{node:{name:"Chandar2013",publicURL:"/static/Chandar2013-225915d6b884c50afaa74475b30c7465.pdf"}},{node:{name:"Carterette2009a",publicURL:"/static/Carterette2009a-c61e7f0fda58817c5300703124973b71.pdf"}},{node:{name:"Chandar2010",publicURL:"/static/Chandar2010-ec65fe73a1b19c156eefdf2ed1e243a0.pdf"}},{node:{name:"Hruby2015",publicURL:"/static/Hruby2015-c0d106a89788bd5658af19ab3dde5e6e.pdf"}},{node:{name:"Carterette2009",publicURL:"/static/Carterette2009-d31169f980ed719701595fa89cfd1210.pdf"}},{node:{name:"Webber2012",publicURL:"/static/Webber2012-35ad8d83d37054b76e5f9f9f648fe1e0.pdf"}},{node:{name:"Chandar2013a",publicURL:"/static/Chandar2013a-f89c6a0e45a37e68206f9740f7f63d11.pdf"}},{node:{name:"Chandar2012b",publicURL:"/static/Chandar2012b-df9f7254fb9ccbe8daa22c13d3e6ad12.pdf"}},{node:{name:"Chandar2015",publicURL:"/static/Chandar2015-2ef6dcf3800549c799bb1df433e0ac16.pdf"}},{node:{name:"Chandar2012a",publicURL:"/static/Chandar2012a-0f453b186426d22815b23902bcd82eea.pdf"}},{node:{name:"Hoxha2016",publicURL:"/static/Hoxha2016-7a1ffe1cdaaf2b3686963cc2532239e7.pdf"}},{node:{name:"He2015_draft",publicURL:"/static/He2015_draft-5135ab9e13c5e961b11c30ba04788ede.pdf"}},{node:{name:"ChandarThesis2014",publicURL:"/static/ChandarThesis2014-a1910ac9ffc2fa4dd2c6a96ac9e22a71.pdf"}}]}},pathContext:{}}}});
//# sourceMappingURL=path---publication-69e19110015ab76449e2.js.map