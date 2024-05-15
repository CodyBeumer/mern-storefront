const router = require('express').Router();
let Inventory = require('../models/inventory.model');

router.route('/get').get((req, res) => {
    Inventory.find()
        .then(inventory => res.json(inventory))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/put').put((req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    const category = req.body.category;
    const quantity = req.body.quantity;
    const tags = req.body.tags || [];

    const newInventory = new Inventory({
        name,
        description,
        price,
        category,
        quantity,
        tags
    });

    newInventory.save()
        .then(() => res.json('Sucess'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;