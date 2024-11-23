import express, { Router } from "express";
const router = express.Router();
const pupuk = [];

router.get('/', (req, res) => { res.json(pupuk); });