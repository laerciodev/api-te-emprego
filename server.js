const express = require('express');
const app = express();

app.use('/', (req, resp) => {

    resp.send('Hello, world!');
});

app.listen(4000, (err) => {
    
    if(err) {
        console.log('erro')
    }

    console.log('Iniciou em http://localhost:4000')
});