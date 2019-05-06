module.exports = (req, res, next) => {
  if (req.session.user.provider) {
    return next()
  }
  return res.redirect('/')
}
