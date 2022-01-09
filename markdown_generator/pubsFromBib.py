#!/usr/bin/env python
# coding: utf-8

# # Publications markdown generator for academicpages
# 
# Takes a set of bibtex of publications and converts them for use with [academicpages.github.io](academicpages.github.io). This is an interactive Jupyter notebook ([see more info here](http://jupyter-notebook-beginner-guide.readthedocs.io/en/latest/what_is_jupyter.html)). 
# 
# The core python code is also in `pubsFromBibs.py`. 
# Run either from the `markdown_generator` folder after replacing updating the publist dictionary with:
# * bib file names
# * specific venue keys based on your bib file preferences
# * any specific pre-text for specific files
# * Collection Name (future feature)
# 
# TODO: Make this work with other databases of citations, 
# TODO: Merge this with the existing TSV parsing solution


from pybtex.database.input import bibtex
import pybtex.database.input.bibtex 
from time import strptime
import string
import html
import os
import re

#todo: incorporate different collection types rather than a catch all publications, requires other changes to template
publist = {
    "proceeding": {
        "file" : "pubs.bib",
        "venuekey": "booktitle",
        "venue-pretext": "In the proceedings of ",
        "collection" : {"name":"publications",
                        "permalink":"/publication/"}
        
    },
    # "journal":{
    #     "file": "pubs.bib",
    #     "venuekey" : "journal",
    #     "venue-pretext" : "",
    #     "collection" : {"name":"publications",
    #                     "permalink":"/publication/"}
    # } 
}

html_escape_table = {
    "&": "&amp;",
    '"': "&quot;",
    "'": "&apos;"
    }

def html_escape(text):
    """Produce entities within text."""
    return "".join(html_escape_table.get(c,c) for c in text)

pubs_db = []
for pubsource in publist:
    parser = bibtex.Parser()
    bibdata = parser.parse_file(publist[pubsource]["file"])

    #loop through the individual references in a given bibtex file
    for bib_id in bibdata.entries:
        #reset default date
        pub_year = "1900"
        pub_month = "01"
        pub_day = "01"
        
        b = bibdata.entries[bib_id].fields
        
        try:
            pub_year = f'{b["year"]}'

            #strip out {} as needed (some bibtex entries that maintain formatting)
            title = b["title"].replace("{", "").replace("}","").replace("\\","").replace(" "," ")    

            url_slug = re.sub("\\[.*\\]|[^a-zA-Z0-9_-]", "", title)
            url_slug = url_slug.replace("--","-")

            #Build Citation from text
            authors = []
            #citation authors - todo - add highlighting for primary author?
            for author in bibdata.entries[bib_id].persons["author"]:
                if "Praveen" in author.first_names[0]:
                    authors += ["<B><em>"+author.first_names[0]+" "+author.last_names[0]+"</em></B>"]
                else:
                    authors += [author.first_names[0]+" "+author.last_names[0]]
            authors = ", ".join(authors)

            #add venue logic depending on citation type
            venue = b["series"].split("'")[0]
            pub_str = f"""\n<p style="font-family: 'Lato'">{title}<br>{authors}<br><a href="/files/papers/{bib_id}.pdf">""" + \
                f"""{venue} {pub_year}</a></p>\n"""
            pubs_db.append({
                "str": pub_str,
                "year": int(pub_year)
            })
            print(f'SUCESSFULLY PARSED {bib_id}: \"', b["title"][:60],"..."*(len(b['title'])>60),"\"")
        # field may not exist for a reference
        except KeyError as e:
            print(f'WARNING Missing Expected Field {e} from entry {bib_id}: \"', b["title"][:30],"..."*(len(b['title'])>30),"\"")
            continue

header = """---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

<p style="font-family: 'Lato'">
You can also find my articles on my
<u><a href="https://dblp.org/pid/69/7536.html">DBLP</a></u> and <u><a href="https://scholar.google.co.uk/citations?user=phLOBVYAAAAJ&hl=en">Google Scholar</a></u> profile.
</p>
"""
sorted_db = sorted(pubs_db, key=lambda p: p['year'], reverse=True)
with open("../_publications/publications.md", 'w') as f:
    f.write(header)
    f.write("\n\n")
    year = 9999
    for p in sorted_db:
        if year >= 2014 and year != p["year"]:
            if year <= 2014:
                f.write(f"\n{year} & Before\n============\n")
                year = 0
            else:
                year = p["year"]
                f.write(f"\n{year}\n========\n")
                
        f.write(p["str"])