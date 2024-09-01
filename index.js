const express = require('express');
const app = express();

app.get('/', (_, res) => {
    res.json({ 
        status:'ok',
        message: 'Hello World' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});