const todosController = require('../controllers').todos;
const todoItemsController = require('../controllers').todoItems

module.exports = (app) => {
  // default message when the api is called
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));
  //create a new todo
  app.post('/api/todos', todosController.create);

  //list all todos
  app.get('/api/todos', todosController.list);

  //route for add items for each todo list
  app.post('/api/todos/:todoId/items', todoItemsController.create);
};
