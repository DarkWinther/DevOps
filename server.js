const express = require('express');

const app = express();
const PORT = 3000;

app.get('/plus', (req, res) => {
    const { arg1, arg2 } = req.query || {};

    const a1 = parseFloat(arg1);
    const a2 = parseFloat(arg2);

    if (!isNaN(a1) && !isNaN(a2)) {
        return res.status(200).json({ result: a1 + a2 });
    }

    return res.sendStatus(400);
}).get('/minus', (req, res) => {
    const { arg1, arg2 } = req.query || {};

    const a1 = parseFloat(arg1);
    const a2 = parseFloat(arg2);

    if (!isNaN(a1) && !isNaN(a2)) {
        return res.status(200).json({ result: a1 - a2 });
    }

    return res.sendStatus(400);
}).listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
