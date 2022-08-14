import { Router } from "express";
import {
    deleteProductById,
    findAllProducts,
    findAllProductsWithFilter,
    findProductById,
    pingPong,
    saveProducts,
    updateProductById
} from './controllers/products-controller.js';

const router = Router();

router.get('/api-tegra/ping', pingPong); // ping pong

/*   ENDPOINTS   */ 
router.post('/api-tegra', saveProducts); // save products
router.get('/api-tegra', findAllProducts); // find all products
router.get('/api-tegra', findAllProductsWithFilter); // find especific products
router.get('/api-tegra/:id', findProductById); // find products by id
router.put('/api-tegra/:id', updateProductById); // update products by id
router.delete('/api-tegra/:id', deleteProductById); // delete products by id

export default router;
