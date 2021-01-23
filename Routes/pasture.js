const express = require('express');
const router = express.Router();

const { create, list, pastureById, read, update, remove } = require('../controllers/pasture');

router.get('/pasture/:pastureId', read);
router.get('/pasture', list);
router.post('/pasture/create', create);
router.put('/pasture/:pastureId', update);
router.delete('/pasture/:pastureId', remove);

router.param('pastureId', pastureById);

module.exports = router;
