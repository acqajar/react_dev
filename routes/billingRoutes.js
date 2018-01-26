const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSectreKey);
module.exports = app => {
  app.post('/api/stripe', (req, res) => {});
};
