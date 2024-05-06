const express = require('express');
const authenticationMiddleware = require('../../middlewares/authentication-middleware');
const celebrate = require('../../../core/celebrate-wrappers');
const digitalBankingController = require('./digitalbank-controller');
const digitalBankingValidator = require('./digitalbank-validator');

const route = express.Router();


module.exports = (app) => {
  app.use('/digitalbanking', route);

  // Create DigitalBanking
  route.post(
    '/',
    authenticationMiddleware,
    celebrate(digitalBankingValidator.createDigitalBanking),
    digitalBankingController.createDigitalBanking
  );

  // Read DigitalBanking
  route.get('/', authenticationMiddleware, digitalBankingController.getDigitalBankings);


  // Update DigitalBanking
  route.put(
    '/:id',
    authenticationMiddleware,
    digitalBankingController.updateDigitalBanking
  );

  // Delete DigitalBanking
  route.delete('/:id', authenticationMiddleware, digitalBankingController.deleteDigitalBanking);

}
