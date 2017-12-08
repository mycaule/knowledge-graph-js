/* eslint no-unused-vars: "off" */
/* eslint new-cap: "off" */

const S = require('superstruct')

const SearchResult = S.struct({
  Abstract: 'string',
  AbstractText: 'string',
  AbstractSource: 'string',
  AbstractURL: 'string',
  Image: 'string',
  ImageIsLogo: 'string | number',
  ImageHeight: 'string | number',
  ImageWidth: 'string | number',
  Heading: 'string',
  Entity: 'string',
  Infobox: 'string | object',
  meta: 'object | null',
  Answer: 'string',
  Redirect: 'string',
  AnswerType: 'string',
  Definition: 'string',
  DefinitionSource: 'string',
  DefinitionURL: 'string',
  RelatedTopics: ['object'],
  Results: ['object'],
  Type: 'string'
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
    return Object.assign({}, data)
  })
}

module.exports = {search, categories}
