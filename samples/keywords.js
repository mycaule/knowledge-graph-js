const natural = require('natural')
const knowledge = require('../index')

knowledge.search('nelson mandela').then(res => {
  const topResult = res.itemListElement[0].result
  const {description, detailedDescription} = topResult
  console.log(topResult)
  console.log(description)

  natural.PorterStemmer.attach()
  console.log(description.tokenizeAndStem())
  console.log(detailedDescription.articleBody.tokenizeAndStem())
})
