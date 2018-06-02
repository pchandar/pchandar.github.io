fs = require('fs');
function BibtexParser() {
  this.pos = 0;
  this.input = "";

  this.entries = {};
  this.comments = [];
  this.strings = {
    JAN: "January",
    FEB: "February",
    MAR: "March",
    APR: "April",
    MAY: "May",
    JUN: "June",
    JUL: "July",
    AUG: "August",
    SEP: "September",
    OCT: "October",
    NOV: "November",
    DEC: "December"
  };


  this.currentKey = "";
  this.currentEntry = "";


  this.setInput = function (t) {
    this.input = t;
  }

  this.getEntries = function () {
    return this.entries;
  }

  this.isWhitespace = function (s) {
    return (s == ' ' || s == '\r' || s == '\t' || s == '\n');
  }

  this.match = function (s) {
    this.skipWhitespace();
    if (this.input.substring(this.pos, this.pos + s.length) == s) {
      this.pos += s.length;
    } else {
      throw "Token mismatch, expected " + s + ", found " + this.input.substring(this.pos);
    }
    this.skipWhitespace();
  }

  this.tryMatch = function (s) {
    this.skipWhitespace();
    if (this.input.substring(this.pos, this.pos + s.length) == s) {
      return true;
    } else {
      return false;
    }
    this.skipWhitespace();
  }

  this.skipWhitespace = function () {
    while (this.isWhitespace(this.input[this.pos])) {
      this.pos++;
    }
    if (this.input[this.pos] == "%") {
      while (this.input[this.pos] != "\n") {
        this.pos++;
      }
      this.skipWhitespace();
    }
  }

  this.value_braces = function () {
    var bracecount = 0;
    this.match("{");
    var start = this.pos;
    while (true) {
      if (this.input[this.pos] == '}' && this.input[this.pos - 1] != '\\') {
        if (bracecount > 0) {
          bracecount--;
        } else {
          var end = this.pos;
          this.match("}");
          return this.input.substring(start, end);
        }
      } else if (this.input[this.pos] == '{') {
        bracecount++;
      } else if (this.pos == this.input.length - 1) {
        throw "Unterminated value";
      }
      this.pos++;
    }
  }

  this.value_quotes = function () {
    this.match('"');
    var start = this.pos;
    while (true) {
      if (this.input[this.pos] == '"' && this.input[this.pos - 1] != '\\') {
        var end = this.pos;
        this.match('"');
        return this.input.substring(start, end);
      } else if (this.pos == this.input.length - 1) {
        throw "Unterminated value:" + this.input.substring(start);
      }
      this.pos++;
    }
  }

  this.single_value = function () {
    var start = this.pos;
    if (this.tryMatch("{")) {
      return this.value_braces();
    } else if (this.tryMatch('"')) {
      return this.value_quotes();
    } else {
      var k = this.key();
      if (this.strings[k.toUpperCase()]) {
        return this.strings[k];
      } else if (k.match("^[0-9]+$")) {
        return k;
      } else {
        throw "Value expected:" + this.input.substring(start);
      }
    }
  }

  this.value = function () {
    var values = [];
    values.push(this.single_value());
    while (this.tryMatch("#")) {
      this.match("#");
      values.push(this.single_value());
    }
    return values.join("");
  }

  this.key = function () {
    var start = this.pos;
    while (true) {
      if (this.pos == this.input.length) {
        throw "Runaway key";
      }

      if (this.input[this.pos].match("[a-zA-Z0-9_:\\./-]")) {
        this.pos++
      } else {
        return this.input.substring(start, this.pos).toUpperCase();
      }
    }
  }

  this.key_equals_value = function () {
    var key = this.key();
    if (this.tryMatch("=")) {
      this.match("=");
      var val = this.value();
      return [key, val];
    } else {
      throw "... = value expected, equals sign missing:" + this.input.substring(this.pos);
    }
  }

  this.key_value_list = function () {
    var kv = this.key_equals_value();
    this.entries[this.currentEntry][kv[0]] = kv[1];
    while (this.tryMatch(",")) {
      this.match(",");
      // fixes problems with commas at the end of a list
      if (this.tryMatch("}")) {
        break;
      }
      kv = this.key_equals_value();
      this.entries[this.currentEntry][kv[0]] = kv[1];
    }
  }

  this.entry_body = function (d) {
    this.currentEntry = this.key();
    this.entries[this.currentEntry] = { entryType: d.substring(1) };
    this.match(",");
    this.key_value_list();
  }

  this.directive = function () {
    this.match("@");
    return "@" + this.key();
  }

  this.string = function () {
    var kv = this.key_equals_value();
    this.strings[kv[0].toUpperCase()] = kv[1];
  }

  this.preamble = function () {
    this.value();
  }

  this.comment = function () {
    var start = this.pos;
    while (true) {
      if (this.pos == this.input.length) {
        throw "Runaway comment";
      }

      if (this.input[this.pos] != '}') {
        this.pos++
      } else {
        this.comments.push(this.input.substring(start, this.pos));
        return;
      }
    }
  }

  this.entry = function (d) {
    this.entry_body(d);
  }

  this.bibtex = function () {
    while (this.tryMatch("@")) {
      var d = this.directive().toUpperCase();
      this.match("{");
      if (d == "@STRING") {
        this.string();
      } else if (d == "@PREAMBLE") {
        this.preamble();
      } else if (d == "@COMMENT") {
        this.comment();
      } else {
        this.entry(d);
      }
      this.match("}");
    }

    //this.entries['@comments'] = this.comments;
  }
}

