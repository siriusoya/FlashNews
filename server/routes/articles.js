const router = require('express').Router();
const Controller = require('../controllers/controller')
const authorization = require('../middlewares/authorization')
const updateAuth = require('../middlewares/updateAuth')

router.get('/', Controller.articleList);

router.post('/', Controller.addArticle);

router.get('/:id', Controller.articleById);

router.put('/:id', authorization, Controller.editArticle);

router.patch('/:id', updateAuth, Controller.updateStatus);

router.delete('/:id', authorization, Controller.destroyArticle);

module.exports = router