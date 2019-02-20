const level = require('level')
const sublevel = require('level-sublevel')


// function create instance of db --> Factory
module.exports = dbName => {
  return sublevel(
    level(dbName, { valueEncoding: 'json' })
  )
}

