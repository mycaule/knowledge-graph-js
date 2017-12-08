const google = require('./services/google')
const duckduckgo = require('./services/duckduckgo')

module.exports = {
  search: google.search,
  entities: google.entities,
  google: {
    search: google.search,
    entities: google.entities
  },
  duckduckgo: {
    search: duckduckgo.search
  }
}
