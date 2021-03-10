const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
    closePrice: String,
    openPrice: String,
    volume: String,
    marketCap: String,
    about: String,
    value: String,
    closingPrice: [{type: String}]
});
exports.Stock = new mongoose.model('Stock', stockSchema);
const Stock = new mongoose.model('Stock', stockSchema);

const mutualFundSchema = new mongoose.Schema({
    risk: String,
    nav: String,
    fundSize: String,
    about: String,
    closePrices: [{type: String}]
});
exports.MutualFund = new mongoose.model('MutualFund', mutualFundSchema);
const MutualFund = new mongoose.model('MutualFund', mutualFundSchema);

const productSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['Mutual Fund', "Stocks"],
        required: true
    },
    specifications: {
        type: mongoose.Schema.Types.ObjectId,
        enum: [MutualFund, Stock],
        required: true
    }
});
productSchema.methods.getPayload = async function() {
    var product = this;
    
    var specs;
    if (product.category === "Mutual Fund") {
        specs = await MutualFund.findById(product.specifications);
    }

    if (product.category === "Stocks") { 
        specs = await Stock.findById(product.specifications);
    }

    return {
        id: product.id,
        name: product.name,
        category: product.category,
        specifications: specs
    }
}
exports.Product = new mongoose.model('Product', productSchema);
const Product = new mongoose.model("Product", productSchema);
