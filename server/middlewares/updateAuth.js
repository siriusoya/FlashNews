const { Article } = require('../models')

async function updateAuth(req, res, next) {
    try {
        let userRole = req.user.role;

        let article = await Article.findByPk(req.params.id)

        if(!article) {
            throw { name: 'NotFound' }
        }

        if((userRole != 'Admin')) {
            throw { name: 'Unauthorized' }
        }

        next()
    } catch (err) {
        next(err)
    }
}

module.exports = updateAuth;