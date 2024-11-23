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

router.delete('/:kd_bibit', (req, res) => {
    const bibitIndex = bibit.findIndex(b => b.kd_bibit === parseInt(req.params.kd_bibit)); 
    if (bibitIndex === -1) { 
        return res.status(404).json({ 
            message: `Data bibit dengan kode '${req.params.kd_bibit}' tidak ditemukan` 
        });
    }
    const deletedBibit = bibit.splice(bibitIndex, 1)[0]; 
    res.status(200).json({ 
        message: `Bibit '${deletedBibit.nm_bibit}' telah berhasil dihapus`, 
        deletedBibit 
    });
});

export default router;