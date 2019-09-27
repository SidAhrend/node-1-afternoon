const products = require('../products.json');

const getProducts = (request, response) => {
    if(require.query.price) {
        const items = products.filter(val => val >= parseInt(require.query.price));
        return response.status(200).send(items);
    }
    
}
module.exports = getProducts;