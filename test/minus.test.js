var assert = require('assert');
const axios = require('axios');

describe('Minus', function() {
    it('Should subtract 1 from 1 and return 0', async function() {
        const res = await axios('http://localhost:3000/minus?arg1=1&arg2=1');
        assert.strictEqual(res.data.result, 0);
    });

    it('Should subtract 1 from 2 and return -1', async function() {
        const res = await axios('http://localhost:3000/minus?arg1=1&arg2=2');
        assert.strictEqual(res.data.result, -1);
    });

    it('Should subtract 151545155 from 155484212 and return -1539402729', async function() {
        const res = await axios('http://localhost:3000/minus?arg1=151545155&arg2=155484212');
        assert.strictEqual(res.data.result, -3939057);
    })

    it('Should respond with error code 400', async function() {
        await axios('http://localhost:3000/minus?arg1=to&arg2=to')
            .catch(reason => assert.strictEqual(reason.response.status, 400));
    });
});