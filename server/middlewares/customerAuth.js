const { Customer } = require('../models')
const { verifyToken } = require("../helpers/jwtCustomer");

async function customerAuth(req, res, next) {
    try {
        let { access_token } = req.headers

        if(!access_token) {
            throw { name: 'Unauthenticated' }
        }

        let payload = verifyToken(access_token);

        console.log(payload);

        let customer = await Customer.findByPk(payload.id)

        // console.log(payload, '<<< payload')

        if(!customer) {
            throw { name: 'Unauthenticated' }
        }

        req.customer = {
            id: customer.id,
            email: customer.email,
            role: customer.role
        }

        // console.log('halo nis')

        next()
    } catch (err) {
        next(err)
    }
}

module.exports = customerAuth;