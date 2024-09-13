var express = require("express");
var router = express.Router();
const orderSchema = require("../models/orderModel");

// ดูออเดอร์ล่าสุด
router.get("/", async (req, res) => {
    try {
        const order = await orderSchema.findOne({}, {}, { sort: { createdAt: -1 } });
        res.json(order);
    } catch (error) {
        console.log(error);
        res.send("404");
    }
});

// ดูออเดอร์ตาม user id
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id || req.query.id;
        const order = await orderSchema.findOne({ _id: id }, (err, data) => {
            if (err) res.status(404);
            return data;
        }).populate("createdBy");

        res.json(order);
    } catch (error) {
        console.log(error);
        res.render("404");
    }
});

// สร้างออเดอร์ใหม่
router.post('/', async (req, res) => {
    try {
        const neworder = new orderSchema(req.body);
        const savedorder = await neworder.save();
        res.status(201).json(savedorder);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


// แก้ข้อมูล order
router.put('/:id', async (req, res) => {
    try {
        const updatedorder = await orderSchema.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedorder) return res.status(404).json({ message: 'order not found' });
        res.status(200).json(updatedorder);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const deletedorder = await orderSchema.findByIdAndDelete(req.params.id);
        if (!deletedorder) return res.status(404).json({ message: 'order not found' });
        res.status(200).json({ message: 'order deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
