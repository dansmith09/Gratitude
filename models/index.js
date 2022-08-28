const User = require('./User');
const Journal = require('./Journal');
const Quotes = require('./Quotes');
const FavouriteQuotes = require('./FavouriteQuotes')

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
  foreignKey: 'user_id',
});

// User.belongsToMany(Quotes, {
//   through: {
//     model: FavouriteQuotes,
//     uniquekey: false
//   },
//   as: 'popular_quotes'
// });

// Quotes.belongsToMany(User, {
//   through: {
//     model: FavouriteQuotes,
//     uniquekey: false
//   },
//   as: 'favourited_quotes'
// });

module.exports = { User, Journal, Quotes, FavouriteQuotes };
