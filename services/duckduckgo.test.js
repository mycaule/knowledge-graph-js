import test from 'ava'

const knowledge = require('./duckduckgo')

test('DDG', async t => {
  const results = await knowledge.search('Katy Perry')
  console.log(JSON.stringify(results, null, 2))
  t.true(true)
})
