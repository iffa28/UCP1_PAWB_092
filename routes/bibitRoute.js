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

router.put('/:kd_bibit', (req, res) => {
    const bibitUpdt = bibit.find(b => b.kd_bibit === parseInt(req.params.kd_bibit)); 
    if (!bibitUpdt) {
        return res.status(404).json({ message: 'Data tidak ditemukan' });
    }

    bibitUpdt.nm_bibit = req.body.nm_bibit || bibitUpdt.nm_bibit;
    bibitUpdt.stock = req.body.stock || bibitUpdt.stock;

    res.status(200).json({
        message: `Bibit dengan ID '${bibitUpdt.kd_bibit}' telah diperbarui`,
        updatedBibit: bibitUpdt
    });
});


export default router;