function createJSON(key, entry) {
  month_map = {
    "January": 1,
    "February": 2,
    "March": 3,
    "April": 4,
    "May": 5,
    "June": 6,
    "July": 7,
    "August": 8,
    "September": 9,
    "October": 10,
    "November": 11,
    "December": 12
  };
  var jsonEntry = {};
  jsonEntry['title'] = entry['TITLE'];
  jsonEntry['authors'] = entry['AUTHOR'].split(' and ').map(n => (n.split(',')[1].trim()[0]) + ". " + n.split(',')[0]);
  jsonEntry['year'] = entry['YEAR'];
  jsonEntry['month'] = month_map[entry['MONTH'].toLowerCase()];
  // Extract Article Details 
  if (entry['entryType'] == 'ARTICLE') {
    jsonEntry['details'] = entry['JOURNAL'];
    if (entry['VOLUME'])
      jsonEntry['details'] += ', Volume ' + entry['VOLUME'];
    if (entry['ISSUE'])
      jsonEntry['details'] += ', Issue ' + entry['ISSUE'];
    jsonEntry['details'] += ', ' + entry['MONTH'] + ' ' + entry['YEAR'];
  } else {
    jsonEntry['details'] = entry['BOOKTITLE'] + ', ' + entry['MONTH'] + ' ' + entry['YEAR'];
  }
  jsonEntry['details'] += ', Pages ' + entry['PAGES'].replace('--', '-');
  jsonEntry['abstract'] = entry['ABSTRACT'];

  // Infer Publication Type
  if (jsonEntry['details'].toLowerCase().indexOf('workshop on') != -1)
    jsonEntry['ptype'] = "WORKSHOP";
  else
    jsonEntry['ptype'] = entry['entryType'];
  jsonEntry['pdf'] = key.toLowerCase() + '.pdf';
  jsonEntry['bib'] = key.toLowerCase() + '.bib';
  jsonEntry['meta'] = key.toLowerCase() + '.json';
  return jsonEntry;
}



function writeJSON(json, prefix) {
  fs.writeFile(prefix + "/" + json['meta'], JSON.stringify(json), function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Saved file: " + prefix + "/" + json['meta']);
  });
}
//Runs the parser
function doParse(input) {
  var b = new BibtexParser()
  b.setInput(input)
  b.bibtex()
  return b.entries
}
var bibString = fs.readFileSync('src/data/pubs.bib', "UTF-8")
var sample = doParse(bibString);
var count = 1;
for (var i in sample) {

  if (i != "@comments")
    writeJSON(createJSON(i, sample[i]), 'src/data/pub_meta')
}
