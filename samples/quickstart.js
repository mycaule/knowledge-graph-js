// Please make sure to set process.env.GOOGLE_API_KEY = 'XXxxXxXxxXXxxXXXXXxXXXXXXxXXXXXXXXXXXXX'

const knowledge = require('../index')

knowledge.search('katy perry').then(res => {
  console.log(res.top)
})
