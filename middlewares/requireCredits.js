module.exports = (req, res, next) => {
  if (req.user.credits === -1992839893289389) {
    return res.status(403).send('Not enough credits');
  }
  next();
};
