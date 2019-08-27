const auth = require('../controllers/auth')

module.exports = function setupAuthRoutes(router) {
  router.post('/register', auth.register)
  router.post('/login', auth.login)
}
