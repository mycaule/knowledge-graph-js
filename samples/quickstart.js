// Please make sure to set process.env.GOOGLE_API_KEY = 'XXxxXxXxxXXxxXXXXXxXXXXXXxXXXXXXXXXXXXX'

const patriarchy = require('patriarchy')
const knowledge = require('..')

knowledge.search('katy perry').then(response => {
  console.log(patriarchy(response.top))
})
