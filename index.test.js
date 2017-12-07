import test from 'ava'

const knowledge = require('./index')

const verifyOneResult = (query, type, description, debug) => async t => {
  const results = await knowledge.search(query, type)
  t.is(typeof results['@context'], 'object')
  t.is(results['@type'], 'ItemList')
  t.is(typeof results.itemListElement, 'object')

  const topResult = results.itemListElement[0]
  if (debug) {
    console.log(topResult)
  }
  t.is(topResult['@type'], 'EntitySearchResult')
  t.is(typeof topResult.result, 'object')
  t.is(topResult.result.description, description)
  t.true(topResult.result['@type'].includes(type))
  t.true(topResult.resultScore > 50)
}

test('Book', verifyOneResult('The Jungle Book', 'Book', '1967 film'))

test('BookSeries', verifyOneResult('Lord of the Rings', 'BookSeries', 'Book series'))

test('EducationalOrganization', verifyOneResult('MIT', 'EducationalOrganization', 'Private university in Cambridge, Massachusetts'))

test('Event', verifyOneResult('fall of the Berlin wall', 'Event', 'Event'))

test('GovernmentOrganization', verifyOneResult('Indian Space Research Organisation', 'GovernmentOrganization', 'Research and development company'))

test('LocalBusiness', verifyOneResult('La Tour d\'Argent', 'LocalBusiness', 'French restaurant in Paris, France'))

test('Movie', verifyOneResult('Casablanca', 'Movie', '1942 film'))

test('MovieSeries', verifyOneResult('Indiana Jones', 'MovieSeries', 'Film series'))

test('MusicAlbum', verifyOneResult('Good Girl Gone Bad', 'MusicAlbum', 'Studio album by Rihanna'))

test('MusicGroup', verifyOneResult('The Red Hot Chili Peppers', 'MusicGroup', 'Rock band'))

test('MusicRecording', verifyOneResult('Aller plus haut', 'MusicRecording', 'Song by Tina Arena'))

test('Organization', verifyOneResult('Greenpeace', 'Organization', 'Non-governmental organization'))

test('Periodical', verifyOneResult('The New York Times', 'Periodical', 'Magazine'))

test('Person', verifyOneResult('Katy Perry', 'Person', 'American singer-songwriter'))

test('Place', verifyOneResult('Madison Square Garden', 'Place', 'Arena in New York City, New York'))

test('SportsTeam', verifyOneResult('FC Barcelona', 'SportsTeam', 'Soccer team'))

test('TVEpisode', verifyOneResult('Hard day\'s night', 'TVEpisode', 'Television episode'))

test('TVSeries', verifyOneResult('Family Guy', 'TVSeries', 'American sitcom'))

test('VideoGame', verifyOneResult('Street Fighter II', 'VideoGame', 'Arcade game'))

test('VideoGameSeries', verifyOneResult('Super Mario Bros.', 'VideoGameSeries', 'Video game series'))

// Test('Website', verifyOneResult('Amazon', 'Website', 'Video game series'))
