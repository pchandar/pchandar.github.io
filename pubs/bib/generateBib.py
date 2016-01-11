import bibtexparser
from bibtexparser.bparser import BibTexParser
from bibtexparser.bwriter import BibTexWriter
from bibtexparser.customization import homogeneize_latex_encoding
writer = BibTexWriter()
header = '''---
layout: default
title: Publications
---
<header class="header cf" role="banner">
  <nav role="navigation">
    <ul class="menu cf">
      <li>
        <a href="/">Home</a>
      </li>

      <li>
        <a href="/research">Research</a>
      </li>

      <li>
        <a class ="active" href="/publications">Publications</a>
      </li>

      <li>
        <a  href="/toolkits">Toolkits</a>
      </li>

    </ul>
  </nav>
</header>

<main class="main" role="main">
'''
def entry_to_bibtex(entry):
            #: List of BibTeX elements to write, valid values are `entries`, `comments`, `preambles`, `strings`.
        contents = ['comments', 'preambles', 'strings', 'entries']
        #: Character(s) for indenting BibTeX field-value pairs. Default: single space.
        indent = ' '
        #: Align values. Determines the maximal number of characters used in any fieldname and aligns all values
        #    according to that by filling up with single spaces. Default: False
        align_values = False
        #: Characters(s) for separating BibTeX entries. Default: new line.
        entry_separator = '\n'
        #: Tuple of fields for ordering BibTeX entries. Set to `None` to disable sorting. Default: BibTeX key `('ID', )`.
        order_entries_by = ('ID', )
        #: Tuple of fields for display order in a single BibTeX entry. Fields not listed here will be displayed
        #: alphabetically at the end. Set to '[]' for alphabetical order. Default: '[]'
        display_order = []
        #: BibTeX syntax allows comma first syntax
        #: (common in functional languages), use this to enable
        #: comma first syntax as the bwritter output
        comma_first = False

        #: internal variable used if self.align_values = True
        _max_field_width = 0
        bibtex = ''
        # Write BibTeX key
        bibtex += '@' + entry['ENTRYTYPE'] + '{' + entry['ID']

        # create display_order of fields for this entry
        # first those keys which are both in self.display_order and in entry.keys
        display_order = [i for i in display_order if i in entry]
        # then all the other fields sorted alphabetically
        more_fields = [i for i in sorted(entry) if i not in display_order]
        display_order += [i for i in sorted(entry) if i not in display_order]

        # Write field = value lines
        for field in [i for i in display_order if i not in ['ENTRYTYPE', 'ID']]:
            try:
                if comma_first:
                    bibtex += "\n" + indent + ", " + "{0:<{1}}".format(field, _max_field_width) + " = {" + entry[field] + "}"
                else:
                    bibtex += ",\n" + indent + "{0:<{1}}".format(field, _max_field_width) + " = {" + entry[field] + "}"
            except TypeError:
                raise TypeError(u"The field %s in entry %s must be a string"
                                % (field, entry['ID']))
        bibtex += "\n}\n" + entry_separator
        return bibtex

with open('pubs.bib') as pubs:
    parser = BibTexParser()
    #parser.customization = homogeneize_latex_encoding
    pdb = bibtexparser.load(pubs, parser=parser)
    count = 0
    print header
    print  '''
    <div class="text">
      <h1>Publications</h1>
      <table class="bibtex-biblio">'''

    import operator
    sorted_entries = sorted(pdb.entries, key=lambda (y): y['year'], reverse=True)
    for entry in sorted_entries:
        count += 1
        bibid = entry.get('ID')
        link = "/pubs/" + bibid + ".pdf"
        pages = entry.get('pages').replace('--', '-')
        year = entry.get('year')
        series = entry.get('series')
        booktitle = entry.get('booktitle')
        title = entry.get('title').replace('{', '').replace('}','')
        authors = entry.get('author').replace('Chandar, Praveen',
         '<textit>Chandar, Praveen</textit>')
        abstract = entry.get('abstract')
        del entry['abstract']
        bib = entry_to_bibtex(entry).strip()
        if entry['ENTRYTYPE']== 'inproceedings':
            print '''\t<tr valign="top" id="%s" class="bibtex-entry bibtex-natbib">
                <td style='padding-bottom:10pt'><li></td>
                <td class="bibtex-citation">
                    <span class="bibtex-inproceedings">
                    <span class="bibtex-author">%s</span>
                    (<span class="bibtex-year">%s</span>)
                    <span class="bibtex-title">
                        <a href="%s">%s</a></span>. In
                        <span class="bibtex-booktitle">%s - %s</span>, <span class="bibtex-pages">pages %s</span>.</span>
                </td>''' % (bibid, authors, year, link, title, booktitle, series, pages)
        elif entry['ENTRYTYPE'] == 'phdthesis':
            school = entry.get('school')
            print '''\t<tr valign="top" id="%s" class="bibtex-entry bibtex-natbib">
                <td style='padding-bottom:10pt'><li></td>
                <td class="bibtex-citation">
                    <span class="bibtex-phdthesis">
                    <span class="bibtex-author">%s</span>
                    (<span class="bibtex-year">%s</span>)
                    <span class="bibtex-title">
                        <a href="%s">%s</a></span>.
                        <span class="bibtex-publisher">%s</span>,
                        <span class="bibtex-publisher">%s</span>.
                    </span>
                </td>
            ''' % (bibid, authors, year, link, title, series, school)
        else:
            jname = entry.get('journal')
            issue = entry.get('issue')
            vol = entry.get('vol')
            print '''
            <tr valign="top" id="%s" class="bibtex-entry bibtex-natbib">
            <td style='padding-bottom:10pt'>
                <li>
            </td>
            <td class="bibtex-citation">
                <span class="bibtex-article">
                <span class="bibtex-author">%s</span>
                (<span class="bibtex-year">%s</span>)
                <span class="bibtex-title">
                    <a href="%s">%s</a></span>.
                    <span class="bibtex-jname">%s</span>,
                    <span class="bibtex-volume">%s</span>
                    <span class="bibtex-number">%s</span>
                    <span class="bibtex-pages">:%s</span>.
                </span>
            </td>''' % (bibid, authors, year, link, title, jname, vol, issue, pages)

        print '''
            <td width='10%%' align='right'>
                <a href='javascript:toggleDiv("b%s");'>[BibTex]</a>
            </td>
            <td width='10%%' align='right'>
                <a href='javascript:toggleDiv("a%s");'>[Abstract]</a>
            </td>
        </tr>
        <tr>
            <td></td>
            <td colspan='3'>
                <pre id='b%s' class='bibtex' style='display:none'>{%% raw %%}%s{%% endraw %%}
                </pre>
            </td>
        </tr>
        <tr>
            <td></td>
            <td colspan='3'>
                <div id='a%s' class='abstract' style='display:none'>%s</div>
            </td>
        </tr>''' % (count, count, count, bib, count, abstract)
    print  '''</table></div>'''
