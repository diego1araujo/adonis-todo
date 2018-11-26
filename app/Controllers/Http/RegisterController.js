'use strict'

const User = use('App/Models/User');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with registers
 */
class RegisterController {
    async create ({ request, response, view }) {
        return view.render('register');
    }

    async store ({ request, session, response }) {
        const user = await User.create({
            username: request.input('email'),
            email: request.input('email'),
            password: request.input('password'),
        });

        session.flash({ successMessage: 'You have registered successfully!' });

        return response.redirect('/login');
    }
}

module.exports = RegisterController
