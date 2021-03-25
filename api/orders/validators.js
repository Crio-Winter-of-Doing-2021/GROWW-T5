const { Joi } = require('express-validation');

exports.placeOrderPostIn = {
    headers: Joi.object({
        accesstoken: Joi.string()
            .required()
    }),
    body: Joi.object({
        productId: Joi.string()
            .required(),
        quantity: Joi.number()
            .integer()
            .required(),
        orderType: Joi.string()
            .valid('Buy','Sell')
            .required()
    })
}

exports.updateOrderStatusPutIn = {
    params: Joi.object({
        id: Joi.string()
            .required(),
    }),
    body: Joi.object({
        status: Joi.string()
            .valid("Completed", "Failed")
            .required()
    })
}