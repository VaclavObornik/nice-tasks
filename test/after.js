'use strict';

const server = require('../server');
const { after } = require('mocha');

after(() => {
    server.close();
});
