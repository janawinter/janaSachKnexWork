var development = require('./knexfile').development
var knex = require('knex')(development)

knex('users')
.insert({
  name: "Cat",
  description: "supreme creature"
})

.then(console.log)
.catch(console.error)
