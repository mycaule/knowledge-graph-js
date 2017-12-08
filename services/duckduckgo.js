module.exports = 'hello'

const axios = require('axios').create({
  baseURL: 'https://api.duckduckgo.com',
  timeout: 2000
})

const search = (q, format = 'json', pretty = '0', t = 'nameofapp') => {
  return axios.get(`/?q=${q}`, {
    params: {q, format, pretty, t}
  }).then(resp => {
    const data = resp.data
    return Object.assign({}, data)
  })
}

module.exports = {search}
