import express, { Router } from "express";
const router = express.Router();
const pupuk = [];

router.get('/', (req, res) => { res.json(pupuk); });
router.post('/', (req, res) => {
    const newPupuk = {
        kd_pupuk: pupuk.length + 1,
        nm_pupuk: req.body.nm_pupuk,
        stock: req.body.stock,
    };
    pupuk.push(newPupuk);
    res.status(201).json(newPupuk)
});

router.delete('/:kd_pupuk', (req, res) => {
    const pupukIndex = pupuk.findIndex(p => p.kd_pupuk === parseInt(req.params.kd_pupuk));
    if (pupukIndex === -1) return res.status(404).json({ message: 'Data tidak ditemukan' });

    const deletedpupuk = pupuk.splice(pupukIndex, 1)[0];
    res.status(200).json({ message: `Pupuk. '${deletedpupuk.nm_pupuk}' telah dihapus` });
});

export default router;