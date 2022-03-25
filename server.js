const express = require('express');
const app = express();

const { Pool } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'postgres',
  database: 'postgres_db',
  password: 'password',
  port: 5432,
})

const port = process.env.PORT || 5500;

// Serve static files
app.use(express.static(__dirname + '/public'));

app.get('/users', async(req, res) => {
  const { rows } = await pool.query('select * from users')
  res.send(rows)
});

// Serve your app
console.log('Served: http://localhost:' + port);
app.listen(port);
