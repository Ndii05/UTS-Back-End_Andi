const digitalBankingRepository = require('./digitalbank-repository');


//Create
async function createDigitalBanking(name, description, price, benefits, features) {
  try {
    await digitalBankingRepository.createDigitalBanking(name, description, price, benefits, features);
  } catch (err) {
    return null;
  }

  return true;
}

//Read 
async function getDigitalBankings() {
  const digitalBankings = await digitalBankingRepository.getDigitalBanking();

  const results = [];
  for (let i = 0; i < digitalBankings.length; i += 1) {
    const digitalbanking = digitalBankings[i];
    results.push({
      id: digitalbanking.id,
      name: digitalbanking.name,
      description: digitalbanking.description,
      price: digitalbanking.price,
      benefits: digitalbanking.benefits,
      features: digitalbanking.features
    });
  }

  return results;
}

//Update
async function updateDigitalBanking(id, name, description, price, benefits, features) {
  const digitalbank = await digitalBankingRepository.getDigitalBanking(id);

  if (!digitalbank) {
    return null;
  }

  try {
    await digitalBankingRepository.updateDigitalBanking(id, name, description, price, benefits, features);
  } catch (err) {
    return null;
  }

  return true;
}

//Delete
async function deleteDigitalBanking(id) {
  const digitalbank = await digitalBankingRepository.getDigitalBanking(id);

  if (!digitalbank) {
    return null;
  }

  try {
    await digitalBankingRepository.deleteDigitalBanking(id);
  } catch (err) {
    return null;
  }

  return true;
}

module.exports = {
  createDigitalBanking,
  getDigitalBankings,
  updateDigitalBanking,
  deleteDigitalBanking
};