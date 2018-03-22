// Please make sure to set process.env.GOOGLE_API_KEY = 'XXxxXxXxxXXxxXXXXXxXXXXXXxXXXXXXXXXXXXX'

const natural = require('natural')
const knowledge = require('..')

const tokenizer = new natural.WordTokenizer()

knowledge.search('nelson mandela').then(res => {
  const topResult = res.itemListElement[0].result
  const {description, detailedDescription} = topResult
  console.log(topResult)
  console.log(description)

  natural.PorterStemmer.attach()
  console.log(tokenizer.tokenize(description))
  console.log(description.tokenizeAndStem())
  console.log(tokenizer.tokenize(detailedDescription.articleBody))
  console.log(detailedDescription.articleBody.tokenizeAndStem())
})
