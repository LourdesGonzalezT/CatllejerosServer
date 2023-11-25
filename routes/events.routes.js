const router = require("express").Router();

const Event = require('./../models/Event.model')

router.post('/newEvent', (req, res, next) => {

  Event
    .create(req.body)
    .then(response => res.json(response))
    .catch(err => next(err))
})

router.get('/getOneEvent/:event_id', (req, res, next) => {
  const { event_id } = req.params

  Event
    .findById(event_id)
    .then(response => res.json(response))
    .catch(err => next(err))
})

router.get('/getAllEvents', (req, res, next) => {

  Event
    .find()
    .then(response => res.json(response))
    .catch(err => next(err))
})

router.put('/:event_id/edit', (req, res, next) => {
  const { } = req.params
  const { } = req.body
  Event
    .findByIdAndUpdate(event_id, {})
    .then(response => res.json(response))
    .catch(err => next(err))
})

router.delete('/:event_id/delete', (req, res, next) => {
  Event
    .findByIdAndDelete(event_id)
    .then(response => res.json(response))
    .catch(err => next(err))
})

module.exports = router;
