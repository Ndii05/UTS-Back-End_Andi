const joi = require('joi');


module.exports = {
  createDigitalBanking: {
    body: {
      name: joi.string().required().label('Name'),
      description: joi.string().required().label('Description'),
      price: joi.number().required().label('Price'),
      benefits: joi.string().required().label('Benefits'),
      features: joi.string().required().label('Features'),
    },
  },
};
