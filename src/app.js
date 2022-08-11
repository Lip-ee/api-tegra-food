// imports
import express from 'express';
import router from './routes.js';

// app config
const app = express();
app.use(express.json());
app.use(router)

// porta
app.listen(8000, () => {
    console.log('API rodando na porta 8000!');
});
