import { openDatabase } from "../config-database.js";

// save products
export const saveProducts = async (req, res) => {
    const db = await openDatabase();

    // main
    const { title, price, description, image, category } = req.body;

    const data = await db.run(`
        INSERT INTO products
        (title, price, description, image, category)
        VALUES
        (?, ?, ?, ?, ?)
    `, [title, price, description, image, category]);

    db.close();

    res.send({
        id: data.lastID,
        title,
        price,
        description,
        image,
        category
    });
};


// find all products
export const findAllProducts = async (req, res) => {
    const db = await openDatabase();

    // main
    const products = await db.all(`
        SELECT * FROM products
    `)

    db.close();

    res.send(products);
};


// find all products with filter
export const findAllProductsWithFilter = async (req, res) => {
    const db = await openDatabase();

    const { category_q, alfa_q, min_q, max_q } = req.query;

    console.log(category_q, alfa_q, min_q, max_q)

    // main
    const products = await db.all(`
        SELECT * FROM products
        WHERE (category = ?)
            AND (price BETWEEN ? AND ?)
        ORDER BY
            ?;
    `, [category_q, min_q, max_q, alfa_q])

    db.close();

    res.send(products);
};


// find products by id
export const findProductById = async (req, res) => {
    const db = await openDatabase();

    // main
    const { id } = req.params;

    const product = await db.get(`
        SELECT * FROM products
        WHERE id = ?
    `, [id])

    if(product != null){
        db.close();

        res.send(product);

        return;
    }

    db.close();

    res.json({
        "message": "Erro. Parece que este ID não existe no database!"
    });
};


// update products by id
export const updateProductById = async (req, res) => {
    const db = await openDatabase();

    // main
    const { title, price, description, image, category } = req.body;
    const { id } = req.params;

    const product = await db.get(`
        SELECT * FROM products WHERE id = ?
    `, [id]);

    if(product){
        const data = await db.run(`
            UPDATE products
                SET title = ?,
                    price = ?,
                    description = ?,
                    image = ?,
                    category = ?
            WHERE id = ?
        `, [title, price, description, image, category, id]);

        db.close();

        res.send({
            id,
            title,
            price,
            description,
            image,
            category
        });
        return;
    }

    db.close();

    res.json({
        "message": "Ops, parece que este ID não está no database :("
    });
};


// delete products by id
export const deleteProductById = async (req, res) => {
    const db = await openDatabase();

    // main
    const { id } = req.params;
    
    const product = await db.get(`
        SELECT * FROM products WHERE id = ?
    `, [id]);

    if(product){
        const data = await db.run(`
            DELETE FROM products
            WHERE id = ?
        `, [id]);

        db.close();

        res.send({
            id,
            message: `Produto [${id}] deletado com sucesso`
        });
        return;
    }

    db.close();

    res.json({
        "message": "Ops, parece que este ID não está no database :("
    });
};


// ping pong check api
export const pingPong = async (req, res) => {
    res.json({
        "statusCode": 200,
        "message": "pong!"
    })
};
