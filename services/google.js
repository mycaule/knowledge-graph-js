/* eslint import-x/no-unresolved: [2, {ignore: ['\.config.js$']}] -- ./config is an optional, git-ignored credentials file */
/* eslint import-x/no-unassigned-import: "off" -- ./config is required for its side effect of setting env vars */
/* eslint new-cap: "off" -- superstruct validators are PascalCase but called as functions */

const S = require('superstruct')
const isUrl = require('is-url')

const entities = ['Book', 'BookSeries', 'EducationalOrganization', 'Event', 'GovernmentOrganization', 'LocalBusiness', 'Movie', 'MovieSeries', 'MusicAlbum', 'MusicGroup', 'MusicRecording', 'Organization', 'Periodical', 'Person', 'Place', 'SportsTeam', 'TVEpisode', 'TVSeries', 'VideoGame', 'VideoGameSeries', 'WebSite']

const struct = S.superstruct({
  types: {
    url: isUrl,
    EntitySearchResult: v => v === 'EntitySearchResult',
    ItemList: v => v === 'ItemList'
  }
})

const EntitySearchResult = struct({
  '@type': 'EntitySearchResult',
  result: {
    '@id': 'string',
    name: 'string',
    '@type': ['string'],
    description: 'string',
    detailedDescription: struct.optional({
      articleBody: 'string',
      url: 'url',
      license: 'string'
    }),
    image: struct.optional({
      contentUrl: 'string',
      url: 'url'
    }),
    url: 'url?'
  },
  resultScore: 'number'
})

const ItemList = struct({
  '@context': 'object',
  '@type': 'ItemList',
  itemListElement: [EntitySearchResult]
})

const RequestParameters = struct({
  query: 'string',
  limit: 'number',
  indent: 'boolean',
  types: struct.optional(struct.enum(entities)),
  key: 'string'
})

try {
  require('./config')
} catch {
  if (process.env.GOOGLE_API_KEY === undefined) {
    throw new Error('You must set GOOGLE_API_KEY in your environment variables')
  }
}

const axios = require('axios').create({
  baseURL: 'https://kgsearch.googleapis.com/v1',
  timeout: 2000
})

const search = (query, types, limit = 1, indent = true) => axios.get('/entities:search', {
  params: RequestParameters({query, limit, indent, types, key: process.env.GOOGLE_API_KEY})
}).then(resp => {
  const itemList = ItemList(resp.data)
  const top = (itemList && itemList.itemListElement.length > 0) ? EntitySearchResult(itemList.itemListElement[0]) : {}
  return {...itemList, top}
})

module.exports = {search, entities}
