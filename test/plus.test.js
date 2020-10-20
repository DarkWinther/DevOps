var assert = require('assert');
const axios = require('axios');

describe('Plus',function() {
    it('Should add 1 to 1 and return 2', async function() {
        const res = await axios('http://localhost:3000/plus?arg1=1&arg2=1');
        assert.strictEqual(res.data.result, 2);
    });

    it('Should add 2 to 2 and return 4', async function() {
        const res = await axios('http://localhost:3000/plus?arg1=2&arg2=2');
        assert.strictEqual(res.data.result, 4);
    });

    it('Should add 1557857484 to 18454755 and return 1576312239', async function() {
        const res = await axios('http://localhost:3000/plus?arg1=1557857484&arg2=18454755');
        assert.strictEqual(res.data.result, 1576312239);
    });

    it('Should respond with error code 400', async function() {
        const res = await axios('http://localhost:3000/plus?arg1=to&arg2=to')
        .catch(reason => assert.strictEqual(reason.response.status, 400));
    });
});