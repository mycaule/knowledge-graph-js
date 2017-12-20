import test from 'ava'
import * as knowledge from './duckduckgo'

const verifyOneResult = (query, type, description) => async t => {
  const results = await knowledge.search(query)
  t.true(results.AbstractText.includes(description))

  const top = results.top
  t.true(top.AbstractText.includes(description))
}

test('List of all categories', t => {
  t.true(knowledge.categories.includes('A'))
  t.is(knowledge.categories.length, 5)
})

test('Book', verifyOneResult('The Jungle Book', 'Book', ''))

test('BookSeries', verifyOneResult('Lord of the Rings', 'BookSeries', 'The Lord of the Rings is an epic high fantasy novel written by English author and scholar J. R. R. Tolkien'))

test('EducationalOrganization', verifyOneResult('MIT', 'EducationalOrganization', ''))

test('Event', verifyOneResult('fall of the Berlin wall', 'Event', ''))

test('GovernmentOrganization', verifyOneResult('Indian Space Research Organisation', 'GovernmentOrganization', 'The Indian Space Research Organisation is the space agency of the Government of India headquartered in the city of Bangalore'))

test('LocalBusiness', verifyOneResult('La Tour d\'Argent', 'LocalBusiness', 'La Tour d\'Argent is a historic restaurant in Paris, France'))

test('Movie', verifyOneResult('Casablanca', 'Movie', ''))

test('MovieSeries', verifyOneResult('Indiana Jones', 'MovieSeries', ''))

test('MusicAlbum', verifyOneResult('Good Girl Gone Bad', 'MusicAlbum', ''))

test('MusicGroup', verifyOneResult('The Red Hot Chili Peppers', 'MusicGroup', 'Red Hot Chili Peppers are an American funk rock band formed in Los Angeles in 1983'))

test('MusicRecording', verifyOneResult('Aller plus haut', 'MusicRecording', 'Aller plus haut" is a 1999 song recorded by Australian singer Tina Arena'))

test('Organization', verifyOneResult('Greenpeace', 'Organization', ''))

test('Periodical', verifyOneResult('The New York Times', 'Periodical', 'The New York Times is an American newspaper based in New York City with worldwide influence and readership'))

test('Person', verifyOneResult('Katy Perry', 'Person', 'Katheryn Elizabeth Hudson, known professionally as Katy Perry, is an American singer and songwriter'))

test('Place', verifyOneResult('Madison Square Garden', 'Place', ''))

test('SportsTeam', verifyOneResult('FC Barcelona', 'SportsTeam', 'Futbol Club Barcelona, commonly known as Barcelona and familiarly as Barça, is a professional football club based in Barcelona'))

test('TVEpisode', verifyOneResult('Hard day\'s night', 'TVEpisode', ''))

test('TVSeries', verifyOneResult('Family Guy', 'TVSeries', 'Family Guy is an American animated sitcom created by Seth MacFarlane for the Fox Broadcasting Company'))

test('VideoGame', verifyOneResult('Street Fighter II', 'VideoGame', 'Street Fighter II: The World Warrior is a competitive fighting game originally released for the arcades in'))

test('VideoGameSeries', verifyOneResult('Super Mario Bros.', 'VideoGameSeries', 'Super Mario Bros. is a platform video game developed and published by Nintendo'))

test('WebSite', verifyOneResult('Twitch', 'WebSite', ''))
