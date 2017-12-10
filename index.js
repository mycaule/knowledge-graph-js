const google = require('./services/google')
const duckduckgo = require('./services/duckduckgo')
const wolfram = require('./services/wolfram')

module.exports = {
  search: google.search,
  entities: google.entities,
  google,
  duckduckgo,
  wolfram
}
