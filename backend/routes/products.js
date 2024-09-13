var express = require("express");
var router = express.Router();
const productSchema = require("../models/productModel");

// ดูสินค้าทั้งหมด
router.get("/", async (req, res) => {
    try {
        const products = await productSchema.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const product = await productSchema.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'product not found' });
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// สร้างสินค้าใหม่
router.post('/', async (req, res) => {
    try {
        const newproduct = new productSchema(req.body);
        const savedproduct = await newproduct.save();
        res.status(201).json(savedproduct);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


// แก้ข้อมูล product
router.put('/:id', async (req, res) => {
    try {
        const updatedproduct = await productSchema.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedproduct) return res.status(404).json({ message: 'product not found' });
        res.status(200).json(updatedproduct);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const deletedproduct = await productSchema.findByIdAndDelete(req.params.id);
        if (!deletedproduct) return res.status(404).json({ message: 'product not found' });
        res.status(200).json({ message: 'product deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
