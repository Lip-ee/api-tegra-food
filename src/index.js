import express from 'express';
import { deleteProductById, findAllProducts, findProductById, saveProducts, updateProductById } from './controllers/products-controller.js';

const app = express();
app.use(express.json());

// ping pong
app.get('/api-tegra/ping', (req, res) => {
    res.json({
        "message": "pong!"
    })
});

// porta
app.listen(8000, () => {
    console.log('api rodando na porta 8000!');
});

/*   ENDPOINTS   */ 
app.post('/api-tegra/', saveProducts); // save products
app.get('/api-tegra/', findAllProducts); // find all products
app.get('/api-tegra/:id', findProductById); // find products by id
app.put('/api-tegra/:id', updateProductById); // update products by id
app.delete('/api-tegra/:id', deleteProductById); // delete products by id