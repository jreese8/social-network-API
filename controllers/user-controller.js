const { Thought, User } = require('../models');

const userController = {
  getAllUsers(req, res) {
    User.find({})
    .populate({
      path: 'friends',
      select: '-__v'
    })
    .populate({
      path: 'thoughts',
      select: '-__v'
    })
    .select('-__v')
    .sort({ _id: -1 })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.sendStatus(400);
    });
  },

  getOneUser({ params }, res) {
    User.findOne({ _id: params.id })
    .populate({
      path: 'friends',
      select: '-__v'
    })
    .populate({
      path: 'thoughts',
      select: '-__v'
    })
    .select('-__v')
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  addUser({ body }, res) {
    User.create(body)
    .then(dbUserData => res.json(dbUserData))
      .catch(err => res.json(err));
  },

  updateUser({params, body}, res) {
    User.findOneAndUpdate(
      { _id: params.id }, body, 
      { new: true, runValidators: true }
    )
      .then((dbUserData) => {
        if (!dbUserData) {
          return res.status(404).json({ message: 'No User assigned to this ID' });
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
    },

    deleteUser({params}, res) {
      User.findOneAndDelete(
        { _id: params.id }
      )
        .then((dbUserData) => {
          if (!dbUserData) {
            return res.status(404).json({ message: 'No User assigned to this ID' });
          }
          res.json(dbUserData);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });
      },

      addFriend({ params, body }, res) {
        User.findOneAndUpdate(
          { _id: params.userId }, 
          { $push: { friend: body } },
          { new: true, runValidators: true }
        )
        .then((dbUserData) => {
          if (!dbUserData) {
            return res.status(404).json({ message: 'No thought assigned to this ID' });
          }
          res.json(dbUserData);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });
      },

      deleteFriend({ params }, res) {
        User.findOneAndUpdate(
          { _id: params.userId },
          { $pull: { friend: { friendId: params.friendId } } },
          { new: true, runValidators: true }
        )
        .then((dbUserData) => res.json(dbUserData))
        .catch((err) => res.json(err));
        },
      };

      module.exports = userController;