const models = require('./models');

exports.getOrder = async(req, res) => {
    // #swagger.tags = ['order']
    var order = await models.Order.findById(req.params.id);
    if(!order) {
        res.status(404).send({msg: 'Not Found'});
    } else {
        order = await order.getPayload();
        res.status(200).send(order);
    }
}

exports.getAllOrder = async(req, res) => {
    // #swagger.tags = ['order']
    var orders = await models.Order.find({userId: req.data});
    for (var i = 0; i < orders.length; i++) {
        orders[i] = await orders[i].getPayload();
    }
    res.status(200).json(orders);
}

exports.placeOrder = async(req, res) => {
    // #swagger.tags = ['order']
    const newOrder = new models.Order({
        userId: req.data,
        productId: req.body.productId,
        quantity: req.body.quantity,
        orderType: req.body.orderType,
    });

    try {
        await newOrder.save();
        res.status(201).json({msg: "Success"});
    } catch (err) {
        res.status(500).json({msg: err});
    }
}

exports.updateOrderStatus = async(req, res) => {
    // #swagger.tags = ['order']
    try {
        var order = await models.Order.findByIdAndUpdate(req.params.id, {status: req.body.status});
        res.status(200).json({msg: "Success"});
    } catch (err) {
        res.status(500).json({msg: err.message});
    }
}