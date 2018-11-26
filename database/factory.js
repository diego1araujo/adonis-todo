'use strict'

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/User', (faker) => {
    return {
        username: faker.username(),
    }
});

Factory.blueprint('App/Models/Todo', (faker) => {
    return {
        title: faker.sentence({ words: 5 }),
        completed: false,
    }
});
