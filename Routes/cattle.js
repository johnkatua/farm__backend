const express = require('express');
const router = express.Router();

const { create, list, cattleById, read, remove, update } = require('../controllers/cattle');

router.get('/cattle/:cattleId', read);
router.get('/cattles', list);
router.post('/cattle/create', create);
router.put('/cattle/:cattleId', update);
router.delete('/cattle/:cattleId', remove);

router.param('cattleId', cattleById)

module.exports = router;