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
koalaRouter.get('/', (req, res) => {
    let queryText = `SELECT * FROM "koalas" ORDER BY "" DESC LIMIT 100;`;
    pool.query(queryText).then((result) => {
        //console.log(result);
        res.send(result.rows);
    }).catch((error) => {
      console.log(`error in get koalas ${error}`) 
      res.send() 
    });
});
koalaRouter.put('/transferY/:id', (req, res) => {
    const queryText = `UPDATE "koalas" SET "ready_to_transfer" = 'True' "WHERE "id" = $1;`
    pool.query(queryText, [req.params.id]).then((result) => {
        res.sendStatus(200);
});
});

// POST
router.post('/', (req, res) => {
    console.log(`In /koalas POST with`, req.body);
    const koalaNew = req.body;
    const queryText = `INSERT INTO "koalas" ("name", "gender", "age", "ready_to_transfer", "notes")
                       VALUES ($1, $2, $3, $4, $5);`;
    pool.query(queryText, [koalaNew.name, koalaNew.gender, koalaNew.age, koalaNew.readyToTransfer, koalaNew.notes])
        .then((responseFromDatabase) => {
            //console.log(responseFromDatabase);
            res.sendStatus(201);
        }).catch((error) => {
            console.log(`Error in POST /artist ${error}`);
            res.sendStatus(500);
        });

// PUT
    });

// DELETE

module.exports = koalaRouter;