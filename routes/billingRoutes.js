const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSectreKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    console.log(req.body);

    const charge = await stripe.charges.create({
      amount: 5000,
      currency: 'usd',
      description: 'paying for subscription',
      source: req.body.id
    });
    console.log(charge);

    req.user.credits += 1;
    const user = await req.user.save();
    res.send(user);
  });
};
