const express = require('express');
const router = require('express').Router();
const customer = require('../models/customer.js');

router.get('/', function(req, res) {
	customer.getAll().then((results) => {
		res.json(results);
	});
})

router.post('/', function(req, res) {
	const id = req.body.product;
	const qty = req.body.quantity;

	customer.purchaseProduct(id, qty).then(msg => {
		res.json({message: msg});
	})
})



module.exports = router;
