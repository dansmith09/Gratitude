const sequelize = require('../config/connection');
const { User, Quotes, Journal } = require('../models');

const userData = require('./userData.json');
const quotesData = require('./quotesData.json');
const journalData = require('./journalData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const quotes of quotesData) {
    await Quotes.create({
      ...quotes,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const journal of journalData) {
    await Journal.create({
      ...journal,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
