import bibtexparser
from bibtexparser.bparser import BibTexParser
from bibtexparser.bwriter import BibTexWriter
from bibtexparser.customization import homogeneize_latex_encoding
from os import path


with open('pubs.bib') as pubs:
    parser = BibTexParser()
    #parser.customization = homogeneize_latex_encoding
    pdb = bibtexparser.load(pubs, parser=parser)
    text = ''
    for entry in pdb.entries:
        text += entry['abstract']
    print text
