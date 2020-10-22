const http = require('http');

describe('Minus', function() {
    it('Should subtract 1 from 1 and return 0', async function() {
        return await new Promise((resolve, reject) => {
            const req = http.request('http://localhost:3000/minus?arg1=1&arg2=1', res => {
                res.on('data', d => {
                    try {
                        const { result } = JSON.parse(d);
                        if (result === 0) {
                            resolve({ result });
                        } else {
                            reject({ result });
                        }
                    } catch (error) {
                        reject(error);
                    }
                });
            });

            req.on('error', err => {
                reject(err);
            });
            req.end();
        });
    });

    it('Should subtract 1 from 2 and return -1', async function() {
        return await new Promise((resolve, reject) => {
            const req = http.request('http://localhost:3000/minus?arg1=1&arg2=2', res => {
                res.on('data', d => {
                    try {
                        const { result } = JSON.parse(d);
                        if (result === -1) {
                            resolve({ result });
                        } else {
                            reject({ result });
                        }
                    } catch (error) {
                        reject(error);
                    }
                });
            });

            req.on('error', err => {
                reject(err);
            });
            req.end();
        });
    });

    it('Should subtract 151545155 from 155484212 and return -1539402729', async function() {
        return await new Promise((resolve, reject) => {
            const req = http.request('http://localhost:3000/minus?arg1=151545155&arg2=155484212', res => {
                res.on('data', d => {
                    try {
                        const { result } = JSON.parse(d);
                        if (result === -3939057) {
                            resolve(( result ));
                        } else {
                            reject({ result });
                        }
                    } catch (error) {
                        reject(error);
                    }
                });
            });

            req.on('error', err => {
                reject(err);
            });
            req.end();
        });
    });

    it('Should respond with error code 400', async function() {
        return await new Promise((resolve, reject) => {
            const req = http.request('http://localhost:3000/minus?arg1=to&arg2=to', res => {
                if (res.statusCode === 400) {
                    resolve({ statusCode: 400 });
                } else {
                    reject({ statusCode: res.statusCode });
                }
            });

            req.on('error', err => {
                reject(err);
            });
            req.end();
        });
    });
});