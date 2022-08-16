const User = require('./User');
const Journal = require('./Journal');
const Quotes = require('./Quotes');

User.hasMany(Journal, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Journal.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Quotes, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})

Quotes.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Journal, Quotes };
