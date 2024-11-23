import express, { Router } from "express";
const router = express.Router();
const pupuk = [];

router.get('/', (req, res) => { res.json(pupuk); });
router.post('/', (req, res) => {
    const newProduct = {
        kd_pupuk: pupuk.length + 1,
        nm_pupuk: req.body.nm_pupuk,
        stock: req.body.stock,
    };
    pupuk.push(newPupuk);
    res.status(201).json(newPupuk)
});