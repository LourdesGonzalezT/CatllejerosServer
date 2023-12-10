const router = require("express").Router();

const Cat = require('./../models/Cat.model')

router.post('/newCat', (req, res, next) => {

  Cat
    .create(req.body)
    .then(response => res.json(response))
    .catch(err => next(err))
})

router.get('/getOneCat/:cat_id', (req, res, next) => {

  const { cat_id } = req.params

  Cat
    .findById(cat_id)
    .then(response => res.json(response))
    .catch(err => next(err))
})

router.get('/getAllCats', (req, res, next) => {

  Cat
    .find()
    .then(response => res.json(response))
    .catch(err => next(err))
})

router.put('/:cat_id/edit', (req, res, next) => {
  const { name, age, sex, aboutCat, image1, image2 } = req.body
  const { cat_id } = req.params

  Cat
    .findByIdAndUpdate(cat_id, { name, age, sex, aboutCat, image1, image2 })
    .then(response => res.json(response))
    .catch(err => next(err))
})

router.delete('/:cat_id/delete', (req, res, next) => {

  const { cat_id } = req.params

  Cat
    .findByIdAndDelete(cat_id)
    .then(response => res.json(response))
    .catch(err => next(err))
})


module.exports = router;
