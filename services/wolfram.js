/* eslint import-x/no-unresolved: [2, {ignore: ['\.config.js$']}] -- ./config is an optional, git-ignored credentials file */
/* eslint import-x/no-unassigned-import: "off" -- ./config is required for its side effect of setting env vars */

try {
  require('./config')
} catch {
  if (process.env.WOLFRAM_APP_ID === undefined) {
    throw new Error('You must set WOLFRAM_APP_ID in your environment variables')
  }
}

const TIMEOUT = 5

const axios = require('axios').create({
  baseURL: 'https://api.wolframalpha.com/v1',
  timeout: TIMEOUT * 1000
})

const search = (query, units = 'metric') => axios.get('/result', {
  params: {i: query, timeout: TIMEOUT, units, appid: process.env.WOLFRAM_APP_ID}
}).then(resp => resp.data)

module.exports = {search}
