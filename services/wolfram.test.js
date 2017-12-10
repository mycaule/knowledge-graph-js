import test from 'ava'
import * as knowledge from './wolfram'

test('Wolfram Short Answers', async t => {
  const resultMetric = await knowledge.search('How far is Los Angeles from New York?')
  const resultImperial = await knowledge.search('How far is Los Angeles from New York?', 'imperial')

  t.is(resultMetric, '3966 kilometers')
  t.is(resultImperial, '2464 miles')
})
