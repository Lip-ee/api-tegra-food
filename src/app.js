// imports
import express from 'express';
import router from './routes.js';

// app config
const app = express();
import cors from 'cors'

const corsOpts = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
      'PUT',
      'DELETE'
    ],
  
    allowedHeaders: [
      'Content-Type',
    ],
};
  
app.use(cors(corsOpts));

app.use(express.json());
app.use(router)

// porta
app.listen(8000, () => {
    console.log('API rodando na porta 8000!');
});
