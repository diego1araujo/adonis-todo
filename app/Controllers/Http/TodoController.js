'use strict'

const Todo = use('App/Models/Todo');
const { validate } = use('Validator');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with todos
 */
class TodoController {
    async index ({ request, auth, response, view }) {
        const todos = await Todo
            .query()
            .where('user_id', auth.user.id)
            .fetch();

        return view.render('index', {
            todos: todos.toJSON(),
            name: auth.user.username,
        });
    }

    async store ({ request, auth, session, response }) {
        const todo = await Todo.create({
            user_id: auth.user.id,
            title: request.input('addTodo'),
        });

        session.flash({ successMessage: 'Todo was added!' });

        return response.redirect('back');
    }

    async edit ({ params, auth, request, response, view }) {
        const todo = await Todo.findOrFail(params.id);

        if (auth.user.id !== todo.user_id) {
            return 'You do not have permission to do this';
        }

        return view.render('edit', { todo });
    }

    async update ({ params, auth, session, request, response }) {
        const todo = await Todo.findOrFail(params.id);

        if (auth.user.id !== todo.user_id) {
            return 'You do not have permission to do this';
        }

        todo.title = request.input('editTodo');
        todo.completed = request.input('completedCheck') === 'on' ? true : false;
        await todo.save();

        session.flash({ successMessage: 'Todo was updated successfully!' });

        return response.route('todos.index');
    }

    async destroy ({ params, auth, session, request, response }) {
        const todo = await Todo.findOrFail(params.id);

        if (auth.user.id !== todo.user_id) {
            return 'You do not have permission to do this';
        }

        await todo.delete();

        session.flash({ successMessage: 'Todo was deleted successfully!' });

        return response.redirect('back');
    }
}

module.exports = TodoController
