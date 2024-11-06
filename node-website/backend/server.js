const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const products = require('./data/products.json');

// Маршрут для получения списка товаров
app.get('/api/products', (req, res) => {
  res.json(products);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));