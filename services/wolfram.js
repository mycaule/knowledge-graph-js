/* eslint import/no-unresolved: [2, { ignore: ['\.config.js$'] }] */
/* eslint import/no-unassigned-import: "off" */
/* eslint new-cap: "off" */

try {
  require('./config')
} catch (err) {
  if (process.env.WOLFRAM_APP_ID === undefined) {
    throw new Error('You must set WOLFRAM_APP_ID in your environment variables')
  }
}

const TIMEOUT = 5

const axios = require('axios').create({
  baseURL: 'https://api.wolframalpha.com/v1',
  timeout: TIMEOUT * 1000
})

const search = (query, units = 'metric') => {
  return axios.get('/result', {
    params: {i: query, timeout: TIMEOUT, units, appid: process.env.WOLFRAM_APP_ID}
  }).then(resp => {
    return resp.data
  })
}

module.exports = {search}
