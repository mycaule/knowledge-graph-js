// Please make sure to set process.env.GOOGLE_API_KEY = 'XXxxXxXxxXXxxXXXXXxXXXXXXxXXXXXXXXXXXXX'
// // Please make sure to set process.env.WOLFRAM_APP_ID = 'XXxxXxXxxXXxxXXXXXxXXXXXXxXXXXXXXXXXXXX'

const patriarchy = require('patriarchy')
const knowledge = require('..')

knowledge.google.search('katy perry').then(response => {
  console.log(patriarchy(response.top))
})

knowledge.duckduckgo.search('katy perry').then(response => {
  console.log(patriarchy(response.top))
})

knowledge.wolfram.search('katy perry').then(response => {
  console.log(response)
})
