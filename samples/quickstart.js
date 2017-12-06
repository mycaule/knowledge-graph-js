// Process.env.GOOGLE_API_KEY = 'XXxxXxXxxXXxxXXXXXxXXXXXXxXXXXXXXXXXXXX'

const knowledge = require('../index')

knowledge.search('katy perry').then(res => {
  const topResult = res.itemListElement[0].result
  console.log(topResult)
})
