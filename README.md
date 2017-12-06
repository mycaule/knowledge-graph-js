<p align="center">
	<img width="250" src="https://www.staedtler.fr/fr/mandala-creator/assets/elements/jess_meleragni_10.svg" alt="Knowledge graph">
</p>
<p align="center">
  Yet another client for Google Knowledge Graph API
</p>

<p align="center">
  <a href="http://travis-ci.org/mycaule/knowledge-graph-js"><img src="https://api.travis-ci.org/mycaule/knowledge-graph-js.svg?branch=master" alt="Build Status"></a>
  <a href="https://david-dm.org/mycaule/knowledge-graph-js"><img src="https://david-dm.org/mycaule/knowledge-graph-js/status.svg" alt="dependencies Status"></a>
  <a href="https://david-dm.org/mycaule/knowledge-graph-js?type=dev"><img src="https://david-dm.org/mycaule/knowledge-graph-js/dev-status.svg" alt="devDependencies Status"></a>
	<br>
	<a href="https://www.npmjs.com/package/knowledge-graph-js"><img src="https://img.shields.io/npm/v/knowledge-graph-js.svg" alt="npm package"></a>
	<a href="https://www.npmjs.com/package/knowledge-graph-js"><img src="https://img.shields.io/npm/dw/knowledge-graph-js.svg" alt="npm package"></a>
	<a href="https://www.npmjs.com/package/knowledge-graph-js"><img src="https://img.shields.io/npm/l/knowledge-graph-js.svg" alt="npm package"></a>
  <br>
  <br>
</p>

This library allows user to query Google [Knowledge Graph Search API](https://developers.google.com/knowledge-graph/) using ES6 promises.

##  Usage

In Google Cloud Platform, make sure to activate *KnowledgeGraph Search API* and load your `GOOGLE_API_KEY` into `process.env`.

See [the samples folder](/samples) for more usecases.

### Running with Node.js

#### Basic example
```bash
$ node samples/quickstart.js
```
```javascript
const knowledge = require('../index')

knowledge.search('katy perry').then(res =>
  console.log(JSON.stringify(res))
)

//
{"@context":{"@vocab":"http://schema.org/","goog":"http://schema.googleapis.com/","EntitySearchResult":"goog:EntitySearchResult","detailedDes
cription":"goog:detailedDescription","resultScore":"goog:resultScore","kg":"http://g.co/kg"},"@type":"ItemList","itemListElement":[{"@type":"
EntitySearchResult","result":{"@id":"kg:/m/03y82t6","name":"Katy Perry","@type":["Person","Thing"],"description":"American singer-songwriter"
,"image":{"contentUrl":"http://t3.gstatic.com/images?q=tbn:ANd9GcQrlKFmaiEtUImNiuD_pqzHPjDcjF4yaRThSFMh-rYuB8snFUfk","url":"https://en.wikipe
dia.org/wiki/Katy_Perry"},"detailedDescription":{"articleBody":"Katheryn Elizabeth Hudson, known professionally as Katy Perry, is an American
 singer and songwriter. After singing in church during her childhood, she pursued a career in gospel music as a teenager. ","url":"https://en
.wikipedia.org/wiki/Katy_Perry","license":"https://en.wikipedia.org/wiki/Wikipedia:Text_of_Creative_Commons_Attribution-ShareAlike_3.0_Unport
ed_License"},"url":"http://www.katyperry.com/"},"resultScore":840.985046}]}
```

## References
- https://github.com/krismuniz/google-kgsearch
- https://www.npmjs.com/package/knowledge-node
- https://github.com/googlecreativelab/mystery-animal/blob/master/functions/modules/KnowledgeGraphQuery.js
- https://www.npmjs.com/package/archy
- https://medium.com/@nicolehe/voice-technology-is-an-opportunity-to-make-weird-stuff-d4296ce7448a

- https://github.com/lukewendling/ddg-api
- https://www.npmjs.com/package/ducksay-instant

- https://www.npmjs.com/package/node-wolfram-api
- https://www.npmjs.com/package/wolfram-alpha
