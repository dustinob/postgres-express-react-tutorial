const todosController = require('../controllers').todos;

module.exports = (app) => {
  // default message when the api is called
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));
  //create a new todo
  app.post('/api/todos', todosController.create);

  //list all todos
  app.get('/api/todos', todosController.list);
};
