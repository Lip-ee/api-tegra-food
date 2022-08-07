const express = require('express');
const app = express();
app.use(express.json());

app.get('/api-tegra/ping', async function(require, response){
    response.json({
        "message": "pong!"
    });
});

app.post('/api-tegra/save-product', async function(require, response){
    console.log(require.body);
    response.json({
        "statusCode": 200
    });
});

app.listen(8000, ()=> console.log('rodando na porta 8000!'));