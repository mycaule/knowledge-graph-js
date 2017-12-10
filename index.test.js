import test from 'ava'
import * as knowledge from './index'

const verifyOneResult = (engine, query, type, description) => async t => {
  const results = await engine.search(query, type)
  t.is(typeof results['@context'], 'object')
  t.is(results['@type'], 'ItemList')
  t.is(typeof results.itemListElement, 'object')

  const top = results.top
  t.is(top['@type'], 'EntitySearchResult')
  t.is(typeof top.result, 'object')
  t.is(top.result.description, description)
  t.true(top.result['@type'].includes(type))
  t.true(top.resultScore > 50)
}

test('List of all entities', t => {
  t.true(knowledge.entities.includes('Book'))
  t.is(knowledge.entities.length, 21)
})

test('Supports Google by default', verifyOneResult(knowledge, 'The Old Man and the Sea', 'Book', 'Novel by Ernest Hemingway'))

test('Supports Google', verifyOneResult(knowledge.google, 'The Catcher in the Rye', 'Book', 'Novel by J. D. Salinger'))
