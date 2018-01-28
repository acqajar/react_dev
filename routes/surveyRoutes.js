const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Survey = mongoose.model('surveys');

module.exports = app => {
  app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
    const { title, body, subject, recipients } = req.body;

    const survey = new Survey({
      // title: title, can just be title bc the same in es6
      title,
      subject,
      body,
      // recipients: recipients.split(',').map(email => {return {email:email.trim()}})
      // with es6, can be condensed to below
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now()
    });
  });
};
