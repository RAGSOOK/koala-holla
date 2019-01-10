const express = require('express');
const koalaRouter = express.Router();
const pg = require('pg');

const Pool = pg.Pool;
// DB CONNECTION
const pool = new Pool ({
    database: 'koalas',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 10000
});

// GET
router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "koalas" ORDER BY "rating" DESC LIMIT 100;`;
    pool.query(queryText).then((result) => {
        //console.log(result);
        res.send(result.rows);
    }).catch((error) => {
      console.log(`error in get koalas ${error}`) 
      res.send() 
    });
});


// POST


// PUT


// DELETE

module.exports = koalaRouter;