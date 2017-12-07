/* eslint import/no-unresolved: [2, { ignore: ['\.config.js$'] }] */
/* eslint import/no-unassigned-import: "off" */

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
  }).then(resp => resp.data)
}

module.exports = {search}
