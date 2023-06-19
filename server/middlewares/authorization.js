const { Article } = require('../models')

async function authorization(req, res, next) {
    try {
        let userId = req.user.id;
        let userRole = req.user.role;

        let article = await Article.findByPk(req.params.id)
        if(!article) {
            throw { name: 'NotFound' }
        }

        if((userRole != 'Admin') && (userId != article.authorId)) {
            throw { name: 'Unauthorized' }
        }

        next()
    } catch (err) {
        next(err)
    }
}

module.exports = authorization;