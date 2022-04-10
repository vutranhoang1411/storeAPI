


const dataModel = require('../models/dataModel');
async function getAllProduct(req,res){
    try{
        const { featured, company, name, sort, fields, numericFilters } = req.query;
        const queryObject={};
        if (featured){
            queryObject.featured=featured==='true'?true:false;
        }
        if (company){
            queryObject.company=company;
        }
        if (name){
            queryObject.name={
                $regex:name,
                $options:'i'
            };
        }
        let result = dataModel.find(queryObject);
        if (sort){
            const sortList = sort.split(',').join(' ')
            result = result.sort(sortList);
        }
        if (fields){
            const fieldList = fields.split(',').join(' ');
            result=result.select(fieldList);
        }
        const product = await result;

        res.status(200).json({
            product:product,
            length:product.length
        })
    }catch(error){
        console.log(error);
    }
    
}

module.exports={getAllProduct};