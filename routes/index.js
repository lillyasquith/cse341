const routes = require ('express').Router()
const indexController = require ('../controllers/')

routes.get('/', indexController.lyRoute);
routes.get('/josh', indexController.joshRoute);
routes.get('/ody', indexController.odyRoute);

module.exports = routes;