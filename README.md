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

This library is a client for Google [Knowledge Graph Search API](https://developers.google.com/knowledge-graph/) using ES6 promises allowing `then / catch` and `async / await` syntax.

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

knowledge.search('katy perry').then(res => {
  const topResult = res.itemListElement[0]
  console.log(topResult)
})

/*
{ '@id': 'kg:/m/03y82t6',
  name: 'Katy Perry',
  '@type': [ 'Person', 'Thing' ],
  description: 'American singer-songwriter',
  image:

   { contentUrl: 'http://t3.gstatic.com/images?q=tbn:ANd9GcQrlKFmaiEtUImNiuD_pqzHPjDcjF4yaRThSFMh-rYuB8snFUfk',
     url: 'https://en.wikipedia.org/wiki/Katy_Perry' },
  detailedDescription:
   { articleBody: 'Katheryn Elizabeth Hudson, known professionally as Katy Perry, is an American singer and songwriter. After singing in church during her childhood, she pursued a career in
gospel music as a teenager. ',
     url: 'https://en.wikipedia.org/wiki/Katy_Perry',
     license: 'https://en.wikipedia.org/wiki/Wikipedia:Text_of_Creative_Commons_Attribution-ShareAlike_3.0_Unported_License' },
  url: 'http://www.katyperry.com/' }
*/
```

#### Keywords stemming
```bash
$ node samples/keywords.js
```
```javascript
const natural = require('natural')
const knowledge = require('../index')

knowledge.search('nelson mandela').then(res => {
  const topResult = res.itemListElement[0].result
  const {description, detailedDescription} = topResult
  console.log(topResult)
  console.log(description)

  natural.PorterStemmer.attach()
  console.log(description.tokenizeAndStem())
  console.log(detailedDescription.articleBody.tokenizeAndStem())
})

/*
{ '@id': 'kg:/m/05g7q',
  name: 'Nelson Mandela',
  '@type': [ 'Person', 'Thing' ],
  description: 'Former President of South Africa',
  image:
   { contentUrl: 'http://t1.gstatic.com/images?q=tbn:ANd9GcTFuD6oHFEztHdeTZTBHMQK-HHe1WKUeTzT0blYtptSvVlaOvRc',
     url: 'https://commons.wikimedia.org/wiki/File:Nelson-Mandela-with-congressman-Engel.png' },
  detailedDescription:
   { articleBody: 'Nelson Rolihlahla Mandela was a South African anti-apartheid revolutionary, political leader, and philanthropist, who served as President of South Africa from 1994 to 1999
. ',

     url: 'https://en.wikipedia.org/wiki/Nelson_Mandela',
     license: 'https://en.wikipedia.org/wiki/Wikipedia:Text_of_Creative_Commons_Attribution-ShareAlike_3.0_Unported_License' },
  url: 'http://www.nelsonmandela.org/' }

[ 'former', 'presid', 'south', 'africa' ]
[ 'nelson', 'rolihlahla', 'mandela', 'south', 'african', 'anti', 'apartheid', 'revolutionari', 'polit', 'leader', 'philanthropist', 'serv', 'presid', 'south', 'africa', '1994', '1999' ]
*/
```

## References
- https://www.npmjs.com/package/knowledge-node
- https://github.com/googlecreativelab/mystery-animal/blob/master/functions/modules/KnowledgeGraphQuery.js
- https://www.npmjs.com/package/archy
- https://medium.com/@nicolehe/voice-technology-is-an-opportunity-to-make-weird-stuff-d4296ce7448a

- https://github.com/lukewendling/ddg-api
- https://www.npmjs.com/package/ducksay-instant

- https://www.npmjs.com/package/node-wolfram-api
- https://www.npmjs.com/package/wolfram-alpha
