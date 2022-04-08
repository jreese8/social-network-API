const { Thought, User } = require('..models');

const userController = {
  getAllUsers(req, res) {
    User.find()
    .sort({ createdAt: -1 })
    .then((dbUserData) => {
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  },

  getOneUser(req, res) {
    User.findOne({ _id: req.params.userId })
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

  addUser(req, res) {
    User.create(req.body)
    .then((dbUserData) => {
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
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
          { new: true }
        )
        .then((dbUserData) => res.json(dbUserData))
        .catch((err) => res.json(err));
        },
      };

      module.exports = userController;