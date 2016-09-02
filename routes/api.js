'use strict'
const router = require('express').Router()
const cpiModel = require('../models/cpi')

router.get('/cpi', cpiModel.calculate, (req, res)=>{
  res.json(res.inflationAdjusted)
})

module.exports = router;
