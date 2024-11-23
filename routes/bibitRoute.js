import express, { Router } from "express";
const router = express.Router();
const bibit = [];

router.get('/', (req, res) => { res.json(bibit); });