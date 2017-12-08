import test from 'ava'

const knowledge = require('./duckduckgo')

test('DDG', async t => {
  const results = await knowledge.search('Naturo')
  console.log(JSON.stringify(results, null, 2))
  t.true(true)
})
