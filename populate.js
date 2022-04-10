const Product = require('./models/product');
const data = require('./products.json')
const populate = async ()=>{
    await Product.insertMany(data);
}
module.exports=populate;