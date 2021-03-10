const models = require('./models');

exports.createProduct = async(req, res) => {
    // #swagger.tags = ['product']
    try {
        var specifications;
        if (req.body.category === "Mutual Fund") {
            specifications = new models.MutualFund(req.body.specifications);
        } else {
            specifications = new models.Stock(req.body.specifications);
        }
        await specifications.save();
        const product = new models.Product({
            name: req.body.name,
            category: req.body.category,
            specifications: specifications
        });
        await product.save();
        res.status(201).json({msg: "Created"});
    } catch (err) {
        console.log(err);
        res.status(500).json({msg: err.message});
    }


}

exports.fetchProduct = async(req, res) => {
    // #swagger.tags = ['product']
    let product = await models.Product.findById(req.params.id);
    var response = await product.getPayload();
    res.json(response);
}

exports.fetchAllProduct = async(req, res) => {
    // #swagger.tags = ['product']
    var products = await models.Product.find({category: req.query.category});

    for(var i = 0; i < products.length; i++) {
        products[i] = await products[i].getPayload();
    }

    res.json(products);
}

exports.updateProduct = async(req, res) => {
    // #swagger.tags = ['product']
    try {
        models.Product.findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.json({msg: 'Success'}));
    } catch (err) {
        res.json(err);
    }  
}