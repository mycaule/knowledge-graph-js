<p align="center">
	<img width="250" src="https://www.staedtler.fr/fr/mandala-creator/assets/elements/jess_meleragni_10.svg" alt="Knowledge graph">
</p>
<p align="center">
  Yet another client for Google Knowledge Graph and DuckDuckGo Instant Answer API
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

This library is a client to lookup search providers for short answers:
- providers are [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/) and [DuckDuckGo Instant Answer API](https://duckduckgo.com/api),
- the library uses ES6 promises allowing `then / catch` and `async / await` syntax.
- API contracts are checked with [superstruct](https://github.com/ianstormtaylor/superstruct)
- the library is tested out recurrently on a dataset using [ava](https://github.com/avajs/ava) and [Travis CI](http://travis-ci.org/mycaule/knowledge-graph-js)

##  Usage

In *Google Cloud Platform*, make sure to [activate *Knowledge Graph Search API*](https://developers.google.com/knowledge-graph/prereqs) and load your `GOOGLE_API_KEY` into `process.env`.

See [the samples folder](/samples) for more usecases.

### Running with Node.js

#### Basic example

```javascript
const knowledge = require('knowledge-graph-js')

// Search using only a query
knowledge.search('katy perry')

// Search specifying the entity type
knowledge.search('Madison Square Garden', 'Place')

// List of available graph entities
knowledge.entities
```

```bash
$ node samples/quickstart.js
```
```javascript
knowledge.search('katy perry').then(res => {
  console.log(res.top)
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

knowledge.search('nelson mandela').then(res => {
  const {description, detailedDescription} = res.top
  console.log(res.top)
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

## Contributions

[Changes and improvements](https://github.com/mycaule/knowledge-graph-js/wiki) are welcome! Feel free to fork and open a pull request into `master`.

### Roadmap

- [x] Investigate [DuckDuckGo Instant Answer API](https://duckduckgo.com/api)
- [ ] Investigate [Wolfram Short Answers API](https://products.wolframalpha.com/short-answers-api/documentation/) : [lib1](https://www.npmjs.com/package/node-wolfram-api), [lib2](https://www.npmjs.com/package/wolfram-alpha)

### Running the tests

You can lint the code and run all unit tests using that script.
```bash
npm test
```

### Publishing
```bash
npm version [patch, minor, major]
npm publish
```

### License
`knowledge-graph-js` is licensed under the [Apache 2.0 License](https://github.com/mycaule/knowledge-graph-js/blob/master/LICENSE).

## References

* [Knowledge Graph Search API documentation](https://developers.google.com/knowledge-graph/)
* [DuckDuckGo Instant Answer API](https://duckduckgo.com/api)
* [Sofia Martins - knowledge-node package](https://www.npmjs.com/package/knowledge-node)
* [Franck Ledoux - node-duckduckgo package](https://github.com/franckLdx/node-duckduckgo)
* [Nicole He - Voice Technology is an Opportunity to Make Weird Stuff](https://medium.com/@nicolehe/voice-technology-is-an-opportunity-to-make-weird-stuff-d4296ce7448a), check also the [source code](https://github.com/googlecreativelab/mystery-animal/blob/master/functions/modules/KnowledgeGraphQuery.js)
