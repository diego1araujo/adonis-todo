'use strict'

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');

class TodoSeeder {
    async run() {
        await Factory.model('App/Models/Todo').createMany(5);
    }
}

module.exports = TodoSeeder
