const router = require('express').Router();

const {
    getAllThoughts,
    getOneThought,
    addThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
} = require('../../contollers/thought-controller');

router
    .route('/')
    .get(getAllThoughts)
    .post(addThought);

router
  .route('/:id')
  .get(getOneThought)
  .put(updateThought)
  .delete(deleteThought);

router
  .route('/:thoughtId/reactions')
  .post(addReaction)
  .delete(deleteReaction);

module.exports = router;