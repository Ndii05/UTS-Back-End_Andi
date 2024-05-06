const { DigitalBanking } = require('../../../models')

//Create DigitalBanking
async function createDigitalBanking(name, description, price, benefits, features) {
  return DigitalBanking.create({
    name,
    description,
    price,
    benefits,
    features
  });
}

//Read DigitalBanking
async function getDigitalBanking() {
  return DigitalBanking.find({});
}

//Update DigitalBanking
async function updateDigitalBanking(id, name, description, price, benefits, features) {
  return DigitalBanking.updateOne(
    {
      _id: id,
    },
    {
      $set: {
        name,
        description,
        price,
        benefits,
        features
      },
    }
  );
}

//Delete DigitalBanking
async function deleteDigitalBanking(id) {
  return DigitalBanking.deleteOne({ _id: id });
}

module.exports = {
  createDigitalBanking,
  getDigitalBanking,
  updateDigitalBanking,
  deleteDigitalBanking
};
