const router = require('express').Router();

const {
    getAllUsers,
    getOneUser,
    addUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
} = require('../../contollers/user-controller');

router
    .route('/')
    .get(getAllUsers)
    .post(addUser);

router
  .route('/:id')
  .get(getOneUser)
  .put(updateUser)
  .delete(deleteUser);

router
  .route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(deleteFriend);

module.exports = router;