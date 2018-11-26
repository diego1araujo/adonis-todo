'use strict'

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');
const User = use('App/Models/User');

class UserSeeder {
    async run() {
        await User.create({
            username: 'User',
            email: 'user@email.com',
            password: 'secret',
        });

        await User.create({
            username: 'User 02',
            email: 'user02@email.com',
            password: 'secret',
        });
    }
}

module.exports = UserSeeder
