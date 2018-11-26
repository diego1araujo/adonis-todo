'use strict'

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');
const Todo = use('App/Models/Todo');

class TodoSeeder {
    async run() {
        await Todo.create({
            user_id: 1,
            title: 'Go to the gym',
        });

        await Todo.create({
            user_id: 1,
            title: 'Finish reading a book',
        });

        await Todo.create({
            user_id: 2,
            title: 'Take a walk with the dog',
        });
    }
}

module.exports = TodoSeeder
