'use strict';

const Koa = require('koa');
const app = new Koa();
const path = require('path');
let koaStatic = require('koa-static');

app.use(koaStatic(path.join(__dirname, '../client')));

const port = process.env.PORT || 3033;

const server = app.listen(port, (err) => {
    if (err) {
        throw err;
    }
    console.log(`Server is up and listening on port ${port}`);
});

module.exports = server;
