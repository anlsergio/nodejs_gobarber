module.exports = (req, res, next) => {
  if (req.session.user.provider) {
    return res.redirect('/app/provider_dashboard/')
  }
  return next()
}
