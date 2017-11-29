# SciRA (Scientific Research Smart Assistant)

[![Build Status](https://travis-ci.org/SciRA/scira-ui.svg?branch=master)](https://travis-ci.org/SciRA/scira-ui)

When writing academic papers, searching for related literature and managing documents/references can be a burden. Develop a smart platform able to provide an innovative visual experience regarding the references between papers, their genealogy (more general, [the provenance][0]), and various information about (co-)authors. Additionally, the system will offer multiple [data/knowledge visualization solutions][1] and filtering techniques using several refinements – e.g., publication year, subject, keywords, language, is cited by, cites, format (HTML, PDF), type (article, presentation, tutorial, book,...), etc. The users should be able to find a specific research paper and explore papers which are either cited by or cite the paper in question. Also, the users can opt to receive recommendations for similar papers based on the [2012 ACM Computing Classification System][2], specific preferences or the history of interactions with the application. A SPARQL endpoint will be exposed in order to answer to complex queries (for example, papers written by authors from UAIC between 1996 and 2016 having as keywords "formal verification" or "distributed computing", the most recent papers focused on data mining or related topics, cited by minimum 15 articles written by a group of maximum 3 persons and published in high-profile journals, etc.). The results will be available in [Scholarly HTML][3] and JSON-LD with [Creative Work][4] schema.org items. See also, [DBLP datasets][5]. Bonus: a proper use of conceptual models defined by [Springer Nature SciGraph][6].

[0]: http://www.provbook.org/tutorial/provenanceweek2014/
[1]: http://profs.info.uaic.ro/~busaco/teach/courses/hci/hci-film.html#week12
[2]: http://www.acm.org/about/class/2012
[3]: http://scholarly.vernacular.io/
[4]: https://schema.org/CreativeWork
[5]: https://kdl.cs.umass.edu/display/public/DBLP
[6]: http://www.springernature.com/gp/researchers/scigraph
