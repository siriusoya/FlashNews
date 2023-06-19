const router = require('express').Router();
const ControllerCustomer = require('../controllers/customerController')
const customerAuth = require('../middlewares/customerAuth')

router.post('/signup', ControllerCustomer.register);

router.post('/login', ControllerCustomer.login);

router.post('/google-sign-in', ControllerCustomer.googleSignIn)

router.get('/articles', ControllerCustomer.showArticles);

router.post('/bookmark/:articleId', customerAuth, ControllerCustomer.addBookmark);

router.get('/bookmark', customerAuth, ControllerCustomer.showBookmarks);

router.get('/articles/:id', ControllerCustomer.articleById);

module.exports = router