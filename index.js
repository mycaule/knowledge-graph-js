/* eslint import/no-unresolved: [2, { ignore: ['\.config.js$'] }] */
/* eslint import/no-unassigned-import: "off" */
/* eslint new-cap: "off" */

const superstruct = require('superstruct')

const Result = superstruct.struct({
  '@type': 'string',
  result: {
    '@id': 'string',
    name: 'string',
    '@type': ['string'],
    description: 'string',
    detailedDescription: 'object?',
    image: 'object?',
    url: 'string?'
  },
  resultScore: 'number'
})

try {
  require('./config')
} catch (err) {
  console.log('Using environment parameters')
}

const axios = require('axios').create({
  baseURL: 'https://kgsearch.googleapis.com/v1',
  timeout: 2000
})

const search = (query, types) => {
  return axios.get('/entities:search', {
    params: {
      query,
      key: process.env.GOOGLE_API_KEY,
      limit: 1,
      indent: true,
      types
    }
  }).then(resp => {
    const top = (resp.data && resp.data.itemListElement.length) ? Result(resp.data.itemListElement[0]) : {}
    return Object.assign({}, resp.data, {top})
  })
}

module.exports = {search}
