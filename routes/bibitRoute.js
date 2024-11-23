import express, { Router } from "express";
const router = express.Router();
const bibit = [];

router.get('/', (req, res) => { res.json(bibit); });

router.post('/', (req, res) => {
    const newBibit = {
        kd_bibit: bibit.length + 1,
        nm_bibit: req.body.nm_bibit, 
        stock: req.body.stock, 
    };
    bibit.push(newBibit); 
    res.status(201).json(newBibit); 
});