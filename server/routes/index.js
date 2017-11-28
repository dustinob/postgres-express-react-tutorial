const todosController = require('../controllers').todos;
const todoItemsController = require('../controllers').todoItems;

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

  app.get('/api/todos/:todoId', todosController.retrieve);

  app.put('/api/todos/:todoId', todosController.update);

  app.delete('/api/todos/:todoId', todosController.destroy);

  app.put('/api/todos/:todoId/items/:todoItemId', todoItemsController.update);

  app.delete('/api/todos/:todoId/items/:todoItemId', todoItemsController.destroy);

  app.all('/api/todos/:todoId/items', (req, res) =>
    res.status(405).send({
      message: 'Method Not Allowed',
  }));
};
