import test from 'ava'

const knowledge = require('./index')

test('Knowledge Graph Search API', async t => {
  const results = await knowledge.search('katy perry')
  t.is(typeof results['@context'], 'object')
  t.is(results['@type'], 'ItemList')
  t.is(typeof results.itemListElement, 'object')

  const topResult = results.itemListElement[0]
  t.is(topResult['@type'], 'EntitySearchResult')
  t.is(typeof topResult.result, 'object')
  t.is(topResult.result.description, 'American singer-songwriter')
  t.true(topResult.result['@type'].includes('Person'))
  t.true(topResult.resultScore > 100)
})
