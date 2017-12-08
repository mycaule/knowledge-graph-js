/* eslint no-unused-vars: "off" */
/* eslint new-cap: "off" */
/* eslint camelcase: "off" */

const S = require('superstruct')
const isUrl = require('is-url')

const struct = S.superstruct({
  types: {
    url: isUrl,
    empty: v => v === ''
  }
})

const ResultElement = struct({
  Text: 'string',
  Icon: {
    Width: 'empty | number',
    Height: 'empty | number',
    URL: 'empty | url'
  },
  FirstURL: 'url',
  Result: 'string'
})

const ResultElementDeep = struct({
  Name: 'string',
  Topics: [ResultElement]
})

const Infobox = struct({
  content: [struct({
    data_type: 'string',
    wiki_order: 'number',
    label: 'string',
    value: 'string'
  })],
  meta: [struct({
    label: 'string',
    value: 'string',
    data_type: 'string'
  })]
})

const SearchResult = struct({
  Abstract: 'string',
  AbstractText: 'string',
  AbstractSource: 'string',
  AbstractURL: 'string',
  Image: 'string',
  ImageIsLogo: 'empty | number',
  ImageHeight: 'empty | number',
  ImageWidth: 'empty | number',
  Heading: 'string',
  Entity: 'string',
  Infobox: 'empty | object',
  meta: 'object | null',
  Answer: 'string',
  Redirect: 'string',
  AnswerType: 'string',
  Definition: 'string',
  DefinitionSource: 'string',
  DefinitionURL: 'string',
  RelatedTopics: [struct.union([ResultElement, ResultElementDeep])],
  Results: [ResultElement],
  Type: 'string'
})

const TopResult = struct({
  AbstractText: 'string',
  Abstract: 'string',
  Results: [ResultElement],
  Image: 'string'
})

const axios = require('axios').create({
  baseURL: 'https://api.duckduckgo.com',
  timeout: 2000
})

const categories = ['A', 'D', 'C', 'N', 'E']

const search = (q, format = 'json', pretty = '0') => {
  return axios.get(`/?q=${q}`, {
    params: {q, format, pretty}
  }).then(resp => {
    const data = SearchResult(resp.data)
    const {AbstractText, Abstract, Results, Image} = data
    const top = TopResult({AbstractText, Abstract, Results, Image})
    return Object.assign({}, data, {top})
  })
}

module.exports = {search, categories}
