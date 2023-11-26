const router = require("express").Router();

const User = require('../models/User.model')

router.post('/newUser', (req, res, next) => {

  User
    .create(req.body)
    .then(response => res.json(response))
    .catch(err => next(err))
})

router.get('/getOneUser/:user_id', (req, res, next) => {
  const { user_id } = req.params

  User
    .findById(user_id)
    .then(response => res.json(response))
    .catch(err => next(err))
})

router.get('/getAllUsers', (req, res, next) => {

  User
    .find()
    .then(response => res.json(response))
    .catch(err => next(err))
})

router.put('/:user_id/edit', (req, res, next) => {
  const { email, password, role } = req.body
  const { user_id } = req.params

  User
    .findByIdAndUpdate(user_id, { email, password, role })
    .then(response => res.json(response))
    .catch(err => next(err))
})

router.delete('/:user_id/delete', (req, res, next) => {

  const { user_id } = req.params

  User
    .findByIdAndDelete(user_id)
    .then(response => res.json(response))
    .catch(err => next(err))
})

router.put('/:user_id/changeRole', (req, res, next) => {

  const { user_id } = req.params
  const { role } = req.body

  User
    .findByIdAndUpdate(user_id, { role })
    .then(response => res.json(response))
    .catch(err => next(err))
})

module.exports = router;
