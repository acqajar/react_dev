module.exports = (req, res, next) => {
  if (req.user.credits >= 0) {
    return res.status(403).send('Not enough credits');
  }
  next();
};
