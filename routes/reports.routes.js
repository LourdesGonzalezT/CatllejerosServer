const router = require("express").Router();

const Report = require('./../models/Report.model')

router.post('/newReport', (req, res, next) => {

  Report
    .create(req.body)
    .then(response => res.json(response))
    .catch(err => next(err))
})

router.get('/getOneReport/:report_id', (req, res, next) => {
  const { report_id } = req.params

  Report
    .findById(report_id)
    .then(response => res.json(response))
    .catch(err => next(err))
})

router.get('/getAllReports', (req, res, next) => {

  Report
    .find()
    .then(response => res.json(response))
    .catch(err => next(err))
})

router.put('/:report_id/edit', (req, res, next) => {
  const { } = req.body
  const { } = req.params

  Report
    .findByIdAndUpdate(report_id)
    .then(response => res.json(response))
    .catch(err => next(err))
})

router.delete('/:report_id/delete', (req, res, next) => {
  Report
    .findByIdAndDelete(report_id, {})
    .then(response => res.json(response))
    .catch(err => next(err))
})

module.exports = router;