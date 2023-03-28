const express = require("express");
const app = express();
const PORT = 8080;
const db = require("./config/database")

app.use(express.json())
app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${8080}`));

// Tabla de Products y Categories creada desde el código usando las transparencias
app.get('/createtableProducts', (req, res) => {

    let sql = 'CREATE TABLE products(id int AUTO_INCREMENT,title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))'

    db.query(sql, (err, result) => {

        if (err) throw err;

        console.log(result);

        res.send('Products table created...')

    })

})

app.get('/createtableCategories', (req, res) => {

    let sql = 'CREATE TABLE categories(id int AUTO_INCREMENT,title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))'

    db.query(sql, (err, result) => {

        if (err) throw err;

        console.log(result);

        res.send('Categories table created...')

    })

})

const express = require("express");
const app = express();
const PORT = 8080;
const db = require("./config/database");
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${8080}`));

// Endpoint para añadir un producto nuevo
app.post('/products', (req, res) => {

    const { title, body } = req.body;

    let sql = 'INSERT INTO products (title, body) VALUES (?, ?)';

    db.query(sql, [title, body], (err, result) => {

        if (err) throw err;

        console.log(result);

        res.send('New product added...');

    })

})

// Endpoint para crear una categoría nueva
app.post('/categories', (req, res) => {

    const { title, body } = req.body;

    let sql = 'INSERT INTO categories (title, body) VALUES (?, ?)';

    db.query(sql, [title, body], (err, result) => {

        if (err) throw err;

        console.log(result);

        res.send('New category added...');

    })

})

// endpoint para actualizar un producto
app.put('/products/:id', (req, res) => {

    const productId = req.params.id;
    const { title, body } = req.body;

    let sql = 'UPDATE products SET title = ?, body = ? WHERE id = ?';

    db.query(sql, [title, body, productId], (err, result) => {

        if (err) throw err;

        console.log(result);

        res.send('Product updated...');

    })

})

// Endpoint para actualizar una categoría
app.put('/categories/:id', (req, res) => {

    const categoryId = req.params.id;
    const { title, body } = req.body;

    let sql = 'UPDATE categories SET title = ?, body = ? WHERE id = ?';

    db.query(sql, [title, body, categoryId], (err, result) => {

        if (err) throw err;

        console.log(result);

        res.send('Category updated...');

    })

})

// Endpoint para mostrar todos los productos
app.get('/products', (req, res) => {

    let sql = 'SELECT * FROM products';

    db.query(sql, (err, result) => {

        if (err) throw err;

        console.log(result);

        res.send(result);

    })

})

// Endpoint para mostrar todas las categorías
app.get('/categories', (req, res) => {

    let sql = 'SELECT * FROM categories';

    db.query(sql, (err, result) => {

        if (err) throw err;

        console.log(result);

        res.send(result);

    })

})

// Endpoint para seleccionar un producto por id
app.get('/products/:id', (req, res) => {

    let sql = `SELECT * FROM products WHERE id = ${req.params.id}`;

    db.query(sql, (err, result) => {

        if (err) throw err;

        console.log(result);

        res.send(result);

    })

})

// Endpoint para mostrar los productos de forma descendente
app.get('/products/desc', (req, res) => {

    let sql = 'SELECT * FROM products ORDER BY id DESC';

    db.query(sql, (err, result) => {

        if (err) throw err;

        console.log(result);

        res.send(result);

    })

})

// Endpoint para seleccionar una categoría por id
app.get('/categories/:id', (req, res) => {

    let sql = `SELECT * FROM categories WHERE id = ${req.params.id}`;

    db.query(sql, (err, result) => {

        if (err) throw err;

        console.log(result);

        res.send(result);

    })

})

// Endpoint para buscar un producto por su nombre
app.get('/products/search/:name', (req, res) => {

    let sql = `SELECT * FROM products WHERE title LIKE '%${req.params.name}%'`;

    db.query(sql, (err, result) => {

        if (err) throw err;

        console.log(result);

        res.send(result);

    })

})
