const http = require('http');

describe('Plus', function() {
    it('Should add 1 to 1 and return 2', function() {
        return new Promise((resolve, reject) => {
            const req = http.request('http://localhost:3000/plus?arg1=1&arg2=1', res => {
                res.on('data', d => {
                    try {
                        const { result } = JSON.parse(d);
                        if (result === 2) {
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

    it('Should add 1557857484 to 18454755 and return 1576312239', function() {
        return new Promise((resolve, reject) => {
            const req = http.request('http://localhost:3000/plus?arg1=1557857484&arg2=18454755', res => {
                res.on('data', d => {
                    try {
                        const { result } = JSON.parse(d);
                        if (result === 1576312239) {
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
            })
            req.end();
        });
    });

    it('Should respond with error code 400', function() {
        return new Promise((resolve, reject) => {
            const req = http.request('http://localhost:3000/plus?arg1=to&arg2=to', res => {
                if (res.statusCode === 400) {
                    resolve({ statuscode: 400 });
                } else {
                    reject({ statuscode: res.statusCode });
                }
            });

            req.on('error', err => {
                reject(err);
            })
            req.end();
        });
    });
});