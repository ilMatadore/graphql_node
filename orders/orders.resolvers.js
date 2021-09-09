const ordersModel = require('./orders.model');

module.exports = {
    Query: {
        orders: (parent, args, context, info) => {
            console.log('Getting orders...');
            return ordersModel.getAllOrders();
            }
    }
};