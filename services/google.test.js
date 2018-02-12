import test from 'ava'
import * as knowledge from './google'

const verifyOneResult = (query, type, description) => async t => {
  const results = await knowledge.search(query, type)
  const top = results.top

  t.is(top.result.description, description)
  t.true(top.result['@type'].includes(type))
  t.true(top.resultScore > 50)
}

test('List of all entities', t => {
  t.true(knowledge.entities.includes('Book'))
  t.is(knowledge.entities.length, 21)
})

test('Book', verifyOneResult('The Jungle Book', 'Book', '1967 film'))

test('BookSeries', verifyOneResult('Lord of the Rings', 'BookSeries', 'Literary series'))

test('EducationalOrganization', verifyOneResult('MIT', 'EducationalOrganization', 'Private university in Cambridge, Massachusetts'))

test('Event', verifyOneResult('fall of the Berlin wall', 'Event', 'Event'))

test('GovernmentOrganization', verifyOneResult('Indian Space Research Organisation', 'GovernmentOrganization', 'Development and research. company'))

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

test('SportsTeam', verifyOneResult('FC Barcelona', 'SportsTeam', 'Soccer club'))

test('TVEpisode', verifyOneResult('Hard day\'s night', 'TVEpisode', 'Television episode'))

test('TVSeries', verifyOneResult('Family Guy', 'TVSeries', 'American sitcom'))

test('VideoGame', verifyOneResult('Street Fighter II', 'VideoGame', 'Arcade game'))

test('VideoGameSeries', verifyOneResult('Super Mario Bros.', 'VideoGameSeries', 'Video game series'))

test('WebSite', verifyOneResult('Twitch', 'WebSite', 'Website'))

test('404', async t => {
  const error = await t.throws(knowledge.search('', 'WebSite'))
  t.is(error.message, 'Request failed with status code 400')
})
