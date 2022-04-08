const { Thought, User } = require('..models');

const thoughtController = {
  getAllThoughts(req, res) {
    Thought.find()
    .sort({ createdAt: -1 })
    .then((dbThoughtData) => {
      res.json(dbThoughtData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  },

  getOneThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
    .then((dbThoughtData) => {
      if (!dbThoughtData) {
        return res.status(404).json({ message: 'No thought assigned to this ID' });
      }
      res.json(dbThoughtData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  },

  addThought(req, res) {
    Thought.create(req.body)
    .then((dbThoughtData) => {
      
    })
  }