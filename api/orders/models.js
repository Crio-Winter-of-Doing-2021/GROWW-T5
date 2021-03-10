const mongoose = require("mongoose");
const { Product } = require("../products/models");

const orderSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    productId: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    orderTime: {
        type: Date,
        default: Date.now()
    },
    orderType: {
        type: String,
        enum: ['Buy', 'Sell'],
        required: true
    },
    status: {
        type: String,
        enum: ['OnGoing', 'Failed', 'Completed'],
        default: 'OnGoing'
    }
});
orderSchema.methods.getPayload = async function() {
    var order = this;
    var product = await Product.findById(order.productId);
    var response = {
        id: order.id,
        userId: order.userId,
        product: product,
        quantity: order.quantity,
        orderTime: order.orderTime,
        orderType: order.orderType,
        status: order.status
    }
    return response;
}
exports.Order = new mongoose.model('Order', orderSchema);