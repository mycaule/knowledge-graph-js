const knowledge = require('../index')

knowledge.search('katy perry').then(res =>
  console.log(JSON.stringify(res))
)
