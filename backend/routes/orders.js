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
        const userID = req.params.id
        console.log(userID)
        const order = await orderSchema.find({createdBy: userID});
        res.send(order)
    } catch (error) {
        console.log(error);
        res.status(500).send({"message": error});
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


//delete all products in orders by  id
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
