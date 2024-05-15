const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const inventorySchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Schema.Types.Decimal128, required: true },
    category: { type: String, required: true },
    quantity: { type: Number, required: true },
    tags: { type: [String], required: false }
}, {
    timestamps: true
});

const Inventory = mongoose.model('Inventory', inventorySchema);

module.exports = Inventory;