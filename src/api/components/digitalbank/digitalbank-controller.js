const digitalBankingService = require('./digitalbank-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

//Create
async function createDigitalBanking(request, response, next) {
  try {
    const name = request.body.name;
    const description = request.body.description;
    const price = request.body.price;
    const benefits = request.body.quantity;
    const features = request.body.features;

    const success = await digitalBankingService.createDigitalBanking(name, description, price, benefits, features);
    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to create user'
      );
    }
    return response.status(200).json({ name, description, price, benefits, features });

  } catch (error) {
    return next(error);
  }
}

//Read
async function getDigitalBankings(request, response, next) {
  try {
    const digitalbankings = await digitalBankingService.getDigitalBankings();
    return response.status(200).json(digitalbankings);
  } catch (error) {
    return next(error);
  }
}

//Update
async function updateDigitalBanking(request, response, next) {
  try {
    const id = request.params.id;
    const name = request.body.name;
    const description = request.body.description;
    const price = request.body.price;
    const benefits = request.body.quantity;
    const features = request.body.features;

    const success = await digitalBankingService.updateDigitalBanking(id, name, description, price, benefits, features);
    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to update Digital Banking'
      );
    }

    return response.status(200).json({ id });
  } catch (error) {
    return next(error);
  }
}

//Delete
async function deleteDigitalBanking(request, response, next) {
  try {
    const id = request.params.id;

    const success = await digitalBankingService.deleteDigitalBanking(id);
    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to delete Digital Banking'
      );
    }

    return response.status(200).json({ id });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  createDigitalBanking,
  getDigitalBankings,
  updateDigitalBanking,
  deleteDigitalBanking
};