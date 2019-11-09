const { Pool } = require('pg')
const pool = new Pool({
  host: 'localhost',
  database: 'songs',
  port: 5432,
})

pool.on('error', (err) => {
  console.log(err)
})

pool.connect()
module.exports = pool;


