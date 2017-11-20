const TodoItem = require('../models').TodoItem;
const Todo = require('../models').Todo;

module.exports = {
  create(req, res) {
    return Todo
      .create({
        title: req.body.title,
      })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Todo
      .findAll({
        include: [{
          model: TodoItem,
          as: 'TodoItems',
        }],
      })
      // .all()
      .then(todos => res.status(200).send(todos))
      .catch(error => res.status(400).send(error));
   },
   retrieve(req, res) {
     return Todo
      .findById(req.params.todoId, {
        include: [{
          model: TodoItem,
          as: 'TodoItems',
        }],
      })
      .then(todo => {
        if (!todo) {
          return res.status(404).send({
            message: 'Todo Not Found',
          });
        }
        return res.status(200).send(todo);
      })
      .catch(error => res.status(400).send(error));
   },
};
