'use strict';

const Koa = require('koa');
const app = new Koa();
const path = require('path');
let koaStatic = require('koa-static');

app.use(koaStatic(path.join(__dirname, '../client')));

const server = app.listen(process.env.PORT || 3033);

module.exports = server;
