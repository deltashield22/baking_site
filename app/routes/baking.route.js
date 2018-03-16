const router = require('express').Router();
const bakingController = require('../controllers/baking.controller');

module.exports = router;

router.get('/', bakingController.readAll);
router.get('/:query', bakingController.readAll);

