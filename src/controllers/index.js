const router = require('express').Router();

const patientController = require('./patient');

const donorController = require('./donor');

const bankController = require('./blood-banks');

router.get('/blood-banks', bankController.getBloodBank);
router.post('/blood-banks', bankController.postBloodBank);
router.get('/patient', patientController.getPatients);
router.post('/patient', patientController.postPatients);
router.get('/donors', donorController.getdonors);
router.post('/donors', donorController.postdonors);

module.exports = router;
