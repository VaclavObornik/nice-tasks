'use strict';

const supertest = require('supertest');
const assert = require('assert');
const fs = require('fs');

const server = require('../server');


const api = supertest(server);

describe('server', function () {

    it('should serve index.html file on root path', async () => {
        const { text: response } = await api.get('/')
            .expect(200);

        assert.equal(response, fs.readFileSync(`${__dirname}/../client/index.html`));
    });

});
