'use strict'
const router = require('express').Router()
const cpiModel = require('../models/cpi')

router.get('/', cpiModel.calculate, (req, res)=>{
  res.json(res.inflationAdjusted)
})

module.exports = router;
