const products = require('../products.json');

const getProduct = (request, response) =>{
    const {price} = request.query
    let item = products.filter(val => val.price >= parseInt(price));
    if (!item) {
        return response.status(500).send('item not in list');

    } else return response.status(200).send(item);
}
    

module.exports = getProduct;