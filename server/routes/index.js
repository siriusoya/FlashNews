const router = require("express").Router()
const Controller = require('../controllers/controller')
const articlesRouter = require('./articles')
const categoriesRouter = require('./categories')
const historiesRouter = require('./histories')
const customersRouter = require('./customers')
const authentication = require('../middlewares/authentication')

router.get('/', Controller.home);

router.post('/register', Controller.register);

router.post('/login', Controller.login);

router.post('/google-sign-in', Controller.googleSignIn)

router.use('/customers', customersRouter);

router.use('/articles', authentication, articlesRouter);

router.use('/categories', authentication, categoriesRouter);

router.use('/histories', authentication, historiesRouter);



module.exports = router